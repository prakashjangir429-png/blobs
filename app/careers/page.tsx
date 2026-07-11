// app/careers/page.tsx
import { Metadata } from "next";
import CareersClient from "@/components/pages/Careers";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Careers | Join Our Team | Work at Digitonix - Leading IT Company";
  const description =
    "Join Digitonix and build your career with India's leading IT company. Explore job openings in engineering, design, product, marketing & more. Competitive salary, remote work, great benefits. Apply now!";
  
  const url = "https://www.digitonix.in/careers";
  const image = "https://www.digitonix.in/log.png";

  return {
    metadataBase: new URL("https://www.digitonix.in"),
    title,
    description,
    keywords: [
      "careers at Digitonix",
      "jobs at Digitonix",
      "work at Digitonix",
      "IT jobs Jaipur",
      "software developer jobs",
      "web developer jobs",
      "mobile app developer jobs",
      "UI UX designer jobs",
      "digital marketing jobs",
      "DevOps engineer jobs",
      "data scientist jobs",
      "product manager jobs",
      "IT company careers India",
      "remote IT jobs",
      "tech jobs India",
      "software engineering jobs",
      "frontend developer jobs",
      "backend developer jobs",
      "full stack developer jobs",
      "React developer jobs",
      "Node.js developer jobs",
      "Python developer jobs",
      "Flutter developer jobs",
      "join IT company",
      "tech careers India",
      "best IT company to work for",
      "IT company benefits",
      "remote work IT jobs",
      "flexible work IT jobs",
      "IT internship opportunities",
      "fresher IT jobs",
      "experienced IT jobs",
      "Digitonix hiring",
      "IT company recruitment",
      "technology careers",
      "software company jobs",
      "IT services company jobs",
    ],
    authors: [{ name: "Digitonix", url: "https://www.digitonix.in" }],
    creator: "Digitonix",
    publisher: "Digitonix",
    category: "Careers",

    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: "Careers at Digitonix | Join Our Team of Innovators",
      description,
      siteName: "Digitonix",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Careers at Digitonix - Join India's Leading IT Company",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Careers | Digitonix - We're Hiring!",
      description,
      creator: "@digitonix",
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: url,
    },

    other: {
      "theme-color": "#0F172A",
    },
  };
}

