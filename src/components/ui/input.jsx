import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[42px] 2xl:h-[46px] w-full rounded-[8px] border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#1f1f1f] px-3.5 py-2 text-[13px] 2xl:text-[14px] text-[#212121] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] outline-none transition-colors focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
