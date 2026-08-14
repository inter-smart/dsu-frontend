import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("leading-[1.1] font-bold", {
  variants: {
    size: {
      h1: "text-[31px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] leading-[1.1] font-bold text-[#212121]",
      h2: "text-[28px] sm:text-[22px] lg:text-[26px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.2] font-bold text-[#212121]",
      h3: "text-[18px] sm:text-[20px] lg:text-[21px] 2xl:text-[25px] 3xl:text-[31px]",
      h4: "text-[14px] sm:text-[15px] lg:text-[17px] 2xl:text-[20px] 3xl:text-[25px]",
      h5: "text-[12px] sm:text-[14px] lg:text-[12px] 2xl:text-[15px] 3xl:text-[18px]",
      h6: "text-[10px] sm:text-[10px] lg:text-[11px] 2xl:text-[13px] 3xl:text-[16px]",
    },
    align: {
      left: "",
      center: "w-fit mx-auto text-center",
    },
  },
  defaultVariants: {
    size: "h1",
    align: "left",
  },
});

const auroraInnerClass =
  "dark:animate-aurora dark:[background-image:var(--aurora-gradient)] dark:bg-[length:200%_auto] dark:bg-clip-text dark:text-transparent";

function Heading({
  as: Component = "div",
  size = "h1",
  align = "left",
  aurora = false,
  colors = ["--basecolor", "--basecolor2"],
  speed = 1,
  className,
  children,
  ...props
}) {
  if (aurora) {
    const colorArr = Array.isArray(colors) ? colors : [colors];

    const resolved = colorArr.map((c) =>
      c.startsWith("--") ? `var(${c})` : c,
    );
    const gradientStyle = {
      "--aurora-gradient": `linear-gradient(135deg, ${resolved.join(", ")}, ${resolved[0]})`,
      animationDuration: `${10 / speed}s`,
    };

    return (
      <Component
        className={cn(headingVariants({ size, align, className }))}
        {...props}
      >
        <span className="sr-only">{children}</span>
        <span
          className={auroraInnerClass}
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </Component>
    );
  }

  return (
    <Component
      className={cn(headingVariants({ size, align, className }))}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Heading, headingVariants };
