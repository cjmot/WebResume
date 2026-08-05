import { Link, useNavigate } from 'react-router-dom';
import { Project } from '../../types.ts';

export default function ProjectDescription({ project }: { project: Project }) {
    const navigate = useNavigate();

    return (
        <article className="mx-auto w-full max-w-4xl px-5 py-12">
            <button
                onClick={() => navigate(-1)}
                className="mb-8 text-sm font-semibold text-teal-700 transition hover:text-slate-950"
            >
                Back
            </button>
            <div className="rounded border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm font-semibold uppercase text-teal-700">Project</p>
                    {project.featured && (
                        <span className="rounded bg-teal-50 px-3 py-1 text-xs font-bold uppercase text-teal-700">
                            Featured
                        </span>
                    )}
                </div>
                <h1 className="mt-3 text-4xl font-bold text-slate-950">{project.name}</h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">{project.description}</p>

                <section className="mt-8">
                    <h2 className="text-sm font-semibold uppercase text-slate-500">Highlights</h2>
                    <ul className="mt-4 space-y-3">
                        {project.highlights.map((highlight) => (
                            <li key={highlight} className="border-l-2 border-teal-500 pl-4 leading-7 text-slate-600">
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-sm font-semibold uppercase text-slate-500">Stack</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                            <span key={item} className="rounded bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                                {item}
                            </span>
                        ))}
                    </div>
                </section>

                <div className="mt-8 flex flex-wrap gap-3">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded border border-slate-950 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-700 hover:bg-teal-700"
                        >
                            View Repository
                        </a>
                    )}
                    <Link
                        to="/projects"
                        className="rounded border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:text-slate-950"
                    >
                        All Projects
                    </Link>
                </div>
            </div>
        </article>
    );
}
