import styles from "./Navigation.module.css";

import instagramIcon from "../../../assets/footer/inst.svg";
import inIcon from "../../../assets/footer/link.svg";
import facebookIcon from "../../../assets/footer/facebook.svg";
import xIcon from "../../../assets/header/Frame19.png";

export const SocialIcons = () => {
    return (
        <div className={styles.socialIcons}>
            <img src={instagramIcon} alt="Instagram" />
            <img src={inIcon} alt="LinkedIn" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={xIcon} alt="Twitter" />
        </div>
    );
};
