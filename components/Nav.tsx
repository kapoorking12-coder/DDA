"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import JoinUsDialog from "./JoinUsDialog";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const getSelectedButton = () => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/courses')) return 'courses';
    if (pathname.startsWith('/testimonials')) return 'testimonials';
    return '';
  };

  const selectedButton = getSelectedButton();

  return (
    <nav className="flex items-center space-x-4">
      <Link href="/">
        <Button variant="ghost" className={`hover:bg-[var(--color-gold-accent)]/80 ${selectedButton === 'home' ? 'bg-[var(--color-gold-accent)]' : ''}`}>Home</Button>
      </Link>
      <Link href="/about">
        <Button variant="ghost" className={`hover:bg-[var(--color-gold-accent)]/80 ${selectedButton === 'about' ? 'bg-[var(--color-gold-accent)]' : ''}`}>About Us</Button>
      </Link>
      <Link href="/courses">
        <Button variant="ghost" className={`hover:bg-[var(--color-gold-accent)]/80 ${selectedButton === 'courses' ? 'bg-[var(--color-gold-accent)]' : ''}`}>Courses</Button>
      </Link>
      <Link href="/testimonials">
        <Button variant="ghost" className={`hover:bg-[var(--color-gold-accent)]/80 ${selectedButton === 'testimonials' ? 'bg-[var(--color-gold-accent)]' : ''}`}>Testimonials</Button>
      </Link>
      <JoinUsDialog />
    </nav>
  );
}