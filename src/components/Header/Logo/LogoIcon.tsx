import DefaultLogo from "../../../assets/header/Logo.svg";
import { cn } from "@/lib/utils.ts";

interface LogoIconProps {
    className?: string;
}

export const LogoIcon = ({ className }: LogoIconProps) => {
    return (
        <img
            src={DefaultLogo}
            alt="Logo"
            className={cn(className)}
        />
    );
};
