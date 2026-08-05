import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const links = [
    { label: 'About', to: '/about' },
    { label: 'Experience', to: '/experience' },
    { label: 'Projects', to: '/projects' },
];

export default function Header() {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-stone-50/95 px-5 py-4 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 font-semibold">
                <button onClick={() => navigate('/')} className="text-left text-xl font-bold tracking-normal text-slate-950">
                    Cooper Motyer
                </button>
                <ul className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
                    {links.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `transition hover:text-slate-950 ${isActive ? 'text-slate-950' : ''}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {menuOpen && (
                    <div className="absolute left-0 right-0 top-full border-b border-slate-200 bg-stone-50 px-5 py-4 shadow-sm md:hidden">
                        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm font-semibold text-slate-700">
                            {links.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `py-1 transition hover:text-slate-950 ${isActive ? 'text-slate-950' : ''}`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
                <button
                    onClick={toggleMenu}
                    className="flex h-10 w-10 items-center justify-center rounded border border-slate-300 text-slate-700 transition hover:border-slate-950 hover:text-slate-950 md:hidden"
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? 'X' : 'Menu'}
                </button>
            </nav>
        </header>
    );
};
