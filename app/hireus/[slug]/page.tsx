// app/hire/[slug]/page.tsx (Server Component)
import hireDevelopersData from "@/data/hireus.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import HireEnquiryForm, { FAQItem } from "./EnquiryForm";
import {
    ArrowUpRight,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    Code2,
    Smartphone,
    Megaphone,
    Palette,
    Cloud,
    Search,
    Target,
    ShoppingBag,
    Apple,
    Phone,
    Box,
    Laptop,
    Monitor,
    Share2,
    PenTool,
    Layout,
    Rocket,
    Clock,
    BadgeCheck,
    Users,
    Star,
    Briefcase,
    Mail,
    MapPin,
    Globe,
    Cpu,
    Shield,
    Trophy,
    TrendingUp,
    Zap,
    Quote,
    ExternalLink,
    Play,
    MessageSquare,
    Headphones,
    Database,
    Server,
    Github,
    Figma,
} from "lucide-react";
import { TechHeroSection } from "@/components/pages/techno";

// Generate metadata for each hire page
export async function generateMetadata({ params }: { params: { slug: string } }) {

    const { slug } = await params

    const dev = hireDevelopersData.developers.find((d) => d.slug == slug);

    if (!dev) {
        return {
            title: "Developer Not Found",
            description: "The developer profile you're looking for doesn't exist.",
        };
    }

    return {
        title: dev.metaTitle,
        description: dev.metaDescription,
        keywords: dev.metaKeywords,
        openGraph: {
            title: dev.ogTitle || dev.metaTitle,
            description: dev.ogDescription || dev.metaDescription,
            type: "website",
        },
        alternates: {
            canonical: `/hireus/${dev.slug}`,
        },
    };
}

export default async function HireDeveloperPage({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const dev = hireDevelopersData.developers.find((d) => d.slug == slug);

    if (!dev) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <TechHeroSection type={"hireus"} tech={dev} />
            <OverviewSection dev={dev} />
            <WhyHireSection dev={dev} />
            <SkillsSection dev={dev} />
            <ProcessSection dev={dev} />
            <EngagementModelsSection dev={dev} />
            <CaseStudiesSection dev={dev} />
            <FAQSection dev={dev} />
            <RelatedTechnologiesSection dev={dev} />
            <EnquirySection dev={dev} />
        </div>
    );
}

// Helper function to get icon component
function getIconComponent(iconName: string) {
    const iconMap: Record<string, any> = {
        Code2,
        Smartphone,
        Megaphone,
        Palette,
        Cloud,
        Search,
        Target,
        ShoppingBag,
        Apple,
        Phone,
        Box,
        Laptop,
        Monitor,
        Share2,
        PenTool,
        Layout,
        Rocket,
        Clock,
        BadgeCheck,
        Users,
        Star,
        Briefcase,
        Mail,
        MapPin,
        Globe,
        Cpu,
        Shield,
        Trophy,
        TrendingUp,
        Zap,
        Quote,
        ExternalLink,
        Play,
        MessageSquare,
        Headphones,
        Database,
        Server,
        Github,
        Figma,
    };
    return iconMap[iconName] || Code2;
}

