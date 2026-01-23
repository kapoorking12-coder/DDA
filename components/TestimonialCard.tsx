import { Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  courseTaken: string;
  shortReview: string;
  image: string;
  rating: number;
  onClick?: () => void;
}

export default function TestimonialCard({
  name,
  courseTaken,
  shortReview,
  image,
  rating,
  onClick,
}: TestimonialCardProps) {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-shadow bg-white"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex gap-4 items-start">
          {/* Circular Image */}
            <div className="flex-shrink-0">
              {image ? (
              <Image
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full object-cover"
                width={64}
                height={64}
              />
              ) : (
              <div className="w-16 h-16 rounded-full bg-[var(--color-gold-accent)] flex items-center justify-center">
                <span className="text-white text-lg font-bold">{name.charAt(0)}</span>
              </div>
              )}
            </div>
          
          {/* Header Info */}
          <div className="flex-1">
            <CardTitle className="text-lg text-[var(--color-charcoal)]">
              {name}
            </CardTitle>
            <p className="text-sm text-gray-600 mb-2">{courseTaken}</p>
            
            {/* Rating */}
            <div className="flex gap-1">
              {Array.from({ length: rating }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-[var(--color-gold-accent)] text-[var(--color-gold-accent)]"
                />
              ))}
            </div>
          </div>
        </div>     
       
      </CardContent>
      <CardFooter className=" p-6 pt-0">
        <p className="text-[var(--color-charcoal)]">{shortReview}</p>
      </CardFooter>
    </Card>
  );
}