export default function CareersPage() {
  // Server-side data
  const statsData = [
    { number: 55, label: "Team Members", suffix: "+", icon: "Users", description: "Growing fast" },
    { number: 15, label: "Departments", suffix: "", icon: "Building2", description: "Diverse roles" },
    { number: 12, label: "Open Positions", suffix: "", icon: "Briefcase", description: "Join us today" },
    { number: 25, label: "Nationalities", suffix: "+", icon: "Globe", description: "Global team" },
  ];

  const benefits = [
    {
      category: "Health & Wellness",
      icon: "Heart",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      items: [
        { title: "Comprehensive Health Insurance", description: "Medical, dental, and vision coverage for you and your family" },
        { title: "Mental Health Support", description: "Free counseling sessions and wellness programs" },
        { title: "Gym Membership", description: "Fully subsidized gym membership at premium fitness centers" },
        { title: "Annual Health Check-ups", description: "Comprehensive health screenings every year" },
      ],
    },
    {
      category: "Financial Benefits",
      icon: "DollarSign",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      items: [
        { title: "Competitive Salary", description: "Top-tier compensation packages with regular reviews" },
        { title: "Performance Bonuses", description: "Quarterly and annual bonuses based on achievements" },
        { title: "401(k) Matching", description: "6% company match on retirement contributions" },
        { title: "Stock Options", description: "Equity grants for all full-time employees" },
      ],
    },
    {
      category: "Work-Life Balance",
      icon: "Coffee",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      items: [
        { title: "Remote-First Culture", description: "Work from anywhere - home, office, or anywhere in between" },
        { title: "Flexible Hours", description: "Choose your schedule, focus on output not hours" },
        { title: "Unlimited PTO", description: "Take time off when you need it - no questions asked" },
        { title: "Paid Parental Leave", description: "16 weeks for primary caregivers, 8 weeks for secondary" },
      ],
    },
    {
      category: "Learning & Growth",
      icon: "GraduationCap",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      items: [
        { title: "Learning Budget", description: "$2,000 annually for courses, conferences, and books" },
        { title: "Mentorship Program", description: "One-on-one guidance from senior leaders" },
        { title: "Career Development", description: "Clear growth tracks and promotion pathways" },
        { title: "Certification Support", description: "Full sponsorship for professional certifications" },
      ],
    },
    {
      category: "Perks & Culture",
      icon: "Gift",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      items: [
        { title: "Team Retreats", description: "Quarterly offsites and annual international company trip" },
        { title: "Home Office Setup", description: "$1,500 budget for your ideal home office" },
        { title: "Birthday Leave", description: "Extra day off to celebrate your birthday" },
        { title: "Wellness Days", description: "Company-wide mental health days off" },
      ],
    },
    {
      category: "Tech & Tools",
      icon: "Laptop",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      items: [
        { title: "Latest MacBook Pro", description: "Fully loaded with your choice of specs" },
        { title: "Software Licenses", description: "All the tools you need - JetBrains, Figma, Adobe" },
        { title: "High-Speed Internet", description: "Monthly internet stipend included" },
        { title: "Ergonomic Setup", description: "Standing desk, ergonomic chair, and accessories" },
      ],
    },
  ];

  const departments = [
    {
      name: "Engineering",
      icon: "Code",
      color: "from-blue-500 to-cyan-500",
      openPositions: 8,
      description: "Build scalable, innovative solutions using cutting-edge technology",
      roles: ["Frontend", "Backend", "Full Stack", "DevOps", "Mobile", "QA"],
    },
    {
      name: "Design",
      icon: "Palette",
      color: "from-purple-500 to-pink-500",
      openPositions: 4,
      description: "Create beautiful, intuitive experiences that users love",
      roles: ["UI Design", "UX Design", "Product Design", "Graphic Design", "Motion Design"],
    },
    {
      name: "Product",
      icon: "Target",
      color: "from-orange-500 to-red-500",
      openPositions: 3,
      description: "Drive product strategy and deliver value to customers",
      roles: ["Product Manager", "Product Owner", "Product Analyst", "Technical PM"],
    },
    {
      name: "Marketing",
      icon: "Megaphone",
      color: "from-green-500 to-emerald-500",
      openPositions: 4,
      description: "Tell our story and connect with audiences worldwide",
      roles: ["Content Marketing", "SEO", "Social Media", "Email Marketing", "Brand Marketing"],
    },
    {
      name: "Sales",
      icon: "TrendingUp",
      color: "from-yellow-500 to-amber-500",
      openPositions: 5,
      description: "Build relationships and drive business growth",
      roles: ["Enterprise Sales", "Account Executive", "Sales Development", "Customer Success"],
    },
    {
      name: "Customer Success",
      icon: "Users",
      color: "from-indigo-500 to-blue-500",
      openPositions: 3,
      description: "Ensure our clients achieve their goals with our solutions",
      roles: ["Customer Success Manager", "Technical Support", "Account Manager"],
    },
    {
      name: "Data & AI",
      icon: "BarChart3",
      color: "from-rose-500 to-pink-500",
      openPositions: 4,
      description: "Harness the power of data and artificial intelligence",
      roles: ["Data Scientist", "ML Engineer", "Data Analyst", "Data Engineer"],
    },
    {
      name: "Operations",
      icon: "Settings",
      color: "from-slate-500 to-gray-500",
      openPositions: 2,
      description: "Keep our business running smoothly and efficiently",
      roles: ["Operations Manager", "Project Manager", "Business Analyst", "HR Generalist"],
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $160k",
      posted: "2 days ago",
      icon: "Code",
      color: "from-blue-500 to-cyan-500",
      description: "We're looking for an experienced Full Stack Developer to lead complex web applications and mentor junior developers.",
      requirements: [
        "5+ years of experience with React and Node.js",
        "Strong understanding of TypeScript and modern JavaScript",
        "Experience with cloud platforms (AWS/Azure/GCP)",
        "Excellent problem-solving and communication skills",
        "Experience with microservices architecture",
        "Knowledge of database design and optimization",
      ],
      responsibilities: [
        "Lead development of full-stack features",
        "Mentor junior and mid-level developers",
        "Architect scalable solutions",
        "Collaborate with product and design teams",
      ],
    },
    {
      id: 2,
      title: "Lead Product Designer",
      department: "Design",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "6+ years",
      salary: "$130k - $170k",
      posted: "3 days ago",
      icon: "Palette",
      color: "from-purple-500 to-pink-500",
      description: "Lead our design team in creating exceptional user experiences for enterprise products.",
      requirements: [
        "6+ years of product design experience",
        "Strong portfolio demonstrating complex problem-solving",
        "Experience with design systems and Figma",
        "Leadership and mentoring abilities",
        "User research and testing experience",
        "Excellent visual and interaction design skills",
      ],
      responsibilities: [
        "Lead design projects from concept to launch",
        "Build and maintain our design system",
        "Mentor junior designers",
        "Collaborate with product and engineering",
      ],
    },
    // Add more positions as needed...
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1494790108777-223d9b3c1e3b",
      quote: "The best workplace I've ever been part of. Great culture, amazing colleagues, and real growth opportunities.",
      rating: 5,
      joined: "2020",
      department: "Engineering",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote: "Incredible autonomy and trust. I get to work on challenging problems with supportive teammates.",
      rating: 5,
      joined: "2019",
      department: "Product",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      quote: "The design culture here is amazing. We're encouraged to innovate and push boundaries.",
      rating: 5,
      joined: "2021",
      department: "Design",
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      quote: "Working with cutting-edge technology and solving complex infrastructure challenges every day.",
      rating: 5,
      joined: "2022",
      department: "Engineering",
    },
  ];

  const processSteps = [
    { step: 1, title: "Application Review", description: "Submit your application and our talent team reviews your profile and experience.", icon: "FileText", duration: "2-3 days" },
    { step: 2, title: "Initial Screen", description: "30-minute video call to discuss your background, interests, and the role.", icon: "Phone", duration: "30 mins" },
    { step: 3, title: "Technical Assessment", description: "Role-specific technical interview or take-home project to showcase your skills.", icon: "Code", duration: "1-2 hours" },
    { step: 4, title: "Team Interview", description: "Meet the team and dive deep into collaboration, culture, and problem-solving.", icon: "Users", duration: "1 hour" },
    { step: 5, title: "Leadership Chat", description: "Final conversation with leadership to align on vision and expectations.", icon: "Crown", duration: "45 mins" },
    { step: 6, title: "Offer & Onboarding", description: "Receive your offer and begin your journey with comprehensive onboarding.", icon: "Rocket", duration: "Rolling" },
  ];

  const faqs = [
    {
      question: "What is your remote work policy?",
      answer: "We're a remote-first company with team members across the globe. You can work from anywhere, though some roles may have location requirements for time zone alignment.",
    },
    {
      question: "How does the interview process work?",
      answer: "Our process typically includes an initial screen, technical assessment, team interviews, and a leadership conversation. We aim to complete it within 2-3 weeks.",
    },
    {
      question: "What are the career growth opportunities?",
      answer: "We have clear career tracks for both individual contributors and managers. Regular reviews, mentorship programs, and learning budgets support your growth.",
    },
    {
      question: "Do you offer internships?",
      answer: "Yes! We have internship programs throughout the year. Check our openings page or reach out to learn about upcoming opportunities.",
    },
    {
      question: "What's your tech stack?",
      answer: "We use modern technologies including React, Node.js, Python, AWS, Kubernetes, and more. Specific stacks vary by team and project.",
    },
    {
      question: "How do you support work-life balance?",
      answer: "We offer flexible hours, unlimited PTO, wellness days, and encourage a healthy work-life integration. Results matter more than hours logged.",
    },
  ];

  // Calculate stats for schema
  const totalOpenPositions = openPositions.length;
  const totalDepartments = departments.length;
  const totalBenefits = benefits.reduce((acc, cat) => acc + cat.items.length, 0);

  // Generate structured data
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.digitonix.in/#organization",
        name: "Digitonix",
        url: "https://www.digitonix.in",
        logo: "https://www.digitonix.in/log.png",
        description: "Digitonix is a leading IT company in Jaipur offering Web Development, Mobile App Development, SEO, Digital Marketing, AI Solutions and Custom Software Development.",
        email: "hello@digitonix.in",
        telephone: "+91-9887120429",
        numberOfEmployees: "55",
        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/company/",
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.digitonix.in/careers",
        url: "https://www.digitonix.in/careers",
        name: "Careers at Digitonix | Join Our Team",
        description: "Join Digitonix and build your career with India's leading IT company. Explore job openings in engineering, design, product, marketing & more. Competitive salary, remote work, great benefits. Apply now!",
        provider: {
          "@id": "https://www.digitonix.in/#organization",
        },
      },
      {
        "@type": "ItemList",
        name: "Open Positions at Digitonix",
        numberOfItems: totalOpenPositions,
        itemListElement: openPositions.map((job, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "JobPosting",
            title: job.title,
            description: job.description,
            datePosted: new Date().toISOString().split('T')[0],
            employmentType: job.type.replace("-", "_").toUpperCase(),
            hiringOrganization: {
              "@id": "https://www.digitonix.in/#organization",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: job.location.split(" / ")[1] || job.location,
                addressCountry: "IN",
              },
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: {
                "@type": "QuantitativeValue",
                minValue: parseInt(job.salary.split(" - ")[0].replace(/[^0-9]/g, "")),
                maxValue: parseInt(job.salary.split(" - ")[1].replace(/[^0-9]/g, "")),
                unitText: "YEAR",
              },
            },
            skills: job.requirements.join(", "),
            qualifications: job.requirements.join(", "),
            responsibilities: job.responsibilities.join(", "),
            experienceRequirements: job.experience,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.digitonix.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Careers",
            item: "https://www.digitonix.in/careers",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Client Component */}
      <CareersClient
        initialData={{
          statsData,
          benefits,
          departments,
          openPositions,
          testimonials,
          processSteps,
          faqs,
          stats: {
            totalOpenPositions,
            totalDepartments,
            totalBenefits,
            teamSize: 55,
            yearsExperience: 13,
            countriesServed: 25,
          },
        }}
      />
    </>
  );
}