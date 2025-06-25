export default function ExperienceDescription({ experience }: {experience: {name: string, description: string}}) {
    return (
        <button
            className="p-6 w-full bg-gray-600 rounded shadow h-48 hover:bg-gray-400 hover:text-gray-600 transition duration-300"
        >
            <h2 className="text-xl font-semibold mb-2">{experience.name}</h2>
            <p>{experience.description}</p>
        </button>
    )
}