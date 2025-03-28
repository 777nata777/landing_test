import styles from "./Navigation.module.css";
import { SocialIcons } from "./SocialIcons.tsx";
import { cn } from "@/lib/utils.ts";
import {ButtonNata} from "@/components/UI/ButtonNata.tsx";

interface NavigationProps {
    menuOpen: boolean;
}

export const Navigation = ({ menuOpen }: NavigationProps) => {
    return (
        <nav className={cn(styles.nav, { [styles.open]: menuOpen })}>
            <ul className={styles.navList}>
                <li><a href="#discover">Discover</a></li>
                <li><a href="#creators">Creators</a></li>
                <li><a href="#sell">Sell</a></li>
                <li><a href="#stats">Stats</a></li>
            </ul>
            <SocialIcons />

            <div className={styles.buttonWrapper}>
                <ButtonNata variant="black" fontFamily="'Inter', sans-serif">
                    Connect Wallet
                </ButtonNata>
            </div>
        </nav>
    );
};
