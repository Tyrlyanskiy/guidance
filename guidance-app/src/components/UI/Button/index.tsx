import classNames from "classnames";
import { text } from "stream/consumers";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "remove";
  onClick?: () => void;
};

export default function Button({
  children,
  variant,
  onClick,
  className,
  ...props
}: ButtonProps) {
  const primaryVariantStyle = "bg-blue-500 font-bold py-2 px-4 text-white";
  const secondaryVariantStyle = "bg-gray-500 font-bold py-2 px-4 text-white";
  const removeVariantStyle =
    "text-xs bg-red-500 h-5 w-5 rounded hover:bg-red-600 px-0 py-0 text-white";

  const variantStyle =
    variant === "secondary"
      ? secondaryVariantStyle
      : variant === "remove"
      ? removeVariantStyle
      : primaryVariantStyle;

  const buttonDefaultClassNames = classNames(
    "rounded",
    variantStyle,
    className
  );

  return (
    <button onClick={onClick} className={buttonDefaultClassNames} {...props}>
      {children}
    </button>
  );
}
