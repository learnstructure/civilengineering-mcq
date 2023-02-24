import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
function Navbar() {
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)
    function handleClick() {
        setShowMenu(!showMenu)

    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Civil engineering mcq</h1>
            <div className="mainNav">

                <nav className={
                    showMenu ? 'navbar responsive' : 'navbar'
                }>
                    <Link href={"/mcq/rcc"} className={router.asPath === '/mcq/rcc' ? 'navbarLinkActive' : 'navbarLink'}   > RCC</Link>
                    <Link href={"/mcq/structure"} className={router.asPath === '/mcq/structure' ? 'navbarLinkActive' : 'navbarLink'} >Structure</Link>
                    <Link href={"/mcq/som"} className={router.asPath === '/mcq/som' ? 'navbarLinkActive' : 'navbarLink'}   > SOM</Link>
                    <Link href={"/mcq/surveying"} className={router.asPath === '/mcq/surveying' ? 'navbarLinkActive' : 'navbarLink'} >Surveying</Link>
                    <Link href={"/mcq/geotechnical"} className={router.asPath === '/mcq/geotechnical' ? 'navbarLinkActive' : 'navbarLink'} >Geotechnical</Link>
                    <Link href={"/mcq/constructionmanagement"} className={router.asPath === '/mcq/constructionmanagement' ? 'navbarLinkActive' : 'navbarLink'} >Construction management</Link>
                    <Link href={"/mcq/estimation"} className={router.asPath === '/mcq/estimation' ? 'navbarLinkActive' : 'navbarLink'} >Estimation</Link>
                </nav>
                <div onClick={handleClick} className="icon">☰</div>

            </div>
        </>
    );
}

export default Navbar;