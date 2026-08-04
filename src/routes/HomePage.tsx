import {Link} from "react-router-dom";


export default function HomePage() {
    return (
        <div className="flex flex-col self-center mx-auto py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Cooper Motyer</h1>
            <ul className="text-lg text-gray-500">
                <li><Link to="/experiences">Past Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </div>
    );
};