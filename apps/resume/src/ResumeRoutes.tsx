import HomePage from './routes/HomePage';
import { Routes, Route } from 'react-router-dom';
import Projects from './routes/Projects';
import Skills from './routes/Skills';

export default function ResumeRoutes() {
    return (
        <>
            <Routes>
                <Route index path='/' element={<HomePage />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/skills' element={<Skills />} />
            </Routes>
        </>
    )
}