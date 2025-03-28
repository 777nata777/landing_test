import styles from "./HeroText.module.css";
import { ButtonNata } from "@/components/UI/ButtonNata.tsx";
import { cn } from "@/lib/utils.ts";

export const HeroButtons = () => (
    <div className={cn(styles.buttons, styles.animateFadeIn)}>
        <ButtonNata variant="black" size="HeroButton">
            Explore More
        </ButtonNata>
        <ButtonNata variant="white" size="HeroButton">
            Create NFT
        </ButtonNata>
    </div>
);
