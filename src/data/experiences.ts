import { Experience } from '../types.ts'

export const experiences: Experience[] = [
    {
        name: 'Software Engineer',
        role: 'Software Engineer',
        organization: 'BYU Library',
        period: 'Jan 2026 - Present',
        location: 'Provo, UT',
        description: 'Working in a microservices architecture across full-stack systems, infrastructure, deployment workflows, and AI-assisted engineering practices.',
        route: 'byu-library-software-engineer',
        skills: ['Kubernetes', 'Docker', 'CI/CD', 'Microservices', 'Full-Stack Engineering', 'AI Workflows'],
        highlights: [
            'Gaining hands-on experience with Kubernetes, containerized services, Docker Compose stacks, and multi-stage deployment workflows.',
            'Working within robust CI/CD pipelines that support reliable build, validation, and release processes.',
            'Contributing across full-stack engineering surfaces while learning how production microservices are operated and maintained.',
            'Using AI-assisted workflows to accelerate development while keeping engineering judgment and code quality central.',
        ],
        featured: true,
    },
        {
        name: 'Full-Stack Web Developer',
        role: 'Student Web Developer',
        organization: 'Missionary Training Center',
        period: 'Fall 2023 - Fall 2025',
        location: 'Provo, UT',
        description: 'Developed and maintained web applications for the Missionary Training Center using React, TypeScript, and tailwind frontend, and Express backend with RESTful APIs.',
        route: 'full-stack-web-dev',
        skills: ['React', 'JavaScript', 'Express', 'APIs'],
        highlights: [
            'Created the main appointment scheduling page, including a calendar integration and appointment views and management.',
            'Implemented a RESTful API for managing appointments and times with a 3rd party integration for the appointment data.',
            'Utilized an organization-wide design system to ensure consistent styling and user experience.',
        ],
        featured: true,
    },
    {
        name: 'BS in Computer Science, SWE Emphasis',
        role: 'Student',
        organization: 'Brigham Young University',
        period: '2023 - Present',
        location: 'Provo, UT',
        description: 'Building practical software projects through BYU computer science coursework, with an emphasis on full-stack development, data structures, and clean object-oriented design.',
        route: 'byu-coursework',
        skills: ['React', 'TypeScript', 'Java', 'Python', 'Express'],
        highlights: [
            'Built production-shaped projects across frontend, backend, and command-line environments.',
            'Practiced translating requirements into working software with clear data models and maintainable structure.',
            'Strengthened fundamentals in algorithms, systems thinking, and application architecture.',
        ],
        featured: true,
    },
];
