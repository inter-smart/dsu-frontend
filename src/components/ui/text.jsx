import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("leading-normal font-normal tracking-[0.020rem]", {
  variants: {
    size: {
      default:
        "text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-[#4A5565] dark:text-white",
      p0: "text-[15px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[20px] leading-[1.1] font-normal bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent",
      p1: "text-[14px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[17px]",
      p2: "text-[12px] lg:text-[10px] 2xl:text-[12px] 3xl:text-[15px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

function Text({ as: Component = "div", size = "default", className, ...props }) {
  return (
    <Component
      className={cn(textVariants({ size, className }))}
      {...props}
    />
  );
}

export { Text, textVariants };
