import { FC } from "react";
import styles from "./NftCard.module.css";
import EthIcon from "../../assets/block_two/eth-icon.svg?react";
import { CountDownTimer } from "@/components";
import { Button } from "@/components/UI/Button.tsx";

type NftCardProps = {
  image: string;
  title: string;
  rating: number;
  dateRemaining: Date;
};

export const NftCard: FC<NftCardProps> = ({
  image,
  title,
  rating,
  dateRemaining,
}) => (
  <article className={styles.nftCard}>
    <figure
      className={styles.nftImage}
      style={{ backgroundImage: `url(${image})` }}
    >
      <CountDownTimer toDate={dateRemaining} />
    </figure>

    <figcaption>
      <h3 className={styles.nftCardTitle}>{title}</h3>
    </figcaption>

    <footer className={styles.cardInfoContainer}>
      <div className={styles.ratingContainer}>
        <strong className={styles.currentBidText}>Current bid</strong>
        <EthIcon className={styles.nftIcon} aria-hidden />
        <span
          className={styles.rating}
          aria-label={`Current bid: ${rating.toPrecision(2)} ETH`}
        >
          {rating.toPrecision(2)}
        </span>
      </div>
      <Button size="lg">PLACE BID</Button>
    </footer>
  </article>
);
