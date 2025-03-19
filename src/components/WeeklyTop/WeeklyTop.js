import React, { useState } from "react";
import styles from "./WeeklyTop.module.css";

import nftImage1 from "../../assets/block_two/1.jpeg";  // Измените на свой путь
import nftImage2 from "../../assets/block_two/2.jpeg";  // Измените на свой путь
import nftImage3 from "../../assets/block_two/3.jpeg";  // Измените на свой путь
import leftArrow from "../../assets/block_two/Line1.png";  // Путь к стрелке
import rightArrow from "../../assets/block_two/Line2.png";  // Путь к стрелке

// Пример данных для слайдера
const nftData = [
    {
        id: 1,
        image: nftImage1,
        title: "Sun-Glass",
        description: "Stylish and trendy sun-glasses, perfect for sunny days.",
        rating: 4.5,
    },
    {
        id: 2,
        image: nftImage2,
        title: "Sun-Glass 2",
        description: "High-quality sun-glasses, the latest fashion trend.",
        rating: 4.7,
    },
    {
        id: 3,
        image: nftImage2,
        title: "Sun-Glass 3",
        description: "Comfortable and fashionable sun-glasses for every occasion.",
        rating: 4.8,
    },
    {
        id: 4,
        image: nftImage3,
        title: "Sun-Glass 4",
        description: "Premium sun-glasses with UV protection.",
        rating: 4.6,
    },
    {
        id: 5,
        image: nftImage1,
        title: "Sun-Glass 5",
        description: "Classic sun-glasses with a modern twist.",
        rating: 4.9,
    },
    {
        id: 6,
        image: nftImage3,
        title: "Sun-Glass 6",
        description: "Sleek and stylish sun-glasses, made for the beach.",
        rating: 4.4,
    },
    {
        id: 6,
        image: nftImage3,
        title: "Sun-Glass 6",
        description: "Sleek and stylish sun-glasses, made for the beach.",
        rating: 4.4,
    },{
        id: 6,
        image: nftImage3,
        title: "Sun-Glass 6",
        description: "Sleek and stylish sun-glasses, made for the beach.",
        rating: 4.6,
    }

];

function WeeklyTop() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cardsPerSlide = 3; // Количество карточек, которые показываются на одном слайде

    const handleNext = () => {
        if (currentIndex + cardsPerSlide < nftData.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Если достигнут конец, вернуться к началу
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(nftData.length - cardsPerSlide); // Если в начале, то идти в конец
        }
    };

    return (
        <section className={styles.weeklyTop}>
            <h2>Weekly - Top NFT</h2>
            <div className={styles.nftSlider}>
                <div className={styles.nftGridWrapper}>
                    <div
                        className={styles.nftGrid}
                        style={{ transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)` }}
                    >
                        {nftData.map((nft) => (
                            <div key={nft.id} className={styles.nftCard}>
                                <div
                                    className={styles.nftImage}
                                    style={{ backgroundImage: `url(${nft.image})` }}
                                ></div>
                                <h3>{nft.title}</h3>
                                <p>{nft.description}</p>
                                <div className={styles.rating}>Rating: {nft.rating}</div>
                                <button className={styles.bidBtn}>Place Bid</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.arrowButtons}>
                    <button className={styles.arrowButton} onClick={handlePrev}>
                        <img src={leftArrow} alt="Previous" />
                    </button>

                    <button className={styles.arrowButton} onClick={handleNext}>
                        <img src={rightArrow} alt="Next" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default WeeklyTop;
