import HomePage from './routes/HomePage';
import { Routes, Route } from 'react-router-dom';
import ModuleFederationWrapper from './components/ModuleFederationWrapper';
import federatedImport from './components/FederatedImport';

const KingslandApp = await federatedImport(import('kingsland/KingslandRoutes'));

export default function ResumeRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/kingsland/*' element={
                    <ModuleFederationWrapper>
                        <KingslandApp ></KingslandApp>
                    </ModuleFederationWrapper>
                } />
            </Routes>
        </>
    )
}