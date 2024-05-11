import {BrowserRouter} from 'react-router-dom'
import SkillsRoutes from './SkillsRoutes'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <SkillsRoutes />
            </BrowserRouter>
        </>
    )
}
