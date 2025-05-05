"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-accent-yellow hover:bg-amber-600 text-white",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };
  
  const buttonClasses = `inline-flex items-center justify-center px-5 py-3 rounded-md font-medium focus:outline-none transition-colors ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
} 