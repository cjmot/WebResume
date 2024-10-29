import { useStore } from '../store'

export default function Header() {
    const store = useStore();
    const loggedIn = store.user ? !!store.user : false;
    const cartLength = store.cartItems ? store.cartItems.cart.length : 0;
    // const userName = store.user ? store.user?.user.userName : '';

    return (
        <>
            <header className="relative flex-none h-20 max-w-full flex flex-col justify-center items-center m-4">
                <img src="/kingslandlogo_wordmark-blue.png" alt="KingslandLLC" className="w-52"/>
                {loggedIn && <nav id="navbar" className="self-end flex-none flex flex-row items-center space-x-4 text-xl">
                    <a className="flex items-center" href="/shop">
                        <span className="material-symbols-outlined">shopping_bag</span>
                    </a>
                    <a className="flex items-center relative disabled:text-gray-400" href="/cart">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {cartLength > 0 &&
                            <span id="shopCartLogoBadge"
                                  className="text-sm flex w-5 h-5 p-2 bg-red-400 justify-center items-center rounded-full absolute top-1/2 -right-2"
                            >{cartLength}</span>}
                    </a>
                    <a className="flex items-center" href="/profile">
                        <span className="material-symbols-outlined">person</span>
                        <span id="shopUser" className="text-sm font-semibold text-center">{'poopy'}</span>
                    </a>
                </nav>}
            </header>
        </>
    )
}