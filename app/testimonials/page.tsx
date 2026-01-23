"use client";

import { useState } from "react";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/Metadata";

export default function TestimonialsPage() {
  // const [selectedId, setSelectedId] = useState<number | null>(null);

  // const handleCardClick = (id: number) => {
  //   setSelectedId(id);
  //   // Navigation will be handled via Link in the card
  // };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('images/Untitled-1.jpg')" }} // Placeholder background image
      >
        <div className="absolute inset-0  bg-[var(--color-gold-accent)]/10"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Testimonials</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Our students’ success stories reflect the quality of learning at <b>Delhi Design Academy</b>. Through expert mentorship, practical assignments, and flexible online programs, students gain the confidence, skills, and industry exposure needed to build successful careers in interior design.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-6 bg-[var(--color-champagne-cream)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (<TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  shortReview={testimonial.fullReview}
                  image={testimonial.image}
                  rating={testimonial.rating}
                  courseTaken={testimonial.courseTaken}
                />
            ))}
          </div>
        </div>
      </section>
      {/* Separator Section */}
      <div className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent"></div>
          <div className="text-[var(--color-gold-accent)] text-2xl">.....</div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent"></div>
        </div>
      </div>
      {/* CTA Section */}
      <section className="py-12 px-6  text-center">
        <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-4">
          Ready to Transform Your Design Career?
        </h2>
        <p className="text-[var(--color-charcoal)] mb-6 max-w-2xl mx-auto">
          Join hundreds of successful designers who have graduated from our academy
        </p>
        <Link href="/courses">
          <Button className="bg-[var(--color-gold-accent)] text-[var(--color-charcoal)] rounded-[5px] hover:bg-[var(--color-gold-accent)]/80">
            Explore Our Courses
          </Button>
        </Link>
      </section>
      {/* Separator Section */}
      <div className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent"></div>
          <div className="text-[var(--color-gold-accent)] text-2xl">.....</div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
