import styles from "./HeroText.module.css";
import { cn } from "@/lib/utils.ts";

export const Stats = () => (
    <div className={cn(styles.stats, styles.animateFadeIn)}>
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
);
