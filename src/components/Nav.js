export default function Nav() {
    return <nav className="w-64 text-lg h-screen">
        <a href="/" className="text-3xl tracking-wider">Vince Malazo</a>
        <ul className="nav-links pt-5">
            <li>
                <a href="/About" 
                className="ease-in-out duration-300 hover:text-gray-400"
                id={window.location.pathname === "/About" ? "active" : ""}
                onClick = {() => {
                    window.location.pathname = "/About";
                }}
                >About</a>
            </li>
            <li>
                <a href="/Gallery" 
                className="ease-in-out duration-300 hover:text-gray-400"
                id={window.location.pathname === "/Gallery" ? "active" : ""}
                onClick = {() => {
                    window.location.pathname = "/Gallery";
                }}
                >Gallery</a>
            </li>
        </ul>
    </nav>
}