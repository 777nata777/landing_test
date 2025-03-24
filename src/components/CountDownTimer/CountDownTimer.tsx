import React from "react";
import useTimer from "../../hooks/useTimer";
import styles from "./CountDownTimer.module.css";

type Props = {
  toDate: Date;
};

const numberView = (n: number, postfix: string): string =>
  `${n}`.padStart(2, "0") + postfix;

export const CountDownTimer: React.FC<Props> = ({ toDate }) => {
  const { hours, minutes, seconds } = useTimer(toDate);

  return (
    <div className={styles.wrapper}>
      {numberView(hours, "h")} {numberView(minutes, "m")}{" "}
      {numberView(seconds, "s")}
    </div>
  );
};
