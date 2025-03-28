import styles from "./BurgerMenu.module.css";
import { cn } from "@/lib/utils.ts";

interface BurgerMenuProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}

export const BurgerMenu = ({ menuOpen, setMenuOpen }: BurgerMenuProps) => {
    return (
        <button
            className={cn(styles.burger, { [styles.open]: menuOpen })}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <div className={styles.burgerLine}></div>
        </button>
    );
};
