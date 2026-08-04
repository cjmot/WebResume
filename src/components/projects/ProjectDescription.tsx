import {useNavigate} from "react-router-dom";

export default function ProjectDescription({name, description}: {name: string, description: string}) {
    const navigate = useNavigate();

    return (
        <>
            <button
                onClick={() => navigate('/projects')}
                className="w-full text-xl font-bold text-start pl-10 pt-4"
            >
                {'<'}
            </button>
            <div className="flex flex-col items-center mx-auto pb-4 px-5 pt-1 h-full">
                <div>
                    <h1 className="text-3xl font-bold mb-8">{name}</h1>
                </div>
                <div>{description}
                </div>
            </div>
        </>
    );
};