import styles from "./Hero.module.css";

import nft1 from "../../assets/block_one/Rectangle3.png";
import nftBlur from "../../assets/block_one/Rectangle_2.png";
import arrowIcon from "../../assets/block_one/Arrow.svg";
import dotsPattern from "../../assets/block_one/dots.svg";
import { cn } from "@/lib/utils.ts";

export const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroLineContainer}>
      <div className={styles.heroLine}></div>
      <div className={styles.heroCreators}>OVER 1M CREATORS</div>
    </div>

    <div className={styles.content}>


      <div className={styles.textBlock}>
        <h1
          className={cn(styles.title, styles.animateFadeIn, "opacity-0")}
          style={{ animationDelay: ".5s" }}
        >
          Discover And Create NFTs
        </h1>
        <p
          className={cn(styles.description, styles.animateFadeIn, "opacity-0")}
          style={{ animationDelay: ".8s" }}
        >
          Discover, Create and Sell NFTs on Our Marketplace With Over Thousands
          of NFTs And Get a
          <span className={styles.bonus}>$20 bonus.</span>
        </p>

        <div
          className={cn(styles.buttons, styles.animateFadeIn, "opacity-0")}
          style={{ animationDelay: "1.1s" }}
        >
          <button className={styles.btn}>Explore More</button>
          <button className={`${styles.btn} ${styles.secondary}`}>
            Create NFT
          </button>
        </div>

        <div
          className={cn(styles.stats, styles.animateFadeIn, "opacity-0")}
          style={{ animationDelay: "1.4s" }}
        >
          <div>
            <p className={styles.statNumber}>430K+</p>
            <p className={styles.statLabel}>Art Works</p>
          </div>
          <div>
            <p className={styles.statNumber}>159K+</p>
            <p className={styles.statLabel}>Creators</p>
          </div>
          <div>
            <p className={styles.statNumber}>87K+</p>
            <p className={styles.statLabel}>Collections</p>
          </div>
        </div>
      </div>

      <div className={styles.imageBlock}>
        <div
          className={cn(
            styles.nftImageWrapper,
            styles.slideInRight,
            "absolute right-0 opacity-0",
          )}
          style={{ animationDelay: "0.4s" }}
        >
          <img src={nft1} alt="NFT" className={styles.nftImage} />
        </div>
        <img
          src={arrowIcon}
          alt="Arrow"
          className={cn(
            styles.arrowIcon,
            styles.animateFadeInArrow,
            "opacity-0",
          )}
          style={{ animationDelay: "2.4s" }}
        />
        <div
          className={cn(
            styles.nftBlurWrapper,
            styles.slideInRight,
            "absolute right-0 opacity-0",
          )}
          style={{ animationDelay: "1.4s" }}
        >
          <img src={nftBlur} alt="Blur Effect" className={styles.nftBlur} />
        </div>
        <img
          src={dotsPattern}
          alt="Blur Effect"
          className={cn(styles.dotsPattern, styles.animateFadeIn, "opacity-0")}
          style={{ animationDelay: ".5s" }}
        />
      </div>
    </div>
  </section>
);
