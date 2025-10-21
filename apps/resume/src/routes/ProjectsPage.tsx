import { projects } from "../data/projects";
import { useNavigate } from 'react-router-dom';

export default function ProjectsPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center mx-auto p-5 h-full">
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            <div className="h-full grid gap-6 md:grid-cols-2 overflow-y-auto max-w-3xl">
                {projects.map((project, index) => (
                    <button
                        key={index}
                        className="p-6 bg-gray-600 rounded shadow hover:bg-gray-400 hover:text-gray-600 transition duration-300"
                        onClick={() => navigate(`/projects/${project.route}`)}
                    >
                        <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                        <p>{project.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};