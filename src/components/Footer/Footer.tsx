import styles from "./Footer.module.css";
import Logo from "../../assets/footer/wave.svg?react";
import InstagramIcon from "../../assets/footer/inst.svg?react";
import InIcon from "../../assets/footer/link.svg?react";
import FacebookIcon from "../../assets/footer/facebook.svg?react";
import TwitterIcon from "../../assets/footer/twit.svg?react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.brandContainer}>
          <Logo className={styles.logo} />
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
          <InstagramIcon className={styles.socialIconsSvg} />
          <InIcon className={styles.socialIconsSvg} />
          <FacebookIcon className={styles.socialIconsSvg} />
          <TwitterIcon className={styles.socialIconsSvg} />
        </div>
      </div>
    </footer>
  );
};
