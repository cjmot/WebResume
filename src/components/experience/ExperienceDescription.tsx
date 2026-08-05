import { Link, useNavigate } from 'react-router-dom';
import { Experience } from '../../types.ts';

export default function ExperienceDescription({ experience }: { experience: Experience }) {
    const navigate = useNavigate();

    return (
        <article className="mx-auto w-full max-w-4xl px-5 py-12">
            <button
                className="mb-8 text-sm font-semibold text-teal-700 transition hover:text-slate-950"
                onClick={() => navigate(-1)}
            >
                Back
            </button>
            <div className="rounded border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase text-teal-700">{experience.period}</p>
                <h1 className="mt-3 text-4xl font-bold text-slate-950">{experience.name}</h1>
                <p className="mt-2 text-lg font-semibold text-slate-500">
                    {experience.role} - {experience.organization}
                </p>
                {experience.location && <p className="mt-1 text-slate-500">{experience.location}</p>}
                <p className="mt-6 text-lg leading-8 text-slate-600">{experience.description}</p>

                <section className="mt-8">
                    <h2 className="text-sm font-semibold uppercase text-slate-500">Highlights</h2>
                    <ul className="mt-4 space-y-3">
                        {experience.highlights.map((highlight) => (
                            <li key={highlight} className="border-l-2 border-teal-500 pl-4 leading-7 text-slate-600">
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-sm font-semibold uppercase text-slate-500">Skills</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                            <span key={skill} className="rounded bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <div className="mt-8 flex flex-wrap gap-3">
                    {experience.link && (
                        <a
                            className="rounded border border-slate-950 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-700 hover:bg-teal-700"
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Link
                        </a>
                    )}
                    <Link
                        className="rounded border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:text-slate-950"
                        to="/experience"
                    >
                        All Experience
                    </Link>
                </div>
            </div>
        </article>
    );
}
