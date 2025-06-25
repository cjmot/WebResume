export default function Footer() {
    return (
        <footer className="p-4 w-full max-w-4xl min-h-20 max-h-1/6 self-center mt-auto">
            <div className="max-w-4xl mx-auto flex justify-center space-x-10 items-center">
                <span>&copy; {new Date().getFullYear()}</span>
                <a
                    href="https://github.com/your-username/your-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-white"
                >
                    Source
                </a>
            </div>
        </footer>
    );
};