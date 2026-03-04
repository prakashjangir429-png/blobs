'use client'

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import {
    ArrowRight,
    Briefcase,
    Users,
    MapPin,
    Clock,
    DollarSign,
    Heart,
    GraduationCap,
    Coffee,
    Gift,
    Globe,
    Laptop,
    Calendar,
    Target,
    Award,
    TrendingUp,
    Rocket,
    Sparkles,
    Zap,
    CheckCircle2,
    ChevronRight,
    Star,
    BookOpen,
    Code,
    Palette,
    Megaphone,
    PenTool,
    BarChart3,
    Mail,
    Phone,
    Linkedin,
    Twitter,
    Github,
    Dribbble,
    MessageCircle,
    FileText,
    Upload,
    X,
    Menu,
    ChevronDown,
    Search,
    Filter,
    Building2,
    Users2,
    Crown,
    Medal,
    Trophy,
    HeartHandshake,
    Leaf,
    Sun,
    Moon,
    Wifi,
    Home,
    Plane,
    Utensils,
    Dumbbell,
    Music,
    Gamepad,
    Book,
    Camera,
    Video,
    Headphones,
    Smartphone,
    Tablet,
    Monitor,
    Scan,
    Copy,
    Clipboard,
    Pen,
    Pencil,
    Eraser,
    Brush,
    PaintBucket,
    Paintbrush,
    SwatchBook,
    DraftingCompass,
    Compass,
    Ruler,
    Scale,
    Calculator,
    Calendar as CalendarIcon,
    Clock as ClockIcon,
    AlarmClock,
    Timer,
    Stopwatch,
    Hourglass,
    Bell,
    BellRing,
    AlertCircle,
    AlertTriangle,
    Info,
    HelpCircle,
    Quote,
    AtSign,
    Hash,
    Plus,
    Minus,
    Equal,
    Percent,
    Infinity,
    Sigma,
    Pi,
    Square,
    Circle,
    Triangle,
    Hexagon,
    Octagon,
    Pentagon,
    Rectangle,
    Diamond,
    Gem,
    Crown as CrownIcon,
    Sparkle,
    Sparkles as SparklesIcon,
    Stars,
    Star as StarIcon,
    StarHalf,
    Award as AwardIcon,
    Medal as MedalIcon,
    Trophy as TrophyIcon,
    Ribbon,
    Badge,
    BadgeCheck,
    BadgeInfo,
    BadgePercent,
    BadgeDollarSign,
    BadgeEuro,
    BadgePoundSterling,
    BadgeJapaneseYen,
    BadgeIndianRupee,
    BadgeRussianRuble,
    BadgeKoreanWon,
    BadgeSwissFranc,
    BadgeBitcoin,
    BadgeEthereum,
    ExternalLink,
    ChevronLeft,
    ChevronRight as ChevronRightIcon,
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    Minimize,
    Settings,
    User,
    UserPlus,
    UserCheck,
    UserX,
    UserMinus,
    Users as UsersIcon,
    UserCircle,
    UserCog,
    UserSearch,
    UserRound,
    UserRoundPlus,
    UserRoundCheck,
    UserRoundX,
    UserRoundMinus,
    UserRoundCog,
    UserRoundSearch,
    UsersRound,
    Users2 as Users2Icon,
    UsersRound as UsersRoundIcon
} from 'lucide-react'

// --- Data ---

const statsData = [
    { number: 55, label: 'Team Members', suffix: '+', icon: Users, description: 'Growing fast' },
    { number: 15, label: 'Departments', suffix: '', icon: Building2, description: 'Diverse roles' },
    { number: 12, label: 'Open Positions', suffix: '', icon: Briefcase, description: 'Join us today' },
    { number: 25, label: 'Nationalities', suffix: '+', icon: Globe, description: 'Global team' }
]

