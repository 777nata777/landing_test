import styles from "./SellNft.module.css";
import thirdBlockImage from "../../assets/block_three/1.jpeg";
import {ButtonNata} from "@/components/UI/ButtonNata.tsx"; // Путь к вашей картинке

export const SellNft = () => (
    <section className={styles.sellNft}>
        <div className={styles.content}>
            <div className={styles.textContainer}>
                <h2>Create and Sell NFTs</h2>
                <p>World’s Largest NFT Place.</p>
                <div className={styles.buttons}>
                    <ButtonNata variant="white" size="HeroButton" fontFamily="Outfit', sans-serif">
                        Explore More
                    </ButtonNata>
                    <ButtonNata variant="black" size="HeroButton" fontFamily="Outfit', sans-serif">
                        Sell Artwork
                    </ButtonNata>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <img className={styles.image} src={thirdBlockImage} alt="Sell NFT"/>
            </div>
        </div>
    </section>
);
