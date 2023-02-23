import Link from "next/link";
//import '../styles/navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <Link href={"/mcq/som"} className="navbarLink"> SOM</Link>
            <Link href={"/mcq/rcc"} className="navbarLink">RCC </Link>
            <Link href={"/mcq/structure"} className="navbarLink">Structure</Link>
            <Link href={"/mcq/surveying"} className="navbarLink">Surveying</Link>
            <Link href={"/mcq/geotechnical"} className="navbarLink">Geotechnical</Link>
            <Link href={"/mcq/constructionmanagement"} className="navbarLink">Construction management</Link>
            <Link href={"/mcq/estimation"} className="navbarLink">Estimation</Link>
        </nav>
    );
}

export default Navbar;