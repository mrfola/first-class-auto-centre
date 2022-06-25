import { logo } from '../../../../helpers/routes';
import Button from '../../atoms/Button/Button';
import styles from './Header.module.sass';
import { Link } from 'react-router-dom';
import { useState, useRef, useCallback, useEffect } from 'react';

const Header = () => 
{
    let path = document.location.pathname;

    const modalRef = useRef(null);

    // Mobile Menu Dialog Box controls
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleHamburgerClick = () => 
    {
        mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true);
    }

    const escFunction = useCallback((event) => 
    {
        if (event.key === "Escape")  setMobileMenuOpen(false);

    }, []);


    useEffect(() => 
    {
        const modalNode = modalRef.current;

        (mobileMenuOpen) ? modalNode.showModal() : modalNode.close();

        document.addEventListener("keydown", escFunction, false);

        return () =>   document.removeEventListener("keydown", escFunction, false);
        
    }, [mobileMenuOpen]);



    return ( 
        <div className={styles.header}>
            <img className={styles.logo} src={logo} />
            <div className={styles.desktopNav}>
                <nav className={styles.links}>
                    <ul>
                        <li className={path == "/" ? styles.active: ""}><Link to="/">Home</Link></li>
                        <li  className={path == "/about" ? styles.active: ""}><Link to="/about">About</Link></li>
                        <li  className={path == "/services" ? styles.active: ""}><Link to="/services">Services</Link></li>
                        <li  className={path == "/contact" ? styles.active: ""}><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <Button>Book Now</Button>
            </div>
            <div onClick={handleHamburgerClick} className={styles.mobileNav}>
                <div className={styles.hamburgerContainer}>
                    <div className={styles.hamburger}></div>
                </div>
            </div>

            <dialog ref={modalRef} className={styles.mobileMenuModal}>
                <div onClick={() => setMobileMenuOpen(false)} className={styles.closeIcon}></div>
                <div className={styles.modalChildren}>
                    <div className={styles.mobileLinks}>
                        <ul>
                            <li className={path == "/" ? styles.active: ""}><Link to="/">Home</Link></li>
                            <li  className={path == "/about" ? styles.active: ""}><Link to="/about">About</Link></li>
                            <li  className={path == "/services" ? styles.active: ""}><Link to="/services">Services</Link></li>
                            <li  className={path == "/contact" ? styles.active: ""}><Link to="/contact">Contact</Link></li>
                        </ul>
                        <Button>Book Now</Button>
                    </div>
                </div>
            </dialog>
        </div>
     );
}
 
export default Header;