import HomePage from './routes/HomePage'
import { Routes, Route } from 'react-router-dom'
import ModuleFederationWrapper from './components/ModuleFederationWrapper'
import federatedImport from './components/FederatedImport'

const SkillsRoutes = await federatedImport(import('skills/SkillsRoutes'))
const ProjectsRoutes = await federatedImport(import('projects/ProjectsRoutes'))
const KingslandRoutes = await federatedImport(import('kingsland/KingslandRoutes'))


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
                <Route path='/projects/*' element={
                    <ModuleFederationWrapper>
                        <ProjectsRoutes />
                    </ModuleFederationWrapper>
                } />
                <Route path='/kingsland/*' element={
                    <ModuleFederationWrapper>
                        <KingslandRoutes />
                    </ModuleFederationWrapper>
                } />
            </Routes>
        </>
    )
}