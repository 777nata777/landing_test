import styles from "./Footer.module.css";
import { Logo } from "../Header/Logo/Logo.tsx";
import InstagramIcon from "../../assets/footer/inst.svg?react";
import InIcon from "../../assets/footer/link.svg?react";
import FacebookIcon from "../../assets/footer/facebook.svg?react";
import TwitterIcon from "../../assets/footer/twit.svg?react";
import logoStyles from "../Header/Logo/Logo.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo isFooter />

            <div className={styles.footerTop}>
                <nav className={styles.footerMenu}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                </nav>
            </div>

            <div className={styles.footerLine}></div>

            <div className={styles.footerBottom}>
                <p className={styles.p}>© 2023</p>
                <div className={styles.socialIcons}>
                    <InstagramIcon className={styles.socialIconsSvg}/>
                    <InIcon className={styles.socialIconsSvg}/>
                    <FacebookIcon className={styles.socialIconsSvg}/>
                    <TwitterIcon className={styles.socialIconsSvg}/>
                </div>
            </div>
        </footer>
    );
};
