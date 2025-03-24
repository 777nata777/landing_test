import { useState, useEffect } from "react";
import styles from "./Header.module.css";

import logo from "../../assets/header/Logo.png";
import instagramIcon from "../../assets/footer/inst.svg";
import inIcon from "../../assets/footer/link.svg";
import facebookIcon from "../../assets/footer/facebook.svg";
import xIcon from "../../assets/header/Frame19.png";
import { cn } from "@/lib/utils.ts";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(styles.header, { [styles.scrolled]: scrolled })}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <span className={styles.brandName}>DiveSea</span>
        </div>

        {/* Навигация */}
        <nav className={cn(styles.nav, { [styles.open]: menuOpen })}>
          <ul className={styles.navList}>
            <li><a href="#discover">Discover</a></li>
            <li><a href="#creators">Creators</a></li>
            <li><a href="#sell">Sell</a></li>
            <li><a href="#stats">Stats</a></li>
          </ul>

          <div className={styles.socialIcons}>
            <img src={instagramIcon} alt="Instagram" />
            <img src={inIcon} alt="LinkedIn" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={xIcon} alt="Twitter" />
          </div>
          <button className={styles.walletBtn}>Connect wallet</button>
        </nav>

        {/* Бургер-меню */}
        <button
            className={cn(styles.burger, { [styles.open]: menuOpen })}
            onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={styles.burgerLine}></div>
        </button>
      </div>

      <div className={styles.underline}></div>
    </header>
  );
};
