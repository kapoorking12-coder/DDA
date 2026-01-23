"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardImage } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImageSlider from "@/components/ImageSlider";
import TestimonialCard from "@/components/TestimonialCard";

import { cn } from "@/lib/utils"
import { courses } from "@/lib/Metadata";
import { testimonials } from "@/lib/testimonials";

const studentWorkImages = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1565532636732-c2dbe2ce0655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video and Overlay Text */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/videos/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[var(--color-gold-accent)]/10"></div>
        <div className="relative z-10 text-center text-[var(--color-champagne-cream)] px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Excellence in Interior Design Education
          </h1>
          <h4 className="text-2xl md:text-2xl font-semibold">
            Shaping creative minds with over a decade of experience.
          </h4>
          <a href="#courses">
            <Button className="bg-[var(--color-gold-accent)] text-[var(--color-charcoal)] rounded-[5px] mt-6 hover:bg-[var(--color-gold-accent)]/80">
              View Courses
            </Button>
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="pt-8 pr-6 pb-1 pl-6 bg-[var(--color-champagne-cream)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-[var(--color-charcoal)] leading-relaxed">
            Bridging the gap between academic knowledge and real-world application.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="pt-8 pr-6 pb-16 pl-6 bg-[var(--color-champagne-cream)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-charcoal)]">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">            
            {courses.map(course => (
              <Link key={course.id} href={course.redirectsTo} className={cn("card-container block")}>
                <Card className="h-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                  <CardImage src={course.image || "/images/interior_design_thumbnail.jpg"} alt={course.title} />
                  <CardHeader>
                    <CardTitle className="text-[var(--color-charcoal)]">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio & Student Work Section */}
      <section className="py-16 px-6 bg-[var(--color-charcoal)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-gold-accent)]">Student Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Description */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-champagne-cream)] mb-4">
                  Learn from the Best
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                 At Delhi Design Academy, student work reflects our belief in learning through practice. From concept development to detailed drawings and presentations, our students create real-world interior design projects as part of their online learning journey.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Each project showcases a student’s creativity, technical skills, and understanding of industry standards. Guided by experienced mentors, students work on residential and commercial design assignments that help them build professional portfolios and gain confidence to take on real client projects.
                </p>
                <p className="text-gray-300 leading-relaxed">Our student work stands as a testament to the academy’s commitment to producing skilled, industry-ready interior designers.</p>
              </div>
              
              <Link href="/testimonials">
                <Button className="bg-[var(--color-gold-accent)] text-[var(--color-charcoal)] rounded-[5px] hover:bg-[var(--color-gold-accent)]/80 w-full">
                  Browse All Testimonials
                </Button>
              </Link>
            </div>

            {/* Right Side - Student Work Slider */}
            <div>
              <ImageSlider images={studentWorkImages} interval={5000} />
              <p className="text-center text-gray-400 text-sm mt-4">
                Showcase of student work and portfolio pieces
              </p>
            </div>
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
    </div>  
  );
}
