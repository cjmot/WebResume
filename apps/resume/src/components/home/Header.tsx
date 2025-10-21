import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="p-4 w-full sticky max-h-1/6 min-h-16 max-w-4xl self-center text-center">
            <nav className="max-w-4xl mx-auto flex items-center justify-between font-semibold">
                {!menuOpen && (
                    <>
                        <button onClick={() => navigate('/')} className="text-2xl font-bold">Cooper Motyer</button>
                        <ul className="hidden md:flex items-center">
                            <li>
                                <a
                                    href="/apps/resume/public"
                                    className=" hover:underline hover:text-white"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/experience"
                                    className="pl-6 hover:underline hover:text-white"
                                >
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    className="pl-6 hover:underline hover:text-white"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </>
                    )}
                {menuOpen && (
                    <div className="mx-auto flex-row items-center justify-between space-x-6">
                        <a href="/about" onClick={() => setMenuOpen(false)}
                           className="hover:underline hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="/skills"
                            onClick={() => setMenuOpen(false)}
                            className="hover:underline hover:text-white transition-all duration-300"
                        >
                            Skills
                        </a>
                        <a
                            href="/projects"
                            onClick={() => setMenuOpen(false)}
                            className="hover:underline hover:text-white transition-all duration-300"
                        >
                            Projects
                        </a>
                    </div>
                )}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-300 hover:text-white transition-all duration-300"
                >
                    {menuOpen ? 'X' : '☰'}
                </button>
            </nav>
        </header>
    );
};

