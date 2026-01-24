import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EnrollmentData {
  courseName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Configure your email service here
// Using Gmail as an example - you'll need to set up App Password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const data: EnrollmentData = await request.json();

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "delhidesignacademy@gmail.com",
      subject: `New Enrollment: ${data.courseName}`,
      html: `
        <h2>New Course Enrollment</h2>
        <p><strong>Course:</strong> ${data.courseName}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Course:</strong> ${data.courseName}</p>
        <p><strong>Message:</strong> ${data.message || "No message provided"}</p>
      `,
    };

    // Confirmation email to student
    const studentMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: `Enrollment Confirmation - ${data.courseName}`,
      html: `
        <h2>Thank you for enrolling!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your enrollment for <strong>${data.courseName}</strong>.</p>
        <p>We will review your application and get back to you soon.</p>
        <p>Best regards,<br/>Delhi Design Academy</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(studentMailOptions);

    return NextResponse.json(
      { message: "Enrollment email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
