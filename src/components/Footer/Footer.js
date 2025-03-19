import React from "react";
import styles from "./Footer.module.css";

import logo from "../../assets/footer/Wave.png";
import instagramIcon from "../../assets/footer/inst.png";
import inIcon from "../../assets/footer/in.png";
import facebookIcon from "../../assets/footer/facebook.png";
import xIcon from "../../assets/footer/X.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.brandContainer}>
                    <img src={logo} alt="DiveSea Logo" className={styles.logo} />
                    <p className={styles.brandName}>DiveSea</p>
                </div>
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
                    <img src={instagramIcon} alt="Facebook" />
                    <img src={inIcon} alt="Twitter" />
                    <img src={facebookIcon} alt="Instagram" />
                    <img src={xIcon} alt="LinkedIn" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