const benefits = [
    {
        category: "Health & Wellness",
        icon: Heart,
        color: "from-red-500 to-pink-500",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
            { title: "Comprehensive Health Insurance", description: "Medical, dental, and vision coverage for you and your family" },
            { title: "Mental Health Support", description: "Free counseling sessions and wellness programs" },
            { title: "Gym Membership", description: "Fully subsidized gym membership at premium fitness centers" },
            { title: "Annual Health Check-ups", description: "Comprehensive health screenings every year" }
        ]
    },
    {
        category: "Financial Benefits",
        icon: DollarSign,
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50",
        textColor: "text-green-600",
        items: [
            { title: "Competitive Salary", description: "Top-tier compensation packages with regular reviews" },
            { title: "Performance Bonuses", description: "Quarterly and annual bonuses based on achievements" },
            { title: "401(k) Matching", description: "6% company match on retirement contributions" },
            { title: "Stock Options", description: "Equity grants for all full-time employees" }
        ]
    },
    {
        category: "Work-Life Balance",
        icon: Coffee,
        color: "from-orange-500 to-amber-500",
        bgColor: "bg-orange-50",
        textColor: "text-orange-600",
        items: [
            { title: "Remote-First Culture", description: "Work from anywhere - home, office, or anywhere in between" },
            { title: "Flexible Hours", description: "Choose your schedule, focus on output not hours" },
            { title: "Unlimited PTO", description: "Take time off when you need it - no questions asked" },
            { title: "Paid Parental Leave", description: "16 weeks for primary caregivers, 8 weeks for secondary" }
        ]
    },
    {
        category: "Learning & Growth",
        icon: GraduationCap,
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-50",
        textColor: "text-blue-600",
        items: [
            { title: "Learning Budget", description: "$2,000 annually for courses, conferences, and books" },
            { title: "Mentorship Program", description: "One-on-one guidance from senior leaders" },
            { title: "Career Development", description: "Clear growth tracks and promotion pathways" },
            { title: "Certification Support", description: "Full sponsorship for professional certifications" }
        ]
    },
    {
        category: "Perks & Culture",
        icon: Gift,
        color: "from-purple-500 to-violet-500",
        bgColor: "bg-purple-50",
        textColor: "text-purple-600",
        items: [
            { title: "Team Retreats", description: "Quarterly offsites and annual international company trip" },
            { title: "Home Office Setup", description: "$1,500 budget for your ideal home office" },
            { title: "Birthday Leave", description: "Extra day off to celebrate your birthday" },
            { title: "Wellness Days", description: "Company-wide mental health days off" }
        ]
    },
    {
        category: "Tech & Tools",
        icon: Laptop,
        color: "from-cyan-500 to-teal-500",
        bgColor: "bg-cyan-50",
        textColor: "text-cyan-600",
        items: [
            { title: "Latest MacBook Pro", description: "Fully loaded with your choice of specs" },
            { title: "Software Licenses", description: "All the tools you need - JetBrains, Figma, Adobe" },
            { title: "High-Speed Internet", description: "Monthly internet stipend included" },
            { title: "Ergonomic Setup", description: "Standing desk, ergonomic chair, and accessories" }
        ]
    }
]

