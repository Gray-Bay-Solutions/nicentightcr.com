import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient-blue" | "gradient-yellow";
  container?: boolean;
}

export default function Section({
  children,
  className = "",
  background = "white",
  container = true,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    "gradient-blue": "gradient-blue text-white",
    "gradient-yellow": "gradient-yellow text-white",
  };
  
  return (
    <section className={`py-12 md:py-16 ${backgrounds[background]} ${className}`}>
      {container ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
} 