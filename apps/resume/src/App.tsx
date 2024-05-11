import {BrowserRouter} from "react-router-dom"
import ResumeRoutes from './ResumeRoutes.tsx'

export default function App() {

    return (
        <>
        <BrowserRouter>
            <ResumeRoutes />
        </BrowserRouter>
        </>
    )
}
