import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/home/Header.tsx';
import Footer from './components/home/Footer.tsx';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import ExperiencePage from './routes/ExperiencePage';
import ProjectsPage from './routes/ProjectsPage';
import ProjectDescription from './components/projects/ProjectDescription.tsx';
import {projects} from './data/projects';
import {experiences} from './data/experiences';
import ExperienceDescription from "./components/experience/ExperienceDescription.tsx";

export default function App() {

    return (
        <Router>
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="w-full flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/experience" element={<ExperiencePage />} />
                        {experiences.map((exp) => (
                            <Route
                                key={exp.route}
                                path={`/experience/${exp.route}`}
                                element={<ExperienceDescription experience={exp} />}
                            />
                        ))}
                        <Route path="/projects" element={<ProjectsPage />} />
                        {projects.map((project) => (
                            <Route
                                key={project.route}
                                path={`/projects/${project.route}`}
                                element={<ProjectDescription project={project} />}
                            />
                        ))}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};
