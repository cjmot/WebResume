import HomePage from './routes/HomePage';
import { Routes, Route } from 'react-router-dom';
import ModuleFederationWrapper from './components/ModuleFederationWrapper';
import federatedImport from './components/FederatedImport';

const SkillsApp = await federatedImport(import('skills/SkillsRoutes'));
const ProjectsApp = await federatedImport(import('projects/ProjectsRoutes'));
const KingslandApp = await federatedImport(import('kingsland/KingslandRoutes'));

export default function ResumeRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/resume' element={<HomePage />} />
                <Route path='/skills/*' element={
                    <ModuleFederationWrapper>
                        <SkillsApp />
                    </ModuleFederationWrapper>
                } />
                <Route path='/projects/*' element={
                    <ModuleFederationWrapper>
                        <ProjectsApp />
                    </ModuleFederationWrapper>
                } />
                <Route path='/kingsland/*' element={
                    <ModuleFederationWrapper>
                        <KingslandApp />
                    </ModuleFederationWrapper>
                } />
            </Routes>
        </>
    )
}