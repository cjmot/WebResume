import {useNavigate} from "react-router";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <>
            <h1 className='text-2xl font-semibold flex-1' >Welcome to my Resume</h1>
            <button onClick={() => {navigate('/kingsland')}}>Kingsland</button>
        </>
    )
}