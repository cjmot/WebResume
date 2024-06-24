export default function Footer() {
    return (
        <>
            <footer className="h-16 justify-self-end flex-none flex flex-row justify-center space-x-4 items-center">
                <a className="hover:underline hover: underline-offset-4 font-medium"
                         href="/about">About</a>
                <a className="hover:underline hover: underline-offset-4 font-medium"
                   href="https://github.com/cjmot/startup">GitHub</a>
            </footer>
        </>
    )
}