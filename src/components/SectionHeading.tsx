import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-2 mb-8 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">{title}</h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-dark max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
} 