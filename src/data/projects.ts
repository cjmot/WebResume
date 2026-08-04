import { Project } from '../types.ts';

export const projects: Project[] = [
    {
        name: 'Home Server and Homelab',
        description: 'A self-hosted home server built with Proxmox, Tailscale, Pi-hole, Dockhand, and containerized services for private infrastructure and production-style learning.',
        route: 'home-server-homelab',
        stack: ['Proxmox', 'Tailscale', 'Pi-hole', 'Docker', 'Dockhand', 'Reverse Proxy'],
        highlights: [
            'Self-hosting services including cloud storage, a reverse proxy, password management, and cloud photo storage.',
            'Using Tailscale and network-level tooling to make private services easier to reach and administer securely.',
            'Expanding the homelab with a dedicated development environment for testing changes before deploying to the production stack.',
            'Practicing infrastructure operations, service isolation, backups, and deployment discipline in a real environment.',
        ],
        featured: true,
    },
    {
        name: 'Kingsland Store',
        description: 'A full-stack shopping experience built for CS 260 at BYU with product browsing, account flows, and server-backed data.',
        route: 'kingsland',
        link: 'https://github.com/cjmot/startup',
        stack: ['React', 'JavaScript', 'Express', 'MongoDB'],
        highlights: [
            'Built reusable product and navigation views for a storefront-style experience.',
            'Connected client workflows to an Express API for persistent app behavior.',
            'Practiced deploying and iterating on a full-stack web application from scratch.',
        ],
        featured: true,
    },
    {
        name: 'Roguelike Game',
        description: 'A Python roguelike game prototype focused on turn-based exploration, character progression, and a leveling system.',
        route: 'roguelike-game',
        stack: ['Python', 'Game Design', 'CLI'],
        highlights: [
            'Designed gameplay loops around exploration, combat, and player progression.',
            'Modeled character state and level growth in a way that can support new enemies and items.',
            'Kept the project modular enough to extend with additional maps, mechanics, and encounters.',
        ],
    },
    {
        name: 'Chess',
        description: 'A Java chess application built for CS 240 at BYU, including command-line play and full game-state validation.',
        route: 'chess',
        link: 'https://github.com/cjmot/chess',
        stack: ['Java', 'CLI', 'Object-Oriented Design'],
        highlights: [
            'Implemented chess rules, move validation, board state, and game flow.',
            'Organized the code around clear domain objects for pieces, board positions, and commands.',
            'Built a reliable foundation for future UI, networking, or AI features.',
        ],
        featured: true,
    },
    {
        name: 'Web Resume',
        description: 'This portfolio site: a Vite, TypeScript, React, and Tailwind project structured around reusable resume data.',
        route: 'other-portfolio',
        link: 'https://github.com/cjmot/WebResume',
        stack: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
        highlights: [
            'Created a personal site that can grow as new projects and experience are added.',
            'Separated content from presentation so resume entries are easy to maintain.',
            'Refined the interface toward a focused, resume-first reading experience.',
        ],
    },
];
