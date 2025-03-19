import React from "react";
import styles from "./Hero.module.css";

import nft1 from "../../assets/block_one/Rectangle3.png";
import nftBlur from "../../assets/block_one/Rectangle_2.png";
import arrowIcon from "../../assets/block_one/Arrow 01.png";
import dotsPattern from "../../assets/block_one/Group 427320330.png";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroLine}></div>
            <div className={styles.content}>
                <div className={styles.heroLine}></div>
                <div className={styles.textBlock}>
                    <h1 className={styles.title}>Discover And Create NFTs</h1>
                    <p className={styles.description}>
                        Discover, Create and Sell NFTs on Our Marketplace With Over Thousands of NFTs
                        And Get a <span className={styles.bonus}>$20 bonus.</span>
                    </p>

                    <div className={styles.buttons}>
                        <button className={styles.btn}>Explore More</button>
                        <button className={`${styles.btn} ${styles.secondary}`}>Create NFT</button>
                    </div>

                    <div className={styles.stats}>
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
                    <div className={styles.nftImageWrapper}>
                        <img src={nft1} alt="NFT" className={styles.nftImage} />
                    </div>
                    <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
                    <div className={styles.nftBlurWrapper}>
                        <img src={nftBlur} alt="Blur Effect" className={styles.nftBlur} />
                    </div>
                    <img src={dotsPattern} alt="Blur Effect" className={styles.dotsPattern} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
