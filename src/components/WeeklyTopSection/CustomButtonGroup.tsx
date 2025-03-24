import React, { FC, useCallback } from "react";
import arrowButton from "@/assets/block_two/arrow-button.svg";
import Carousel from "react-multi-carousel";

import styles from "@/components/WeeklyTopSection/CustomButtonGroup.module.css";

type CustomButtonGroupAsArrowsProps = {
  refControl: React.RefObject<Carousel | null>;
};

export const CustomButtonGroup: FC<CustomButtonGroupAsArrowsProps> = ({
  refControl,
}) => {
  const handleNext = useCallback(() => {
    refControl.current?.next(1);
  }, [refControl]);

  const handlePrevious = useCallback(() => {
    refControl.current?.previous(1);
  }, [refControl]);

  return (
    <div className={styles.arrowButtonsWrapper}>
      <button className={styles.arrowButton} onClick={handlePrevious}>
        <img src={arrowButton} alt="Previous" />
      </button>

      <span className={styles.divider} />

      <button className={styles.arrowButton} onClick={handleNext}>
        <img className={styles.mirrorArrow} src={arrowButton} alt="Next" />
      </button>
    </div>
  );
};
