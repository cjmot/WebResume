

export default function SideBar() {
    function openNav() {
        const sideNav = document.getElementById("sideNav")
        if (sideNav) {
            sideNav.style.width = "300px";
        }
    }

    function closeNav() {
        const sideNav = document.getElementById("sideNav")
        if (sideNav) {
            sideNav.style.width = "0px";
        }
    }

    return (
        <>
            <div id="sideNav" className="h-full before:w-0 after: fixed z-0 top-0 left-0 bg-black overflow-x-hidden pt-16 transition duration-500">
                <button className="absolute top-0 right-6 text-xl ml-12 text-gray-400" onClick={() => closeNav()}>&times;</button>
                <a className="py-2 pr-2 pl-8 text-gray-400 block transition duration-300 hover:text-white font-semibold text-xl" href="#">Skills</a>
                <a className="py-2 pr-2 pl-8 text-gray-400 block transition duration-300 hover:text-white font-semibold text-xl" href="#">Projects</a>
            </div>
            <span onClick={() => openNav()}>
                <a className='pt-10 pl-10 w-10'/>
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