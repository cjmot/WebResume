import {BrowserRouter} from 'react-router-dom'
import ResumeRoutes from './ResumeRoutes.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

export default function App() {

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Header />
            <BrowserRouter>
                <ResumeRoutes />
            </BrowserRouter>
            <Footer />
        </div>
    )
}
