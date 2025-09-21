import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 px-4 py-2 bg-foreground text-background hover:opacity-90 dark:bg-white dark:text-black",
   {
      variants: {
         variant: {
            default: "",
            outline:
               "border border-border bg-transparent text-foreground hover:bg-foreground/5",
         },
         size: {
            default: "h-10 px-4 py-2",
            sm: "h-8 px-3",
            lg: "h-12 px-6 text-base",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
      },
   }
);

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button";
      return (
         <Comp
            className={[buttonVariants({ variant, size }), className]
               .filter(Boolean)
               .join(" ")}
            ref={ref}
            {...props}
         />
      );
   }
);
Button.displayName = "Button";
