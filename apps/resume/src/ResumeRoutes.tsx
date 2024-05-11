import HomePage from './routes/HomePage'
import { Routes, Route } from 'react-router-dom';
import ModuleFederationWrapper from "./components/ModuleFederationWrapper";
import federatedImport from "./components/FederatedImport";

const SkillsRoutes = await federatedImport(import('skills/SkillsRoutes'))

export default function ResumeRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/resume' element={<HomePage />} />
                <Route path='/skills/*' element={
                    <ModuleFederationWrapper>
                        <SkillsRoutes />
                    </ModuleFederationWrapper>
                } />
            </Routes>
        </>
    )
}