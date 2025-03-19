import React from "react";
import styles from "./SellNft.module.css";

import thirdBlockImage from "../../assets/block_three/1.jpeg";  // Путь к вашей картинке

function SellNft() {
    return (
        <section className={styles.sellNft}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h2>Create and Sell NFTs</h2>
                    <p>
                        World’s Largest NFT Place.
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.whiteButton}>Explore More</button>
                        <button className={styles.blackButton}>Sell Artwork</button>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src={thirdBlockImage}
                        alt="Sell NFT"
                    />
                </div>
            </div>
        </section>
    );
}

export default SellNft;
