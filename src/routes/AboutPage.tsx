import { profile } from '../data/profile.ts';

export default function AboutPage() {
    return (
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="h-fit border-l-4 border-teal-600 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase text-teal-700">About</p>
                <h1 className="mt-3 text-4xl font-bold text-slate-950">{profile.name}</h1>
                <p className="mt-4 leading-7 text-slate-600">{profile.summary}</p>
                <div className="mt-8">
                    <h2 className="text-sm font-semibold uppercase text-slate-500">Strengths</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {profile.strengths.map((strength) => (
                            <span key={strength} className="rounded bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                                {strength}
                            </span>
                        ))}
                    </div>
                </div>
            </aside>
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-950">A little more about me</h2>
                {profile.about.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-8 text-slate-600">
                        {paragraph}
                    </p>
                ))}
                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                    <div className="rounded border border-slate-200 bg-white p-5 shadow-sm">
                        <h3 className="font-bold text-slate-950">How I Work</h3>
                        <p className="mt-3 leading-7 text-slate-600">
                            I like clear requirements, small iterations, and code that makes the next change easier.
                        </p>
                    </div>
                    <div className="rounded border border-slate-200 bg-white p-5 shadow-sm">
                        <h3 className="font-bold text-slate-950">What I Am Growing</h3>
                        <p className="mt-3 leading-7 text-slate-600">
                            I am expanding my full-stack skills while keeping a strong eye on fundamentals and maintainability.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
