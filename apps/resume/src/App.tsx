import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './routes/HomePage';
import ExperiencePage from './routes/ExperiencePage';
import ProjectsPage from './routes/ProjectsPage';
import ProjectDescription from './components/ProjectDescription';
import {projects} from './data/projects';
import {experiences} from './data/experiences';
import ExperienceDescription from "./components/ExperienceDescription";

export default function App() {

    return (
        <Router>
            <div className="flex flex-col flex-grow h-screen max-w-screen">
                <Header />
                <div className="h-full self-center flex-grow max-w-4xl overflow-hidden">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/experience" element={<ExperiencePage />} />
                        <Route path="/experience/*" element={
                            <Routes>
                                {experiences.map((exp) => (
                                    <Route
                                        key={exp.name}
                                        path={`/${exp.route}`}
                                        element={
                                            <ExperienceDescription
                                                experience={exp}
                                            />
                                        }
                                    />
                                ))}
                            </Routes>
                        }/>
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/projects/*" element={
                            <Routes>
                                {projects.map((project) => (
                                    <Route
                                        key={project.name}
                                        path={`/${project.route}`}
                                        element={
                                            <ProjectDescription
                                                name={project.name}
                                                description={project.description}
                                            />
                                        }
                                    />
                                ))}
                            </Routes>
                        }/>
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};
