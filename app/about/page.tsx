"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredFaculty, whyUsItems } from "@/lib/Metadata";
import Image from "next/image";

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % whyUsItems.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('images/aboutus.jpg')" }} // Placeholder background image
      >
        <div className="absolute inset-0  bg-[var(--color-gold-accent)]/10"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">About Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Discover our story, mission, and the passion that drives Delhi Design Academy.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center hover-glow cursor-pointer p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At Delhi Design Academy, our mission is to empower aspiring interior designers with the knowledge,
            skills, and creativity needed to transform spaces into beautiful, functional environments.
            We believe in fostering innovation, sustainability, and excellence in design education.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center hover-lift cursor-pointer p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To be the leading online platform for interior design education, inspiring a new generation
            of designers who create sustainable, inclusive, and aesthetically pleasing spaces that enhance
            lives and contribute to a better world.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 fade-in">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hover-slide-left cursor-pointer p-4 rounded-lg transition-all">
              <p className="text-lg leading-relaxed mb-4">
                Founded in 2015, Delhi Design Academy started as a small workshop in the heart of Delhi,
                India. Our founders, a group of passionate designers and educators, recognized the need
                for accessible, high-quality design education.
              </p>
              <p className="text-lg leading-relaxed">
                Over the years, we have grown from a local institution to a global online academy,
                reaching students from over 50 countries. Our commitment to excellence and innovation
                has made us a trusted name in interior design education.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover-shadow cursor-pointer">
              <h3 className="text-xl font-semibold mb-4">Key Milestones</h3>
              <ul className="space-y-2">
                <li className="hover-slide-right cursor-pointer">• 2015: Academy founded</li>
                <li className="hover-slide-right cursor-pointer">• 2018: First online courses launched</li>
                <li className="hover-slide-right cursor-pointer">• 2020: 10,000+ students milestone</li>
                <li className="hover-slide-right cursor-pointer">• 2023: International expansion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center hover-scale cursor-pointer p-6 rounded-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creativity</h3>
              <p>We encourage innovative thinking and artistic expression in all our courses.</p>
            </div>
            <div className="text-center hover-scale cursor-pointer p-6 rounded-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p>Promoting eco-friendly design practices for a better future.</p>
            </div>
            <div className="text-center hover-scale cursor-pointer p-6 rounded-lg transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p>Building a supportive community of designers and learners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Delhi Design Academy?</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {whyUsItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="text-center bg-white p-8 rounded-lg shadow-md mx-4">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                      <p className="text-lg text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {whyUsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Preview Section */}
      {/* <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">Meet Our Expert Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredFaculty.map((member, index) => (
              <div key={member.id} className="hover-lift cursor-pointer">
                <Card className="overflow-hidden hover-shadow">
                  <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                    {member.image ? (
                      <Image
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                      width={80}
                      height={80}
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-[var(--color-gold-accent)] flex items-center justify-center">
                      <span className="text-white text-lg font-bold">{member.name.charAt(0)}</span>
                      </div>
                    )}
                    </div>
                    <div className="flex-1">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                    </div>
                  </div>
                  </CardHeader>
                  <CardContent className="py-4">
                  <CardDescription className="text-gray-700">
                    {member.bio}
                  </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}