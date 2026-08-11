import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("leading-normal font-bold tracking-[0.020rem]", {
  variants: {
    size: {
      h1: "text-[31px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] leading-normal font-bold text-[#212121]",
      h2: "text-[28px] sm:text-[22px] lg:text-[26px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.2] font-bold text-[#212121]",
      h3: "text-[18px] sm:text-[20px] lg:text-[21px] 2xl:text-[25px] 3xl:text-[31px]",
      h4: "text-[14px] sm:text-[15px] lg:text-[17px] 2xl:text-[20px] 3xl:text-[25px]",
      h5: "text-[12px] sm:text-[14px] lg:text-[12px] 2xl:text-[15px] 3xl:text-[18px]",
      h6: "text-[10px] sm:text-[10px] lg:text-[11px] 2xl:text-[13px] 3xl:text-[16px]",
    },
  },
  defaultVariants: {
    size: "h1",
  },
});

function Heading({
  as: Component = "div",
  size = "h1",
  className,
  ...props
}) {
  return (
    <Component
      className={cn(headingVariants({ size, className }))}
      {...props}
    />
  );
}

export { Heading, headingVariants };
