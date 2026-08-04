import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences.ts';

export default function ExperiencePage() {
    return (
        <div className="mx-auto w-full max-w-6xl px-5 py-12">
            <div className="mb-8 max-w-3xl">
                <p className="text-sm font-semibold uppercase text-teal-700">Resume</p>
                <h1 className="mt-2 text-4xl font-bold text-slate-950">Experience</h1>
                <p className="mt-4 leading-7 text-slate-600">
                    A focused record of coursework, applied software projects, and the technologies I have used to build them.
                </p>
            </div>
            <div className="space-y-5">
                {experiences.map((experience) => (
                    <Link
                        key={experience.route}
                        to={`/experience/${experience.route}`}
                        className="group grid gap-5 rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-500 hover:shadow-md md:grid-cols-[0.28fr_1fr]"
                    >
                        <div>
                            <p className="font-semibold text-teal-700">{experience.period}</p>
                            {experience.location && <p className="mt-1 text-sm text-slate-500">{experience.location}</p>}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-950 group-hover:text-teal-700">{experience.name}</h2>
                            <p className="mt-1 font-semibold text-slate-500">
                                {experience.role} - {experience.organization}
                            </p>
                            <p className="mt-4 leading-7 text-slate-600">{experience.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {experience.skills.map((skill) => (
                                    <span key={skill} className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
