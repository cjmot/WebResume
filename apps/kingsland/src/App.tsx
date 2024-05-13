import { BrowserRouter } from 'react-router-dom'
import KingslandRoutes from './KingslandRoutes'

function App() {
    return (
        <>
            <BrowserRouter>
                <KingslandRoutes />
            </BrowserRouter>
        </>
    )
}

export default App
