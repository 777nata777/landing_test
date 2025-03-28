import styles from "./Hero.module.css";
import {HeroText} from "@/components/Hero/HeroText/HeroText.tsx";
import {HeroImages} from "@/components/Hero/HeroImages/HeroImages.tsx";
import nft1 from "../../assets/block_one/Rectangle3.png";
import nftBlur from "../../assets/block_one/Rectangle_2.png";
import arrowIcon from "../../assets/block_one/Arrow.svg";
import dotsPattern from "../../assets/block_one/dots.svg";
import {cn} from "@/lib/utils.ts";


export const Hero = () => (
    <section className={styles.hero}>
        <div className={styles.heroLineContainer}>
            <div className={styles.heroLine}></div>
            <div className={styles.heroCreators}>OVER 1M CREATORS</div>
        </div>

        <div className={styles.content}>
            <HeroText />
            <HeroImages />
        </div>
    </section>
);
