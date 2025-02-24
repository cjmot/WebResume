import { WebSocketServer } from 'ws';
import uuid from 'uuid';

export default function peerProxy(httpServer: any) {
    // Create a websocket object
    const wss = new WebSocketServer({ noServer: true });

    // Handle the protocol upgrade from HTTP to WebSocket
    httpServer.on('upgrade', (request: any, socket: any, head: any) => {
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    });

    // Keep track of all the connections so we can forward messages
    const connections: {id?: string; alive: boolean; ws: any}[] = [];

    wss.on('connection', (ws) => {
        const connection = {id: uuid.v4(), alive: true, ws: ws};
        connections.push(connection);

        // Forward messages to everyone except the sender
        ws.on('message', function message(data) {
            connections.forEach((c) => {
                if (c.id !== connection.id) {
                    c.ws.send(data);
                }
            });
        });

        // Remove the closed connection so we don't try to forward anymore
        ws.on('close', () => {
            const pos = connections.findIndex((o) => o.id === connection.id);

            if (pos >= 0) {
                connections.splice(pos, 1);
            }
        });

        // Respond to pong messages by marking the connection alive
        ws.on('pong', () => {
            connection.alive = true;
        });
    });

    // Keep active connections alive
    setInterval(() => {
        connections.forEach((c) => {
            // Kill any connection that didn't respond to the ping last time
            if (!c.alive) {
                c.ws.terminate();
            } else {
                c.alive = false;
                c.ws.ping();
            }
        })
    }, 1000);
}