import {BrowserRouter} from 'react-router-dom'
import ResumeRoutes from './ResumeRoutes.tsx'

export default function App() {

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <BrowserRouter>
                <ResumeRoutes />
            </BrowserRouter>
        </div>
    )
}
