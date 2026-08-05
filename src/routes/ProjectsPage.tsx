import { Link } from 'react-router-dom';
import { projects } from '../data/projects.ts';

export default function ProjectsPage() {
    return (
        <div className="mx-auto w-full max-w-6xl px-5 py-12">
            <div className="mb-8 max-w-3xl">
                <p className="text-sm font-semibold uppercase text-teal-700">Portfolio</p>
                <h1 className="mt-2 text-4xl font-bold text-slate-950">Projects</h1>
                <p className="mt-4 leading-7 text-slate-600">
                    Selected projects with enough structure to keep adding new work as the portfolio grows.
                </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
                    <Link
                        key={project.route}
                        to={`/projects/${project.route}`}
                        className="group flex min-h-80 flex-col rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500 hover:shadow-md"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <h2 className="text-2xl font-bold text-slate-950 group-hover:text-teal-700">{project.name}</h2>
                            {project.featured && (
                                <span className="rounded bg-teal-50 px-3 py-1 text-xs font-bold uppercase text-teal-700">
                                    Featured
                                </span>
                            )}
                        </div>
                        <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                                <span key={item} className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
