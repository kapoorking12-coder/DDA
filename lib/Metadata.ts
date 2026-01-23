export const courses = [
  {
    id: 1,
    title: "Fast Track Diploma in Interior Design",
    shortDesc: "Learn the fundamentals of interior design.",
    fullDesc: "This course covers color theory, space planning, basic principles, and more. Perfect for beginners.",
    duration: "6 Months",
    redirectsTo: "/courses/interior-design-basics",
    image: "/images/interior_design_thumbnail.jpg"
  },
  {
    id: 2,
    title: "Diploma in Interior Architecture Design",
    shortDesc: "Master advanced techniques in color and lighting.",
    fullDesc: "Dive deep into color palettes, lighting design, and creating stunning interiors with professional techniques.",
    duration: "1 Year",
    redirectsTo: "/courses/interior-design-basics",
    image: "/images/interior_architecture_thumbnail.jpg"
  },
  {
    id: 3,
    title: "Advanced Diploma in Interior Architecture Design",
    shortDesc: "Explore eco-friendly materials and practices.",
    fullDesc: "Learn about sustainable design practices, eco-friendly materials, and creating green interiors.",
    duration: "2 years",
    redirectsTo: "/courses/interior-design-basics",
    image: "/images/advanced_interior_architecture_thumbnail.jpg"
  },
  {
    id: 4,
    title: "Advanced Diploma in Kitchen and Furniture Design",
    shortDesc: "Explore eco-friendly materials and practices.",
    fullDesc: "Learn about sustainable design practices, eco-friendly materials, and creating green interiors.",
    duration: "6 Months",
    redirectsTo: "/courses/interior-design-basics",
    image: "/images/kitchen_furniture_thumbnail.jpg"
  },
  {
    id: 5,
    title: "Advanced Diploma in Interior Styling",
    shortDesc: "Explore eco-friendly materials and practices.",
    fullDesc: "Learn about sustainable design practices, eco-friendly materials, and creating green interiors.",
    duration: "6 Months",
    redirectsTo: "/courses/interior-design-basics",
    image: "/images/interior_styling_thumbnail.jpg"
  },
  {
    id: 6,
    title: "Diploma in Luxury Interior Design",
    shortDesc: "Explore eco-friendly materials and practices.",
    fullDesc: "Learn about sustainable design practices, eco-friendly materials, and creating green interiors.",
    duration: "6 Months",
    redirectsTo: "/courses/interior-design-basics",
    image: "/images/luxury_interior_design_thumbnail.jpg"
  },
  {
    id: 7,
    title: "3D Interior Visualisation Course",
    shortDesc: "Explore eco-friendly materials and practices.",
    fullDesc: "Learn about sustainable design practices, eco-friendly materials, and creating green interiors.",
    duration: "6 Months",
    redirectsTo: "/courses/interior-design-basics",
    image: "/images/3d_visualisation_thumbnail.jpg"
  },
  {
    id: 8,
    title: "Advanced Rendering and real time visualisation",
    shortDesc: "Explore eco-friendly materials and practices.",
    fullDesc: "Learn about sustainable design practices, eco-friendly materials, and creating green interiors.",
    duration: "8 Months",
    redirectsTo: "/courses/interior-design-basics"  ,
    image: "/images/advanced_rendering_thumbnail.jpg"
  }
];


export const featuredFaculty = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Senior Interior Design Professor",
    bio: "Expert in modern interior design with 15+ years of experience.",
    image: "/images/untitled-1.jpg"
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Sustainable Design Specialist",
    bio: "Renowned for sustainable design practices worldwide.",
    image: "/images/untitled-1.jpg"
  },
  {
    id: 3,
    name: "Ms. Emily Davis",
    title: "Color Theory and Lighting Expert",
    bio: "Specialist in color theory and innovative lighting design.",
    image: "/images/untitled-1.jpg"
  }
];

export const whyUsItems = [
  {
    id: 1,
    icon: "👨‍🏫",
    title: "Expert Faculty",
    description: "Learn from industry-leading designers with decades of experience."
  },
  {
    id: 2,
    icon: "💡",
    title: "Innovative Curriculum",
    description: "Stay ahead with cutting-edge design techniques and tools."
  },
  {
    id: 3,
    icon: "🌍",
    title: "Global Community",
    description: "Connect with students and professionals from around the world."
  },
  {
    id: 4,
    icon: "🎓",
    title: "Flexible Learning",
    description: "Study at your own pace with 24/7 access to course materials."
  },
  {
    id: 5,
    icon: "🏆",
    title: "Industry Recognition",
    description: "Our graduates work at top design firms worldwide."
  },
  {
    id: 6,
    icon: "💰",
    title: "Affordable Education",
    description: "Quality design education at prices that won't break the bank."
  },
  {
    id: 7,
    icon: "📱",
    title: "Modern Platform",
    description: "Intuitive online platform with interactive tools and resources."
  },
  {
    id: 8,
    icon: "🤝",
    title: "Personal Support",
    description: "Dedicated mentors and support team to guide your journey."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Riya Sharma",
    fullReview: "The online program at Delhi Design Academy gave me the confidence to start my interior design career. The mentors were supportive and industry-focused, and the practical assignments helped me build a strong portfolio.",
    image: "",
    rating: 5,
    courseTaken: "Fast Track Diploma in Interior Design ",
  },
  {
    id: 2,
    name: "Aman Verma",
    fullReview: "What I loved most was the hands-on approach. From residential layouts to 3D designs, every project felt real and industry-relevant.",
    image: "",
    rating: 5,
    courseTaken: "Diploma in Luxury Interior Design ",
  },
  {
    id: 3,
    name: "Rohit Mehta",
    fullReview: "Delhi Design Academy helped me transition from a beginner to a confident designer. The working drawings and 3D modules were especially valuable",
    image: "",
    rating: 5,
    courseTaken: "•	Diploma in Interior Architecture Design",
  },
  {
    id: 4,
    name: "Pooja Singh",
    fullReview: "The mentors truly focus on student growth. The guidance I received helped me start taking freelance interior projects confidently.",
    image: "",
    rating: 5,
    courseTaken: "Fast Track Diploma in Interior Design ",
  }
];

export type Testimonial = typeof testimonials[0];