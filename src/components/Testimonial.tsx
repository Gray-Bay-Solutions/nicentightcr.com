import Image from "next/image";

interface TestimonialProps {
  quote: string;
  name: string;
  title?: string;
  imageSrc?: string;
  rating?: number;
}

export default function Testimonial({
  quote,
  name,
  title,
  imageSrc,
  rating = 5,
}: TestimonialProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-full flex flex-col">
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? "text-accent-yellow" : "text-gray-300"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        ))}
      </div>
      
      <blockquote className="text-dark italic flex-grow mb-4">&quot;{quote}&quot;</blockquote>
      
      <div className="flex items-center mt-auto">
        {imageSrc && (
          <div className="mr-3 flex-shrink-0">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={name}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
          </div>
        )}
        <div>
          <div className="font-medium text-primary-dark">{name}</div>
          {title && <div className="text-medium text-sm">{title}</div>}
        </div>
      </div>
    </div>
  );
} 