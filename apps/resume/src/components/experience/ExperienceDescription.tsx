import { Experience } from '../../types'
import { useNavigate } from 'react-router-dom'

export default function ExperienceDescription({ experience }: { experience: Experience }) {
    const navigate = useNavigate()
    return (
        <div
            className="p-6 flex flex-col"
        >
            <button className="text-2xl text-start sm:w-5/6 w-full self-center" onClick={() => navigate(-1)}>{"<"}</button>
            <h1 className="text-3xl font-semibold mb-6 text-center">{experience.name}</h1>
            <p className="sm:w-5/6 w-full self-center text-center">{experience.description}</p>
            <div className="mt-6 text-center">
                <a className="text-blue-300 mt-12 text-center w-full" href={experience.link}>{experience.link}</a>
            </div>
        </div>
    )
}