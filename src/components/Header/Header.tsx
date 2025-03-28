import { useState, useEffect } from "react";
import { Logo } from "./Logo/Logo.tsx";
import {Navigation} from "@/components/Header/Navigation/Navigation.tsx";
import {BurgerMenu} from "@/components/Header/BurgerMenu/BurgerMenu.tsx";
import styles from "./Header.module.css";
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
        <Logo />
        <Navigation menuOpen={menuOpen} />

        {/* Бургер-меню */}
        <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      <div className={styles.underline}></div>
    </header>
  );
};
