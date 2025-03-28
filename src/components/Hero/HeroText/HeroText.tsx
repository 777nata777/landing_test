import styles from "./HeroText.module.css";
import { cn } from "@/lib/utils.ts";
import { HeroButtons } from "./HeroButtons";
import { Stats } from "./Stats";

export const HeroText = () => (
    <div className={styles.textBlock}>
        <h1 className={cn(styles.title, styles.animateFadeIn)}>Discover And Create NFTs</h1>
        <p className={cn(styles.description, styles.animateFadeIn)}>
            Discover, Create and Sell NFTs on Our Marketplace With Over Thousands
            of NFTs And Get a <span className={styles.bonus}>$20 bonus.</span>
        </p>

        <HeroButtons />
        <Stats />
    </div>
);
