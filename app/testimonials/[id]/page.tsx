import { Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { testimonials } from "@/lib/Metadata";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

interface TestimonialDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function TestimonialDetailPage({
  params,
}: TestimonialDetailPageProps) {
  const { id } = await params;
  const testimonial = testimonials.find((t) => t.id === parseInt(id));

  if (!testimonial) {
    notFound();
  }

  // Get related testimonials (excluding the current one)
  const relatedTestimonials = testimonials
    .filter((t) => t.id !== testimonial.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 bg-[var(--color-champagne-cream)]">
      {/* Back Button */}
      <div className="px-6 py-4 max-w-4xl mx-auto">
        <Link href="/testimonials">
          <Button
            variant="ghost"
            className="text-[var(--color-charcoal)] hover:bg-white/50"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Testimonials
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          {/* Header with Image */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-8">
            {/* Profile Image */}
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--color-gold-accent)]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex gap-1 justify-center">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[var(--color-gold-accent)] text-[var(--color-gold-accent)]"
                  />
                ))}
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:col-span-4">
              <h1 className="text-3xl font-bold text-[var(--color-charcoal)] mb-2">
                {testimonial.name}
              </h1>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Course Taken</p>
                  <p className="text-lg font-semibold text-[var(--color-charcoal)]">
                    {testimonial.courseTaken}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200"></div>

          {/* Full Review */}
          <div className="px-8 py-8">
            <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4">
              Full Review
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {testimonial.fullReview}
            </p>
          </div>

          {/* CTA */}
          <div className="px-8 py-8 bg-[var(--color-charcoal)] text-center">
            <h3 className="text-2xl font-bold text-[var(--color-champagne-cream)] mb-3">
              Inspired by {testimonial.name}'s Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Take the same course and start transforming your design career
            </p>
            <Link href="/courses">
              <Button className="bg-[var(--color-gold-accent)] text-[var(--color-charcoal)] rounded-[5px] hover:bg-[var(--color-gold-accent)]/80">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Testimonials */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-8">
            More Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTestimonials.map((test) => (
              <Link
                key={test.id}
                href={`/testimonials/${test.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[var(--color-charcoal)]">
                    {test.name}
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {test.fullReview}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
