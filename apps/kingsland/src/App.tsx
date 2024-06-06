import {BrowserRouter} from 'react-router-dom'
import KingslandRoutes from './KingslandRoutes'
import { StoreProvider } from './store'

export default function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <KingslandRoutes />
            </BrowserRouter>
        </StoreProvider>
    )
}
