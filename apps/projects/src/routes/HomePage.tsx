import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <h1 className='text-xl font-semibold flex-1'>Welcome to Projects</h1>
            <Link to='https://startup.shopkingsland.click' target='_blank'>Kingsland</Link>
        </>
    )
}