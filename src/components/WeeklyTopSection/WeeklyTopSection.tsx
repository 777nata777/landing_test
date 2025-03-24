import { useRef } from "react";
import { genNftDataStab } from "@/stabs/genNftDataStab";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import { NftCard, CustomButtonGroup } from "@/components";
import "react-multi-carousel/lib/styles.css";
import styles from "./WeeklyTop.module.css";

const CARD_WIDTH = 281 + 25 * 2;

const topNftList = genNftDataStab(15);

const responsive: ResponsiveType = Object.fromEntries(
  Array.from(
    { length: (4 << 10) / CARD_WIDTH },
    (_, i): [number, ResponsiveType[string]] => [
      i,
      {
        breakpoint: {
          min: i * CARD_WIDTH,
          max: (i + 1) * CARD_WIDTH,
        },
        items: i,
      },
    ],
  ),
);

export const WeeklyTopSection = () => {
  const ref = useRef<Carousel>(null);

  return (
    <section className={styles.weeklyTop}>
      <h2>Weekly - Top NFT</h2>

      <Carousel
        ref={ref}
        responsive={responsive}
        infinite
        draggable
        centerMode
        additionalTransfrom={10}
        arrows={false}
        customButtonGroup={<CustomButtonGroup refControl={ref} />}
        itemClass={styles.itemClass}
        renderButtonGroupOutside
        swipeable
      >
        {topNftList.map(({ id, ...nftProps }) => (
          <NftCard key={id} {...nftProps} />
        ))}
      </Carousel>
    </section>
  );
};