// Hero Section
function HeroSection({ dev }: { dev: any }) {
    const heroData = dev.hero;

    return (
        <section className="relative w-full pt-32 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden bg-gradient-to-br from-[#0f2a6b] via-[#1a3fa0] to-[#2952cc]">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#e8a020]/20 blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
                    <Link href="/" className="hover:text-white transition-colors">
                        Home
                    </Link>
                    <ChevronRight size={14} />
                    <Link href="/hire" className="hover:text-white transition-colors">
                        Hire Developers
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-[#e8a020]">{dev.breadcrumb}</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                            {heroData.title}{" "}
                            <span className="text-[#e8a020]">{heroData.highlightedWord}</span>
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            {heroData.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {heroData.trustPoints.map((point: string, i: number) => (
                                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm">
                                    <BadgeCheck size={16} className="text-[#e8a020]" />
                                    {point}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={heroData.ctaLink}
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#e8a020] text-white font-semibold rounded-full hover:bg-[#f0b832] transition-all duration-300 shadow-lg shadow-[#e8a020]/30"
                            >
                                {heroData.ctaText}
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href={heroData.secondaryCtaLink}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                            >
                                {heroData.secondaryCtaText}
                                <ExternalLink size={16} />
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[480px]">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10">
                                <Image
                                    src={heroData.heroImage || "/hire/default-hero.jpg"}
                                    alt={dev.technology}
                                    width={550}
                                    height={450}
                                    className="w-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Overview Section
function OverviewSection({ dev }: { dev: any }) {
    const data = dev.overview;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-[#e8a020] font-semibold text-sm uppercase tracking-wider mb-3 block">
                            {data.tag}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-6">
                            {data.title}{" "}
                            <span className="text-[#e8a020]">{data.highlightedWord}</span>{" "}
                            {data.subtitle}
                        </h2>
                        <p className="text-[#4a5578] leading-relaxed mb-6">{data.description}</p>
                        {data.description2 && (
                            <p className="text-[#4a5578] leading-relaxed mb-6">{data.description2}</p>
                        )}
                        <div className="grid grid-cols-2 gap-4">
                            {data.keyPoints?.map((point: string, i: number) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#e8a020] flex-shrink-0" />
                                    <span className="text-sm font-medium text-[#3a4a72]">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#1a3fa0]/10">
                        <h3 className="text-xl font-bold text-[#0f2a6b] mb-4">Key Benefits</h3>
                        {data.benefits?.map((benefit: any, i: number) => (
                            <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Star className="w-4 h-4 text-[#e8a020]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#0f2a6b] text-sm">{benefit.title}</p>
                                    <p className="text-xs text-[#6b7a9e]">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Why Hire Section
function WhyHireSection({ dev }: { dev: any }) {
    const data = dev.whyHire;

    return (
        <section className="py-20 bg-[#f8f9fc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
                        {data.tag}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
                        {data.title}{" "}
                        <span className="text-[#e8a020]">{data.highlightedWord}</span>{" "}
                        {data.subtitle}
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.reasons?.map((reason: any, idx: number) => {
                        const IconComponent = getIconComponent(reason.icon);
                        return (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#1a3fa0]/08 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mb-4">
                                    <IconComponent className="w-6 h-6 text-[#1a3fa0]" />
                                </div>
                                <h3 className="font-bold text-[#0f2a6b] mb-1">{reason.title}</h3>
                                <p className="text-sm text-[#4a5578]">{reason.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Skills Section
function SkillsSection({ dev }: { dev: any }) {
    const data = dev.skills;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
                        {data.title}{" "}
                        <span className="text-[#e8a020]">{data.highlightedWord}</span>
                    </h2>
                    <p className="text-[#4a5578] max-w-2xl mx-auto">{data.description}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    {data.skills?.map((skill: string, idx: number) => (
                        <div key={idx} className="px-5 py-3 bg-[#f4f6fb] rounded-xl border border-[#1a3fa0]/10 text-sm font-semibold text-[#1a3fa0] hover:bg-[#1a3fa0] hover:text-white transition-all duration-300 cursor-default">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Process Section
function ProcessSection({ dev }: { dev: any }) {
    const data = dev.process;

    return (
        <section className="py-20 bg-[#0f2a6b] overflow-hidden relative">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e8a020]/10 blur-3xl" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-[#e8a020] mb-4">
                        {data.tag}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
                        {data.title}{" "}
                        <span className="text-[#e8a020]">{data.highlightedWord}</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">{data.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.steps?.map((step: any, idx: number) => {
                        const IconComponent = getIconComponent(step.icon);
                        return (
                            <div key={idx} className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="text-5xl font-bold text-white/8 absolute top-4 right-4 group-hover:text-[#e8a020]/15 transition-colors">{step.step}</div>
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] flex items-center justify-center mb-4">
                                    <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Engagement Models Section
function EngagementModelsSection({ dev }: { dev: any }) {
    const data = dev.engagementModels;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
                        {data.title}{" "}
                        <span className="text-[#e8a020]">{data.highlightedWord}</span>
                    </h2>
                    <p className="text-[#4a5578] max-w-2xl mx-auto">{data.description}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {data.models?.map((model: any, idx: number) => (
                        <div key={idx} className={`relative bg-[#f8f9fc] rounded-2xl p-8 border ${model.popular ? "border-[#e8a020] shadow-xl ring-2 ring-[#e8a020]/20" : "border-[#1a3fa0]/08 shadow-sm"}`}>
                            {model.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#e8a020] text-white px-4 py-1 rounded-full text-xs font-bold">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-[#0f2a6b] mb-2">{model.name}</h3>
                            <p className="text-2xl font-bold text-[#1a3fa0] mb-6">{model.price}</p>
                            <ul className="space-y-3 mb-8">
                                {model.features?.map((feature: string, i: number) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-[#4a5578]">
                                        <CheckCircle2 className="w-4 h-4 text-[#e8a020] flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className={`block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 ${model.popular ? "bg-[#e8a020] text-white hover:bg-[#f0b832]" : "bg-[#1a3fa0] text-white hover:bg-[#2952cc]"}`}>
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Case Studies Section
function CaseStudiesSection({ dev }: { dev: any }) {
    const data = dev.caseStudies;

    return (
        <section className="py-20 bg-[#f8f9fc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
                        {data.tag}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
                        {data.title}{" "}
                        <span className="text-[#e8a020]">{data.highlightedWord}</span>
                    </h2>
                    <p className="text-[#4a5578] max-w-2xl mx-auto">{data.description}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {data.studies?.map((study: any, idx: number) => (
                        <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-[#1a3fa0]/08 shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="relative h-48 bg-gray-100">
                                <Image src={study.imageUrl} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-5">
                                <span className="text-xs text-[#e8a020] font-semibold uppercase tracking-wider">{study.category}</span>
                                <h3 className="text-lg font-bold text-[#0f2a6b] mt-1 mb-2">{study.title}</h3>
                                <p className="text-sm text-[#4a5578] mb-3">{study.description}</p>
                                <Link href={study.link} className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a3fa0] hover:text-[#e8a020] transition-colors">
                                    Read Case Study <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// FAQ Section
function FAQSection({ dev }: { dev: any }) {
    const data = dev.faq;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
                        {data.title}{" "}
                        <span className="text-[#e8a020]">{data.highlightedWord}</span>
                    </h2>
                </div>
                <div className="space-y-3">
                    {data.faqs?.map((faq: any, idx: number) => (
                        <FAQItem key={idx} faq={faq} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Related Technologies Section
function RelatedTechnologiesSection({ dev }: { dev: any }) {
    const data = dev.relatedTechnologies;

    return (
        <section className="py-20 bg-[#f8f9fc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
                        {data.title}{" "}
                        <span className="text-[#e8a020]">{data.highlightedWord}</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
                    {data.technologies?.map((related: any, idx: number) => {
                        const IconComponent = getIconComponent(related.icon);
                        return (
                            <Link key={idx} href={`/hire/${related.slug}`} className="group bg-white rounded-2xl p-6 border border-[#1a3fa0]/08 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mx-auto mb-3">
                                    <IconComponent className="w-6 h-6 text-[#1a3fa0]" />
                                </div>
                                <h3 className="font-bold text-[#0f2a6b] mb-2">{related.title}</h3>
                                <span className="text-sm text-[#1a3fa0] font-semibold group-hover:text-[#e8a020] transition-colors">Learn More →</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Enquiry Section
function EnquirySection({ dev }: { dev: any }) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-[#f8f9fc] rounded-3xl shadow-xl overflow-hidden border border-[#1a3fa0]/08">
                    <div className="grid lg:grid-cols-2 gap-0">
                        <div className="bg-gradient-to-br from-[#0f2a6b] to-[#1a3fa0] p-10 lg:p-12 text-white flex flex-col justify-center">
                            <h2 className="text-3xl font-semibold mb-4">
                                Ready to Hire <span className="text-[#e8a020]">{dev.technology}</span> Developers?
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Get dedicated {dev.technology} developers for your project. We'll
                                connect you with pre-vetted experts within 24-48 hours.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-[#e8a020]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">55+ Expert Developers</p>
                                        <p className="text-sm text-gray-300">Dedicated team for your project</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#e8a020]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">48-Hour Onboarding</p>
                                        <p className="text-sm text-gray-300">Get started quickly</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Trophy className="w-5 h-5 text-[#e8a020]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">100+ Projects Delivered</p>
                                        <p className="text-sm text-gray-300">Proven track record</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 lg:p-12">
                            <HireEnquiryForm dev={dev} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}