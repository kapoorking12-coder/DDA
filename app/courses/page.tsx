"use client";

import { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/lib/Metadata";

export default function CoursesPage() {

  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Top Section with Background Image */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/courses.jpg')" }} 
      >
        <div className="absolute inset-0  bg-[var(--color-gold-accent)]/10"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Our Courses</h1>
          <Button onClick={scrollToCourses} className="bg-[var(--color-gold-accent)] text-[var(--color-charcoal)] rounded-[5px] mt-6 hover:bg-[var(--color-gold-accent)]/80">
            View All Courses
          </Button>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <Link key={course.id} href="/courses/interior-design-basics" className="block">
                <Card className="h-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 pb-6">
                    <CardDescription>
                      {course.shortDesc}
                    </CardDescription>
                    <div className="text-sm text-gray-600">
                      <p><strong>Duration:</strong> {course.duration}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}