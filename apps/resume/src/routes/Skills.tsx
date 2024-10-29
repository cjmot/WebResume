import {useNavigate} from "react-router";

export default function Skills() {
    const navigate = useNavigate();
    return (
        <>
            <h1 className='text-2xl font-semibold flex-1' >Welcome to my Skills</h1>
            <button className='text-xl font-semibold text-blue-500 hover:underline' onClick={() => navigate('/')}>Back</button>
        </>
    )
}