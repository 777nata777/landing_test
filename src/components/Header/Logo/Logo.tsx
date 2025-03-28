import { LogoIcon } from "./LogoIcon";
import { cn } from "@/lib/utils.ts";
import styles from "./Logo.module.css";

interface LogoProps {
    className?: string;
    isFooter?: boolean;
}

export const Logo = ({ className, isFooter = false }: LogoProps) => {
    return (
        <div className={cn(isFooter ? styles.footerLogoContainer : styles.headerLogoContainer, className)}>
            <LogoIcon className={cn(isFooter ? styles.footerLogoIcon : styles.headerLogoIcon)} />
            {!isFooter && <span className={styles.headerBrandName}>DiveSea</span>}
            {isFooter && <span className={styles.footerBrandName}>DiveSea</span>}
        </div>
    );
};