const departments = [
    {
        name: "Engineering",
        icon: Code,
        color: "from-blue-500 to-cyan-500",
        openPositions: 8,
        description: "Build scalable, innovative solutions using cutting-edge technology",
        roles: ["Frontend", "Backend", "Full Stack", "DevOps", "Mobile", "QA"]
    },
    {
        name: "Design",
        icon: Palette,
        color: "from-purple-500 to-pink-500",
        openPositions: 4,
        description: "Create beautiful, intuitive experiences that users love",
        roles: ["UI Design", "UX Design", "Product Design", "Graphic Design", "Motion Design"]
    },
    {
        name: "Product",
        icon: Target,
        color: "from-orange-500 to-red-500",
        openPositions: 3,
        description: "Drive product strategy and deliver value to customers",
        roles: ["Product Manager", "Product Owner", "Product Analyst", "Technical PM"]
    },
    {
        name: "Marketing",
        icon: Megaphone,
        color: "from-green-500 to-emerald-500",
        openPositions: 4,
        description: "Tell our story and connect with audiences worldwide",
        roles: ["Content Marketing", "SEO", "Social Media", "Email Marketing", "Brand Marketing"]
    },
    {
        name: "Sales",
        icon: TrendingUp,
        color: "from-yellow-500 to-amber-500",
        openPositions: 5,
        description: "Build relationships and drive business growth",
        roles: ["Enterprise Sales", "Account Executive", "Sales Development", "Customer Success"]
    },
    {
        name: "Customer Success",
        icon: Users,
        color: "from-indigo-500 to-blue-500",
        openPositions: 3,
        description: "Ensure our clients achieve their goals with our solutions",
        roles: ["Customer Success Manager", "Technical Support", "Account Manager"]
    },
    {
        name: "Data & AI",
        icon: BarChart3,
        color: "from-rose-500 to-pink-500",
        openPositions: 4,
        description: "Harness the power of data and artificial intelligence",
        roles: ["Data Scientist", "ML Engineer", "Data Analyst", "Data Engineer"]
    },
    {
        name: "Operations",
        icon: Settings,
        color: "from-slate-500 to-gray-500",
        openPositions: 2,
        description: "Keep our business running smoothly and efficiently",
        roles: ["Operations Manager", "Project Manager", "Business Analyst", "HR Generalist"]
    }
]

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
        icon: Code,
        color: "from-blue-500 to-cyan-500",
        description: "We're looking for an experienced Full Stack Developer to lead complex web applications and mentor junior developers. You'll work with modern technologies and help shape our technical direction.",
        requirements: [
            "5+ years of experience with React and Node.js",
            "Strong understanding of TypeScript and modern JavaScript",
            "Experience with cloud platforms (AWS/Azure/GCP)",
            "Excellent problem-solving and communication skills",
            "Experience with microservices architecture",
            "Knowledge of database design and optimization"
        ],
        responsibilities: [
            "Lead development of full-stack features",
            "Mentor junior and mid-level developers",
            "Architect scalable solutions",
            "Collaborate with product and design teams"
        ]
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
        icon: Palette,
        color: "from-purple-500 to-pink-500",
        description: "Lead our design team in creating exceptional user experiences for enterprise products. You'll define design strategy and elevate our design culture.",
        requirements: [
            "6+ years of product design experience",
            "Strong portfolio demonstrating complex problem-solving",
            "Experience with design systems and Figma",
            "Leadership and mentoring abilities",
            "User research and testing experience",
            "Excellent visual and interaction design skills"
        ],
        responsibilities: [
            "Lead design projects from concept to launch",
            "Build and maintain our design system",
            "Mentor junior designers",
            "Collaborate with product and engineering"
        ]
    },
    {
        id: 3,
        title: "DevOps Engineer",
        department: "Engineering",
        location: "Remote / London",
        type: "Full-time",
        experience: "3+ years",
        salary: "$90k - $130k",
        posted: "1 week ago",
        icon: Code,
        color: "from-green-500 to-emerald-500",
        description: "Build and maintain our cloud infrastructure, ensuring high availability and scalability. You'll optimize our deployment processes and improve system reliability.",
        requirements: [
            "3+ years of DevOps experience",
            "Strong knowledge of Docker and Kubernetes",
            "Experience with CI/CD pipelines",
            "Infrastructure as Code (Terraform, CloudFormation)",
            "Monitoring and observability tools",
            "Cloud platforms (AWS/GCP/Azure)"
        ],
        responsibilities: [
            "Manage cloud infrastructure",
            "Automate deployment processes",
            "Monitor system performance",
            "Implement security best practices"
        ]
    },
    {
        id: 4,
        title: "Product Manager",
        department: "Product",
        location: "Remote / Austin",
        type: "Full-time",
        experience: "4+ years",
        salary: "$110k - $150k",
        posted: "5 days ago",
        icon: Target,
        color: "from-orange-500 to-red-500",
        description: "Drive product strategy and execution for our core platform features. You'll work closely with engineering, design, and stakeholders to deliver value.",
        requirements: [
            "4+ years of product management experience",
            "Strong analytical and strategic thinking",
            "Experience with agile methodologies",
            "Excellent communication and stakeholder management",
            "Technical background preferred",
            "Data-driven decision making"
        ],
        responsibilities: [
            "Define product strategy and roadmap",
            "Gather and prioritize requirements",
            "Work with engineering and design",
            "Track and measure success metrics"
        ]
    },
    {
        id: 5,
        title: "Frontend Developer",
        department: "Engineering",
        location: "Remote / Toronto",
        type: "Full-time",
        experience: "2+ years",
        salary: "$80k - $110k",
        posted: "1 week ago",
        icon: Code,
        color: "from-blue-500 to-indigo-500",
        description: "Build responsive and performant user interfaces for our web applications. You'll work with modern frameworks and create exceptional user experiences.",
        requirements: [
            "2+ years of frontend development experience",
            "Strong proficiency in React and modern CSS",
            "Understanding of web performance optimization",
            "Eye for design and attention to detail",
            "Experience with TypeScript",
            "Knowledge of testing frameworks"
        ],
        responsibilities: [
            "Develop new user-facing features",
            "Optimize applications for performance",
            "Collaborate with designers",
            "Write clean, maintainable code"
        ]
    },
    {
        id: 6,
        title: "Marketing Manager",
        department: "Marketing",
        location: "Remote / Chicago",
        type: "Full-time",
        experience: "4+ years",
        salary: "$90k - $120k",
        posted: "3 days ago",
        icon: Megaphone,
        color: "from-pink-500 to-rose-500",
        description: "Lead our marketing initiatives and grow our brand presence globally. You'll develop and execute comprehensive marketing strategies.",
        requirements: [
            "4+ years of B2B marketing experience",
            "Strong content strategy and creation skills",
            "Experience with digital marketing channels",
            "Data-driven approach to marketing",
            "Team leadership experience",
            "Excellent communication skills"
        ],
        responsibilities: [
            "Develop marketing strategies",
            "Manage content creation",
            "Lead marketing campaigns",
            "Analyze and report on performance"
        ]
    },
    {
        id: 7,
        title: "Data Scientist",
        department: "Data & AI",
        location: "Remote / Seattle",
        type: "Full-time",
        experience: "3+ years",
        salary: "$115k - $155k",
        posted: "4 days ago",
        icon: BarChart3,
        color: "from-rose-500 to-pink-500",
        description: "Apply machine learning and statistical analysis to solve complex business problems. You'll work with large datasets and build predictive models.",
        requirements: [
            "3+ years of data science experience",
            "Strong Python and SQL skills",
            "Experience with ML frameworks (TensorFlow, PyTorch)",
            "Statistical analysis expertise",
            "Data visualization skills",
            "Business acumen"
        ],
        responsibilities: [
            "Build and deploy ML models",
            "Analyze complex datasets",
            "Communicate insights to stakeholders",
            "Collaborate with engineering teams"
        ]
    },
    {
        id: 8,
        title: "Customer Success Manager",
        department: "Customer Success",
        location: "Remote / Miami",
        type: "Full-time",
        experience: "3+ years",
        salary: "$70k - $95k",
        posted: "1 week ago",
        icon: Users,
        color: "from-indigo-500 to-blue-500",
        description: "Ensure our clients achieve their goals and maximize value from our platform. You'll build strong relationships and drive customer satisfaction.",
        requirements: [
            "3+ years of customer success experience",
            "Excellent communication skills",
            "Problem-solving mindset",
            "Technical aptitude",
            "Experience with SaaS products",
            "CRM proficiency"
        ],
        responsibilities: [
            "Manage client relationships",
            "Drive product adoption",
            "Handle customer inquiries",
            "Identify growth opportunities"
        ]
    }
]

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Senior Developer",
        image: "https://images.unsplash.com/photo-1494790108777-223d9b3c1e3b",
        quote: "The best workplace I've ever been part of. Great culture, amazing colleagues, and real growth opportunities.",
        rating: 5,
        joined: "2020",
        department: "Engineering"
    },
    {
        name: "Michael Chen",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        quote: "Incredible autonomy and trust. I get to work on challenging problems with supportive teammates.",
        rating: 5,
        joined: "2019",
        department: "Product"
    },
    {
        name: "Emily Rodriguez",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        quote: "The design culture here is amazing. We're encouraged to innovate and push boundaries.",
        rating: 5,
        joined: "2021",
        department: "Design"
    },
    {
        name: "David Kim",
        role: "DevOps Engineer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        quote: "Working with cutting-edge technology and solving complex infrastructure challenges every day.",
        rating: 5,
        joined: "2022",
        department: "Engineering"
    }
]

