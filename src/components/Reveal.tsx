import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
};

export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>(delay);

  return (
    <Tag ref={ref as never} data-visible={visible} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}
