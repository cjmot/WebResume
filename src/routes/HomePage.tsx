import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences.ts';
import { profile } from '../data/profile.ts';
import { projects } from '../data/projects.ts';

const featuredExperiences = experiences.filter((experience) => experience.featured).slice(0, 2);
const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function HomePage() {
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-12 sm:py-16">
            <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                    <p className="mb-4 text-sm font-semibold uppercase text-teal-700">{profile.title}</p>
                    <h1 className="max-w-4xl text-5xl font-bold leading-tight text-slate-950 sm:text-6xl">
                        {profile.name}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{profile.summary}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/projects"
                            className="rounded border border-slate-950 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 hover:border-teal-700"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="/experience"
                            className="rounded border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:text-slate-950"
                        >
                            Experience
                        </Link>
                    </div>
                </div>
                <aside className="border-l-4 border-teal-600 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase text-slate-500">Resume Snapshot</p>
                    <dl className="mt-5 grid gap-4 text-sm">
                        <div>
                            <dt className="font-semibold text-slate-950">Location</dt>
                            <dd className="text-slate-600">{profile.location}</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-slate-950">Focus</dt>
                            <dd className="text-slate-600">Full-stack web application development and deployment</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-slate-950">Currently Building</dt>
                            <dd className="text-slate-600">Home server application stack and network, and other personal projects</dd>
                        </div>
                    </dl>
                </aside>
            </section>

            <section>
                <div className="mb-6 flex items-end justify-between gap-5">
                    <div>
                        <p className="text-sm font-semibold uppercase text-teal-700">Featured</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-950">Experience</h2>
                    </div>
                    <Link to="/experience" className="text-sm font-semibold text-teal-700 hover:text-slate-950">
                        All Experience
                    </Link>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                    {featuredExperiences.map((experience) => (
                        <Link
                            key={experience.route}
                            to={`/experience/${experience.route}`}
                            className="group rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500 hover:shadow-md"
                        >
                            <p className="text-sm font-semibold text-teal-700">{experience.period}</p>
                            <h3 className="mt-3 text-xl font-bold text-slate-950 group-hover:text-teal-700">{experience.name}</h3>
                            <p className="mt-1 text-sm font-semibold text-slate-500">
                                {experience.role} - {experience.organization}
                            </p>
                            <p className="mt-4 leading-7 text-slate-600">{experience.description}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <div className="mb-6 flex items-end justify-between gap-5">
                    <div>
                        <p className="text-sm font-semibold uppercase text-teal-700">Selected Work</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-950">Projects</h2>
                    </div>
                    <Link to="/projects" className="text-sm font-semibold text-teal-700 hover:text-slate-950">
                        All Projects
                    </Link>
                </div>
                <div className="grid gap-5 lg:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <Link
                            key={project.route}
                            to={`/projects/${project.route}`}
                            className="group flex min-h-72 flex-col rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500 hover:shadow-md"
                        >
                            <h3 className="text-xl font-bold text-slate-950 group-hover:text-teal-700">{project.name}</h3>
                            <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.stack.slice(0, 3).map((item) => (
                                    <span key={item} className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