const processSteps = [
    {
        step: 1,
        title: "Application Review",
        description: "Submit your application and our talent team reviews your profile and experience.",
        icon: FileText,
        duration: "2-3 days"
    },
    {
        step: 2,
        title: "Initial Screen",
        description: "30-minute video call to discuss your background, interests, and the role.",
        icon: Phone,
        duration: "30 mins"
    },
    {
        step: 3,
        title: "Technical Assessment",
        description: "Role-specific technical interview or take-home project to showcase your skills.",
        icon: Code,
        duration: "1-2 hours"
    },
    {
        step: 4,
        title: "Team Interview",
        description: "Meet the team and dive deep into collaboration, culture, and problem-solving.",
        icon: Users,
        duration: "1 hour"
    },
    {
        step: 5,
        title: "Leadership Chat",
        description: "Final conversation with leadership to align on vision and expectations.",
        icon: Crown,
        duration: "45 mins"
    },
    {
        step: 6,
        title: "Offer & Onboarding",
        description: "Receive your offer and begin your journey with comprehensive onboarding.",
        icon: Rocket,
        duration: "Rolling"
    }
]

const faqs = [
    {
        question: "What is your remote work policy?",
        answer: "We're a remote-first company with team members across the globe. You can work from anywhere, though some roles may have location requirements for time zone alignment."
    },
    {
        question: "How does the interview process work?",
        answer: "Our process typically includes an initial screen, technical assessment, team interviews, and a leadership conversation. We aim to complete it within 2-3 weeks."
    },
    {
        question: "What are the career growth opportunities?",
        answer: "We have clear career tracks for both individual contributors and managers. Regular reviews, mentorship programs, and learning budgets support your growth."
    },
    {
        question: "Do you offer internships?",
        answer: "Yes! We have internship programs throughout the year. Check our openings page or reach out to learn about upcoming opportunities."
    },
    {
        question: "What's your tech stack?",
        answer: "We use modern technologies including React, Node.js, Python, AWS, Kubernetes, and more. Specific stacks vary by team and project."
    },
    {
        question: "How do you support work-life balance?",
        answer: "We offer flexible hours, unlimited PTO, wellness days, and encourage a healthy work-life integration. Results matter more than hours logged."
    }
]

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

