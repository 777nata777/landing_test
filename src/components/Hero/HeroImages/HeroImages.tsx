import styles from "./HeroImages.module.css";
import nft1 from "../../../assets/block_one/Rectangle3.png";
import nftBlur from "../../../assets/block_one/Rectangle_2.png";
import arrowIcon from "../../../assets/block_one/Arrow.svg";
import dotsPattern from "../../../assets/block_one/dots.svg";
import { cn } from "@/lib/utils.ts";

export const HeroImages = () => (
    <div className={styles.imageBlock}>
        <div className={cn(styles.nftImageWrapper, styles.slideInRight)}>
            <img src={nft1} alt="NFT" className={styles.nftImage} />
        </div>

        <img src={arrowIcon} alt="Arrow" className={cn(styles.arrowIcon, styles.animateFadeInArrow)} />

        <div className={cn(styles.nftBlurWrapper, styles.slideInRight)}>
            <img src={nftBlur} alt="Blur Effect" className={styles.nftBlur} />
        </div>

        <img src={dotsPattern} alt="Blur Effect" className={cn(styles.dotsPattern, styles.animateFadeIn)} />
    </div>
);
