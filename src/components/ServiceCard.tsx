"use client";

import { ReactNode } from "react";
import Button from "./Button";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon?: ReactNode;
  popular?: boolean;
}

export default function ServiceCard({
  title,
  price,
  description,
  features,
  icon,
  popular = false,
}: ServiceCardProps) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-md bg-white h-full flex flex-col ${
      popular ? "border-2 border-primary ring-2 ring-primary-light/20" : "border border-gray-200"
    }`}>
      {popular && (
        <div className="bg-primary text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-primary-dark">{title}</h3>
          {icon && <div className="text-primary">{icon}</div>}
        </div>
        <div className="mb-4">
          <span className="text-3xl font-bold text-primary-dark">${price}</span>
        </div>
        <p className="text-dark mb-6">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-primary flex-shrink-0 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-dark">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-6">
        <Button href="/booking" variant={popular ? "primary" : "outline"} className="w-full">
          Book Now
        </Button>
      </div>
    </div>
  );
} 