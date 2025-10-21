import { experiences } from '../data/experiences'
import {useNavigate} from 'react-router-dom'
import { Experience } from '../types.ts'

export default function ExperiencePage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center mx-auto p-5 h-full">
            <h1 className="text-3xl font-bold mb-8">Experience</h1>
            <div className="gap-6 overflow-y-auto w-full flex flex-col">
                {experiences.map((experience: Experience, index) => (
                    <button
                        key={index}
                        className="p-6 w-full bg-gray-600 rounded shadow h-28 hover:bg-gray-400 hover:text-gray-600 transition duration-300"
                        onClick={() => navigate(`/experience/${experience.route}`)}
                    >
                        <h2 className="text-xl font-semibold mb-2">{experience.name}</h2>
                        <p>{experience.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};