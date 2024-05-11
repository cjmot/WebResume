import {Link} from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <h1 className='text-2xl font-semibold' >Welcome to my Resume</h1>
            <Link to='/skills' className='underline underline-offset-2 text-blue-500'>Skills</Link>
        </>
    )
}