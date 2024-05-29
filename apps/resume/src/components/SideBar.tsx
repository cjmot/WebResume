export default function SideBar() {
    function openNav() {
        const sideNav = document.getElementById("sideNav")
        if (sideNav) {
            sideNav.style.width = "300px";
        }
    }

    function closeNav() {

    }

    return (
        <>
            <div id="sideNav" className="h-full w-0 fixed z-0 top-0 left-0 bg-black overflow-x-hidden pt-16 transition duration-500">
                <a className="absolute top-0 right-6 text-lg ml-12" onClick={() => closeNav()}>&times;</a>
                <a className="py-2 pr-2 pl-8 text-gray-300 block transition duration-300 hover:text-white font-semibold text-xl" href="#">Skills</a>
                <a className="py-2 pr-2 pl-8 text-gray-300 block transition duration-300 hover:text-white font-semibold text-xl" href="#">Projects</a>
            </div>
            <span onClick={() => openNav()}>
                <img className='pt-10 pl-10'
                     src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
                     width="40px"
                    alt=""
                />
            </span>
        </>
    )
}

// .sidenav .closebtn {
//     position: absolute;
//     top: 0;
//     right: 25px;
//     font-size: 36px;
//     margin-left: 50px;
// }