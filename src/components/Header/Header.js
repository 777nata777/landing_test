import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/header/Logo.png";
function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <img src={logo} alt="Logo"  />
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><a href="#discover">Discover</a></li>
                        <li><a href="#creators">Creators</a></li>
                        <li><a href="#sell">Sell</a></li>
                        <li><a href="#stats">Stats</a></li>
                    </ul>
                </nav>
                <button className={styles.walletBtn}>Connect wallet</button>
            </div>
        </header>
    );
}

export default Header;
