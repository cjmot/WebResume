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
        name: 'Tweeter Clone',
        description: 'A full-stack Twitter-style social app with a React frontend, shared TypeScript models, and an AWS serverless backend for auth, follows, feeds, stories, and status posting.',
        route: 'tweeter-clone',
        link: 'https://github.com/cjmot/tweeter-clone',
        demoLink: 'https://cjmot.github.io/tweeter-clone/',
        stack: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'S3', 'SQS'],
        highlights: [
            'Built across a multi-package TypeScript codebase with separate web, shared model, and server modules.',
            'Implemented client-server flows for login, registration, following, follower counts, feeds, stories, and status creation.',
            'Used AWS SAM, API Gateway, Lambda handlers, DynamoDB DAOs, S3 image storage, and SQS queue processing for backend infrastructure.',
            'Practiced presenter-based frontend architecture with Jest tests around network and UI behavior.',
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
        name: 'This Portfolio Website',
        description: 'This portfolio site: a Vite, TypeScript, React, and Tailwind project structured around reusable resume data and built with the assistance of AI tools to accelerate development.',
        route: 'other-portfolio',
        link: 'https://github.com/cjmot/WebResume',
        stack: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
        highlights: [
            'Created a personal site that can grow as new projects and experience are added.',
            'Created an automated deployment pipeline with GitHub Actions to build and deploy the site to GitHub Pages.',
            'Created a mirrored repository on my personal git server to allow for private development and testing of new features.',
        ],
    },
];
