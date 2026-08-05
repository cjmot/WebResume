export interface Experience {
    name: string;
    role: string;
    organization: string;
    period: string;
    location?: string;
    description: string;
    route: string;
    link?: string;
    assetRoute?: string;
    skills: string[];
    highlights: string[];
    featured?: boolean;
}

export interface Project {
    name: string;
    description: string;
    route: string;
    link?: string;
    stack: string[];
    highlights: string[];
    featured?: boolean;
}
