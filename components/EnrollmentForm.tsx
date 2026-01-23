"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import CourseSelector from "./CourseSelector";

interface EnrollmentFormProps {
  courseName?: string;
  trigger: React.ReactElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function EnrollmentForm({ courseName, trigger, open: externalOpen, onOpenChange: externalOnOpenChange }: EnrollmentFormProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    courseName: courseName || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isControlled = externalOpen !== undefined && externalOnOpenChange !== undefined;
  const isOpen = isControlled ? externalOpen : internalOpen;
  const setIsOpen = isControlled ? externalOnOpenChange : setInternalOpen;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-enrollment-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });

      if (response.ok) {
        alert("Enrollment submitted! Email sent successfully.");
        setFormData({ name: "", email: "", phone: "", message: "" , courseName: courseName || ""});
        setIsOpen(false);
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting enrollment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" onClose={() => setIsOpen(false)}>
        <DialogHeader>
          <DialogTitle>Enroll in {courseName || "Course"}</DialogTitle>
          <DialogDescription>
            Fill out the form below to enroll.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} />
          </div>
          
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" value={formData.message} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="course">Course</Label>
            <CourseSelector onSelect={(course: string) => setFormData((prev) => ({ ...prev, courseName: course }))} />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Enrollment"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}