export default function CareersPage() {
    const [selectedDepartment, setSelectedDepartment] = useState<string>("All")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedJob, setSelectedJob] = useState<number | null>(null)
    const [showJobModal, setShowJobModal] = useState(false)
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

    // Filter positions
    const filteredPositions = openPositions.filter(position => {
        const matchesDepartment = selectedDepartment === "All" || position.department === selectedDepartment
        const matchesSearch = position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            position.description.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesDepartment && matchesSearch
    })

    // Department counts
    const departmentCounts = departments.reduce((acc, dept) => {
        acc[dept.name] = dept.openPositions
        return acc
    }, {} as Record<string, number>)

    // Auto-play testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">

            {/* --- Hero Section with Parallax --- */}
            <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.4) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </motion.div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 shadow-sm mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">We're Hiring • 12 Open Positions</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
                        >
                            Shape the Future{' '}
                            <span className="relative">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    With Us
                                </span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                    className="absolute bottom-2 left-0 h-3 bg-blue-200/50 -z-10"
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto"
                        >
                            Join a team of passionate innovators building technology that matters.
                            We're looking for talented individuals who want to make a difference.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#openings"
                                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-blue-500/30 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Openings
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                                        initial={{ x: '100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#culture"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 border-2 border-gray-200 font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 group"
                                >
                                    Learn About Culture
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Trust Signals */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-12 flex flex-wrap items-center justify-center gap-8"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.8 + i * 0.1 }}
                                            className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white"
                                        >
                                            {String.fromCharCode(64 + i)}
                                        </motion.div>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">
                                    <span className="font-bold text-gray-900">50+</span> team members
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">
                                    <span className="font-bold text-gray-900">4.9</span> Glassdoor rating
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-500">
                                    <span className="font-bold text-gray-900">25+</span> countries
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center">
                        <div className="w-1 h-2 bg-blue-500 rounded-full mt-2" />
                    </div>
                </motion.div>
            </section>

            {/* --- Stats Section --- */}
            <section className="py-16 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {statsData.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-gray-900 mb-2">
                                    {stat.number}{stat.suffix}
                                </div>
                                <div className="text-sm font-semibold text-gray-600 mb-1">{stat.label}</div>
                                <div className="text-xs text-gray-400">{stat.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Why Join Us / Benefits Section --- */}
            <section id="culture" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Why Join Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Benefits That{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Matter
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We take care of our team so you can focus on doing your best work
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <category.icon className={`w-6 h-6 ${category.textColor}`} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                                    </div>

                                    {/* Benefits List */}
                                    <div className="space-y-3">
                                        {category.items.map((item, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className={`w-4 h-4 ${category.textColor} mt-0.5 flex-shrink-0`} />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{item.title}</p>
                                                    <p className="text-xs text-gray-500">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Departments Section --- */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Our Teams
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Explore{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Departments
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Find your place in one of our innovative teams
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {departments.map((dept, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group cursor-pointer"
                                onClick={() => {
                                    setSelectedDepartment(dept.name)
                                    document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                    {/* Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    {/* Icon */}
                                    <div className={`w-14 h-14 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <dept.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{dept.description}</p>

                                    {/* Open Positions Badge */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-600">
                                            {dept.openPositions} open positions
                                        </span>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </div>

                                    {/* Roles Tags */}
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex flex-wrap gap-2">
                                            {dept.roles.slice(0, 3).map((role, i) => (
                                                <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                                                    {role}
                                                </span>
                                            ))}
                                            {dept.roles.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                                                    +{dept.roles.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Open Positions Section --- */}
            <section id="openings" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Join Our Team
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Open{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Positions
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Find the role that matches your skills and aspirations
                        </p>
                    </motion.div>

                    {/* Search and Filter */}
                    <div className="mb-8 flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search positions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            />
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="w-full md:w-auto px-6 py-3 bg-white border border-gray-200 rounded-xl flex items-center gap-2 hover:border-blue-500 transition-colors"
                            >
                                <Filter className="w-5 h-5 text-gray-500" />
                                <span className="text-gray-700">
                                    {selectedDepartment === "All" ? "All Departments" : selectedDepartment}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Filter Dropdown */}
                            <AnimatePresence>
                                {isFilterOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-20"
                                    >
                                        <div className="p-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedDepartment("All")
                                                    setIsFilterOpen(false)
                                                }}
                                                className={`w-full text-left px-4 py-2 rounded-lg text-sm ${selectedDepartment === "All"
                                                        ? 'bg-blue-50 text-blue-600'
                                                        : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                            >
                                                All Departments
                                            </button>
                                            {departments.map((dept) => (
                                                <button
                                                    key={dept.name}
                                                    onClick={() => {
                                                        setSelectedDepartment(dept.name)
                                                        setIsFilterOpen(false)
                                                    }}
                                                    className={`w-full text-left px-4 py-2 rounded-lg text-sm flex items-center justify-between ${selectedDepartment === dept.name
                                                            ? 'bg-blue-50 text-blue-600'
                                                            : 'text-gray-700 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    <span>{dept.name}</span>
                                                    <span className="text-xs text-gray-400">{dept.openPositions}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Positions Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredPositions.map((position, idx) => (
                            <motion.div
                                key={position.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group cursor-pointer"
                                onClick={() => {
                                    setSelectedJob(position.id)
                                    setShowJobModal(true)
                                }}
                            >
                                <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                    {/* Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${position.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center`}>
                                            <position.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-xs text-gray-400">{position.posted}</span>
                                    </div>

                                    {/* Title & Department */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {position.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">{position.department}</p>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                        {position.description}
                                    </p>

                                    {/* Details */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <MapPin className="w-4 h-4 text-gray-400" />
                                            {position.location}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Clock className="w-4 h-4 text-gray-400" />
                                            {position.type}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Briefcase className="w-4 h-4 text-gray-400" />
                                            {position.experience}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <DollarSign className="w-4 h-4 text-gray-400" />
                                            {position.salary}
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {position.requirements.slice(0, 2).map((req, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                                                {req.split(' ').slice(0, 3).join(' ')}...
                                            </span>
                                        ))}
                                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredPositions.length === 0 && (
                        <div className="text-center py-12">
                            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </section>

            {/* --- Job Details Modal --- */}
            <AnimatePresence>
                {showJobModal && selectedJob && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setShowJobModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {openPositions.filter(p => p.id === selectedJob).map((position) => (
                                <div key={position.id} className="p-8">
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setShowJobModal(false)}
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                    >
                                        <X className="w-5 h-5 text-gray-600" />
                                    </button>

                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center`}>
                                            <position.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h2>
                                            <p className="text-gray-500">{position.department}</p>
                                        </div>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
                                        <div className="flex items-center gap-2 text-sm">
                                            <MapPin className="w-4 h-4 text-gray-400" />
                                            <span className="text-gray-700">{position.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Clock className="w-4 h-4 text-gray-400" />
                                            <span className="text-gray-700">{position.type}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Briefcase className="w-4 h-4 text-gray-400" />
                                            <span className="text-gray-700">{position.experience}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <DollarSign className="w-4 h-4 text-gray-400" />
                                            <span className="text-gray-700">{position.salary}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">About the Role</h3>
                                        <p className="text-gray-600 leading-relaxed">{position.description}</p>
                                    </div>

                                    {/* Requirements */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">Requirements</h3>
                                        <ul className="space-y-2">
                                            {position.requirements.map((req, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Responsibilities */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">Responsibilities</h3>
                                        <ul className="space-y-2">
                                            {position.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Apply Button */}
                                    <Link
                                        href={`/careers/apply/${position.id}`}
                                        className="block w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl text-center hover:shadow-lg transition-shadow"
                                    >
                                        Apply for this Position
                                    </Link>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Hiring Process Section --- */}
            <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Our Process
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            How We{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Hire
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A transparent and thoughtful process designed to find the best fit
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 hidden lg:block" />

                        <div className="grid lg:grid-cols-6 gap-6">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="text-center">
                                        {/* Step Circle */}
                                        <div className="relative mb-4">
                                            <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20">
                                                <step.icon className="w-8 h-8 text-white" />
                                            </div>

                                            {/* Step Number */}
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold">
                                                {step.step}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-400 mb-2">{step.description}</p>
                                        <span className="text-xs text-blue-400 font-medium">{step.duration}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Employee Testimonials --- */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Voices
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Team Says
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Real stories from the people who make it happen
                        </p>
                    </motion.div>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Testimonials Carousel */}
                        <div className="overflow-hidden">
                            <motion.div
                                animate={{ x: `-${activeTestimonial * 100}%` }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="flex"
                            >
                                {testimonials.map((testimonial, idx) => (
                                    <div key={idx} className="w-full flex-shrink-0 px-4">
                                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                            {/* Quote Icon */}
                                            <Quote className="w-10 h-10 text-blue-200 mb-4" />

                                            {/* Quote */}
                                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                                "{testimonial.quote}"
                                            </p>

                                            {/* Author */}
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <div className="flex">
                                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-gray-400">Joined {testimonial.joined}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTestimonial(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTestimonial === idx
                                            ? 'w-8 bg-blue-600'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAQ Section --- */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Got Questions?
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Frequently Asked{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Questions
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Everything you need to know about working with us
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const [isOpen, setIsOpen] = useState(false)

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                                    >
                                        <span className="font-medium text-gray-900">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-4 text-gray-600">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* --- Life at True Value Section --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Life at True Value
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            More Than Just{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Work
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A glimpse into our culture and what makes us special
                        </p>
                    </motion.div>

                    {/* Image Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=800&q=80`}
                                    alt={`Life at True Value ${i}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )}