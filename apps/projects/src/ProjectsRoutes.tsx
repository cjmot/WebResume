import { Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage'

export default function ProjectsRoutes() {

    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />}/>
            </Routes>
        </>
    )
}