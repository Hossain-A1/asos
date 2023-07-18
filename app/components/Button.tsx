import clsx from "clsx";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariance = cva(
  "px-6 py-3 duration-300 rounded",

  {
    variants: {
      color: {
        teal: "bg-accent1 text-light hover:bg-accent1/90",
        dark: "bg-dark hover:bg-dark/90 text-light",
        light: "bg-light hover:bg-light/90 text-dark",
        ghost: "bg-transparent hover:bg-dark/10 text-dark",
      },
    },
    defaultVariants: {
      color: "teal",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariance> {
  href: string;
  target?: string;
  placeholder: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  target,
  placeholder,
  color,
}) => {
  return (
    <Link href={href} target={target} className={clsx(buttonVariance({ color }))}>
      {placeholder}
    </Link>
  );
};

export default Button;
