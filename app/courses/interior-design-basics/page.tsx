"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import JoinUsDialog from "@/components/JoinUsDialog";

export default function InteriorDesignBasics() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image and Overlay */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/coursesIndividual.jpg')" // Interior design workspace placeholder
        }}
      >
        <div className="absolute inset-0 bg-[var(--color-gold-accent)]/10"></div>       
        <div className="relative z-10 text-center text-[var(--color-champagne-cream)] px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Interior Design Basics
          </h1>
          <p className="text-xl md:text-2xl">
            Learn the fundamentals of interior design, including color theory, space planning, and basic principles to create beautiful and functional spaces.
          </p>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="relative py-8 px-6 bg-[var(--color-champagne-cream)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Detailed Information */}
            <div className="lg:col-span-2">
                <Button 
                  variant="ghost" 
                  asChild
                  className="text-[var(--color-gold-accent)] hover:bg-[var(--color-gold-accent)]/20"
                    >
                  <a href="/courses">← Back to Courses</a>
                </Button>
              <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-6">Course Overview</h2>
              <div className="space-y-6 text-[var(--color-charcoal)]">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Duration</h3>
                  <p>8 weeks (2 hours per session, 3 sessions per week)</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Curriculum</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Introduction to Interior Design Principles</li>
                    <li>Color Theory and Application</li>
                    <li>Space Planning and Layout</li>
                    <li>Material Selection and Sustainability</li>
                    <li>Lighting Design Fundamentals</li>
                    <li>Basic Furniture and Accessory Selection</li>
                    <li>Client Communication and Presentation</li>
                    <li>Final Project: Design a Small Space</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What You will Learn</h3>
                  <p>
                    This comprehensive course covers everything you need to know to start your journey in interior design.
                    From understanding basic principles to applying them in real-world scenarios, you will gain the skills
                    and confidence to transform spaces beautifully.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Fee Details Card - Overlapping */}
            <div className="lg:col-span-1">
              <Card className="bg-white shadow-lg border-0 relative z-10 lg:-mt-32">
                <CardHeader className="bg-[var(--color-gold-accent)] text-[var(--color-charcoal)] rounded-t-lg">
                  <CardTitle className="text-center">Course Details</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[var(--color-charcoal)]">₹15,000</p>
                      <p className="text-sm text-gray-600">Total Course Fee</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between mb-2">
                        <span>Duration:</span>
                        <span>8 Weeks</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Sessions:</span>
                        <span>24</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Mode:</span>
                        <span>Online</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => setOpenDialog(true)}
                      className="w-full mt-4 bg-[var(--color-gold-accent)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold-accent)]/90"
                    >
                      Join Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Full Page Dialog */}
      <JoinUsDialog 
        trigger={<div />}
        open={openDialog}
        onOpenChange={setOpenDialog}
      />
    </div>
  );
}