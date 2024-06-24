import { useStore } from '../store.tsx';

export default function Login() {
    const store = useStore();
    const user = store.triedToGetUser

    function handleLogin() {
        console.log(user)
    }

    return (
        <main className="flex-1 h-screen flex flex-col justify-center items-center">
            <div className="flex-none h-1/3 w-1/3 min-w-60 max-w-96 flex flex-col">
                <h3 className="self-center text-4xl font-semibold mb-2">LOGIN</h3>
                <hr/>
                <form className="mt-5 flex flex-col space-y-1">
                    <label htmlFor="name"></label>
                    <input
                        className="border-2 text-center w-full h-10 font-medium focus:placeholder-transparent"
                        type="text"
                        id="name"
                        placeholder="Username/Email"
                        required
                    />
                    <label htmlFor="password"></label>
                    <input
                        className="border-2 text-center w-full h-10 font-medium focus:placeholder-transparent"
                        type="password"
                        id="password"
                        placeholder="Password"
                        required
                    />
                    <button
                        className="w-full text-center h-12 bg-blue-400 font-medium font-sans"
                        type="button"
                        onClick={() => handleLogin()}
                    >
                        LOGIN
                    </button>
                </form>
                <div className="flex flex-row justify-between mt-3" id="extra-buttons">
                    <a className="text-base hover:underline hover:underline-offset-4" href='/kingsland/create_account'>
                        Create Account
                    </a>
                </div>
            </div>
        </main>
    );
}

