import HomePage from './routes/HomePage'
import { Routes, Route } from "react-router-dom";

export default function ResumeRoutes() {
    return (
        <>
            <Routes>
                <Route index path='/' element={<HomePage />} ></Route>
            </Routes>
        </>
    )
}