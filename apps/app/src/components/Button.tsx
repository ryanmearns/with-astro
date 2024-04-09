import { LucideLoader2, type LucideIcon } from "lucide-react";
import type { ButtonProps as RACButtonProps } from "react-aria-components";
import { Button as RACButton, composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { focusRing } from "./utils";

export interface ButtonProps extends RACButtonProps {
  variant?: "primary" | "secondary" | "destructive" | "icon" | "outline";
  isLoading?: boolean;
  loadingText?: string;
  Icon?: LucideIcon;
  iconPosition?: "leading" | "trailing";
}

export const buttonVariants = tv({
  extend: focusRing,
  base: "px-4 py-2 text-sm text-center font-medium justify-center flex items-center transition rounded-lg w-fit cursor-pointer",
  variants: {
    variant: {
      primary:
        "bg-blue-500 hover:bg-blue-600 pressed:bg-blue-700 text-white dark:text-white",
      secondary:
        "bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100",
      outline:
        "bg-white border border-gray-200 hover:bg-gray-50 dark:border-zinc-700 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:pressed:bg-zinc-500 dark:text-zinc-200",
      destructive: "bg-red-500 hover:bg-red-600 pressed:bg-red-700 text-white",
      icon: "border-0 p-2 flex items-center justify-center text-gray-600 hover:bg-black/[5%] pressed:bg-black/10 dark:text-zinc-400 dark:hover:bg-white/10 dark:pressed:bg-white/20 disabled:bg-transparent",
    },
    isDisabled: {
      true: "bg-gray-100 dark:bg-zinc-800 text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Button({
  isLoading = false,
  loadingText,
  children,
  Icon,
  iconPosition = "leading",
  ...props
}: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        buttonVariants({ ...renderProps, variant: props.variant, className })
      )}
    >
      <>
        {Icon && !isLoading && iconPosition === "leading" && (
          <Icon
            className={twMerge("h-4 w-4", props.variant !== "icon" && "mr-2")}
          />
        )}
        {isLoading && (
          <LucideLoader2
            className={twMerge(
              "h-4 animate-spin w-4 ",
              props.variant !== "icon" && "mr-2"
            )}
          />
        )}
        {loadingText && !isLoading && children}
        {!loadingText && !isLoading && children}
        {!loadingText && isLoading && children}
        {loadingText && isLoading && loadingText}
        {Icon && !isLoading && iconPosition === "trailing" && (
          <Icon
            className={twMerge("h-4 w-4", props.variant !== "icon" && "ml-2")}
          />
        )}
      </>
    </RACButton>
  );
}
