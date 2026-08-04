import { Experience } from '../types.ts'

export const experiences: Experience[] = [
    {
        name: 'Student Software Developer',
        role: 'Computer Science Coursework',
        organization: 'Brigham Young University',
        period: '2023 - Present',
        location: 'Provo, UT',
        description: 'Building practical software projects through BYU computer science coursework, with an emphasis on full-stack development, data structures, and clean object-oriented design.',
        route: 'byu-coursework',
        link: 'https://www.byu.edu/',
        skills: ['React', 'TypeScript', 'Java', 'Python', 'Express'],
        highlights: [
            'Built production-shaped projects across frontend, backend, and command-line environments.',
            'Practiced translating requirements into working software with clear data models and maintainable structure.',
            'Strengthened fundamentals in algorithms, systems thinking, and application architecture.',
        ],
        featured: true,
    },
    {
        name: 'Full-Stack Web Developer',
        role: 'Kingsland Store Project',
        organization: 'CS 260',
        period: '2024',
        description: 'Designed and implemented a shopping website using React on the frontend and Express on the backend, gaining hands-on experience with app structure, state, and client-server workflows.',
        route: 'kingsland-store',
        link: 'https://github.com/cjmot/startup',
        skills: ['React', 'JavaScript', 'Express', 'APIs'],
        highlights: [
            'Created the main customer-facing shopping flow with reusable React components.',
            'Built backend endpoints to support dynamic application behavior.',
            'Iterated on styling, routing, and deployment concerns in a complete web app.',
        ],
        featured: true,
    },
    {
        name: 'Java Application Developer',
        role: 'Chess Project',
        organization: 'CS 240',
        period: '2024',
        description: 'Built a Java command-line chess application with careful attention to rule implementation, game-state modeling, and extensible object-oriented structure.',
        route: 'chess-application',
        link: 'https://github.com/cjmot/chess',
        skills: ['Java', 'OOP', 'Testing', 'CLI'],
        highlights: [
            'Modeled pieces, moves, board positions, and game rules in Java.',
            'Implemented validation paths for legal movement and game flow.',
            'Balanced correctness with readable code organization for a larger coursework project.',
        ],
        featured: true,
    },
];
