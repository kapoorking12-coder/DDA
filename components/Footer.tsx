"use client";

import Link from "next/link";
import { courses } from "@/lib/Metadata";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-champagne-cream)] py-12 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Courses Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-[var(--color-gold-accent)]">Courses</h3>
          <ul className="space-y-3">
            {courses.map(course => (
              <li key={course.id}>
                <Link href={course.redirectsTo} className="hover:text-[var(--color-gold-accent)] transition-colors">
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-[var(--color-gold-accent)]">Contact</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold mb-1">Email</p>
              <a href="mailto:delhidesignacademy@gmail.com" className="hover:text-[var(--color-gold-accent)] transition-colors">
                delhidesignacademy@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">Phone</p>
              <a href="#" className="hover:text-[var(--color-gold-accent)] transition-colors">
                +91 8991863040
              </a>
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-[var(--color-gold-accent)]">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="hover:text-[var(--color-gold-accent)] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-[var(--color-gold-accent)] transition-colors">
                Portfolios
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[var(--color-gold-accent)]/20 mt-8 pt-8 text-center text-sm">
        <p>&copy; 2024 Delhi Design Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
