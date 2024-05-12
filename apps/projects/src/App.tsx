import {BrowserRouter} from 'react-router-dom'
import ProjectsRoutes from './ProjectsRoutes'

function App() {

    return (
        <>
            <BrowserRouter>
                <ProjectsRoutes />
            </BrowserRouter>
        </>
    )
}

export default App
