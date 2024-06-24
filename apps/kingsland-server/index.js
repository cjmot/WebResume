const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');
const cors = require('cors');

const kingslandExp = express();

const authCookieName = 'token';

// Service port, in production front-end code statically hosted by service on same port.
const port = process.argv.length > 2 ? process.argv[2] : 3031;

// JSON body parsing using built-in middleware
kingslandExp.use(express.json());

kingslandExp.use(cors());

// Use the cookie parser middleware for tracking authentication tokens
kingslandExp.use(cookieParser());

// Serve up front-end static content hosting
kingslandExp.use(express.static('public'));

kingslandExp.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();

kingslandExp.use('/kingsland', apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) =>{
    DB.createUser(req.body.userName, req.body.password)
        .then(user => {
            setAuthCookie(res, user.userId)
            return res.send(user);})
        .catch(error => {
            return res.status(409).send(error);
        });

});

apiRouter.get('/auth/login', async (req, res) => {
    const reqUser = req.body
    const user = await DB.getUser(reqUser.userName);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.userId);
            res.send(user);
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// GetUser returns info about user
apiRouter.get('/user/:userId', async (req, res) => {
    const user = await DB.getUser(req.params.userId);
    if (user) {
        const userId = req?.cookies.userId;
        return res.send({
            userId: user.userId,
            userName: user.userName,
            email: user.email,
        });
    }
    return res.status(404).send({ msg: 'Unknown' });
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
    authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
        return next();
    } else {
        return res.status(401).send({ msg: 'Unauthorized' });
    }
})

secureApiRouter.get('/products', async (req, res) => {
    const products = await DB.getProducts();
    return res.send(products);
});

secureApiRouter.post('/product', async (req, res) => {
    const product = req.body;
    await DB.addProduct(product);
    const products = await DB.getProducts();
    return res.send(products);
});

secureApiRouter.delete('/cartItems/deleteCartItem', async (req, res) => {
    const email = req.query.email;
    const itemId = req.query.id;
    await DB.updateCartItems(email, Number(itemId))
    const cartItems = await DB.getCartItems(email)
    return res.send(cartItems);
});

secureApiRouter.post('/cartItem', async (req, res) =>{
    const cartItem = req.body;
    await DB.addCartItem(cartItem);
    const cartItems = await DB.getCartItems(req.body.email);
    return res.send(cartItems);

})

secureApiRouter.get('/cartItems', async (req, res) => {
    try {
        const email = req.query.email;
        const cartItems = await DB.getCartItems(email);
        return res.send(cartItems)
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
})

kingslandExp.use((_req, res) => {
    return res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
    });
}

const httpService = kingslandExp.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

peerProxy(httpService)
