import { profile } from '../../data/profile.ts';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white px-5 py-8 text-sm text-slate-500">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span>&copy; {new Date().getFullYear()} Cooper Motyer</span>
                <div className="flex gap-5">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-950">
                        GitHub
                    </a>
                    <a
                        href="https://github.com/cjmot/WebResume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-950"
                    >
                        Source
                    </a>
                </div>
            </div>
        </footer>
    );
};
