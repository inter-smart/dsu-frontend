import * as React from "react";
import { cn } from "@/lib/utils";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold uppercase tracking-wider text-[#374151] dark:text-[#D1D5DB] select-none block mb-2",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };
