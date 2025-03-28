import { cn } from "@/lib/utils.ts";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "black" | "white"; // Тип кнопки (цвет)
    size?: "sellNftButton" | "HeroButton" | "HeaderButton"; // Размер кнопки
    fontFamily?: string; // Шрифт кнопки (например, "Inter", "Outfit", "Poppins")
}

export const ButtonNata = ({
                               variant = "black", // По умолчанию черная кнопка
                               size = "HeaderButton", // По умолчанию средний размер
                               fontFamily = "'Poppins', sans-serif", // По умолчанию Poppins
                               className,
                               children,
                               ...props
                           }: ButtonProps) => {
    return (
        <button
            className={cn(
                styles.button, // Общие стили кнопки
                styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`], // Черная или белая кнопка
                styles[size], // Размер кнопки
                className
            )}
            style={{
                fontFamily,
            }}
            {...props}
        >
            {children}
        </button>
    );
};
