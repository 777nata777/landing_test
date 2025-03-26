import { useState, useEffect } from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/header/Logo.png";

interface LogoProps {
    withText?: boolean; // Можно передавать пропс вручную
}

export const Logo = ({ withText }: LogoProps) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 375);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
            {(withText ?? isMobile) && <span className={styles.brandName}>DiveSea</span>}
        </div>
    );
};
