import { Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage'

export default function SkillsRoutes() {

    return (
        <>
            <Routes>
                <Route index path='/' element={<HomePage />} />
            </Routes>
        </>
    )
}