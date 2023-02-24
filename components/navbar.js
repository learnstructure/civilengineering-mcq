import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
function Navbar() {
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)
    function handleClick() {
        setShowMenu(!showMenu)
    }
    function hidemenu() {
        setShowMenu(false)
    }

    return (
        <>
            <div className="title-container">
                <Link href={"/"}>
                    <Image src="/favicon.JPG" alt="Civil Engineering Mcq" width={70} height={70} />
                </Link>
                <h1 className="site-title"><span style={{ color: "green" }}>C</span>ivil <span style={{ color: "green" }}>E</span>ngineering mcq</h1>
            </div>
            <div className="mainNav">

                <nav className={
                    showMenu ? 'navbar responsive' : 'navbar'
                }>
                    <Link href={"/mcq/rcc"} className={router.asPath === '/mcq/rcc' ? 'activeLink' : 'inactiveLink'} onClick={hidemenu}> RCC</Link>
                    <Link href={"/mcq/structure"} className={router.asPath === '/mcq/structure' ? 'activeLink' : 'inactiveLink'} onClick={hidemenu}>Structure</Link>
                    <Link href={"/mcq/som"} className={router.asPath === '/mcq/som' ? 'activeLink' : 'inactiveLink'} onClick={hidemenu}> SOM</Link>
                    <Link href={"/mcq/surveying"} className={router.asPath === '/mcq/surveying' ? 'activeLink' : 'inactiveLink'} onClick={hidemenu}>Surveying</Link>
                    <Link href={"/mcq/geotechnical"} className={router.asPath === '/mcq/geotechnical' ? 'activeLink' : 'inactiveLink'} onClick={hidemenu}>Geotechnical</Link>
                    <Link href={"/mcq/constructionmanagement"} className={router.asPath === '/mcq/constructionmanagement' ? 'activeLink' : 'inactiveLink'} onClick={hidemenu}>Construction management</Link>
                    <Link href={"/mcq/estimation"} className={router.asPath === '/mcq/estimation' ? 'activeLink' : 'inactiveLink'} onClick={hidemenu}>Estimation</Link>
                </nav>
                <div onClick={handleClick} className="icon">☰</div>

            </div>
        </>
    );
}

export default Navbar;