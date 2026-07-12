// app/technologies/[slug]/page.tsx (Server Component)
import technologiesData from "@/data/technologies.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "./EnquiryForm";
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
import { CTASection } from "@/components/pages/aboutus";
import { TechHeroSection } from "@/components/pages/techno";
import { FAQItem } from "@/app/hireus/[slug]/EnquiryForm";
import { CaseStudiesSection, FAQSection, FeaturesSection, OverviewSection, PricingSection, RelatedServicesSection, WhyChooseServiceSection } from "@/components/services/DetailPage";

// Generate static paths for all technologies
// export async function generateStaticParams() {
//   return technologiesData.technologies.map((tech) => ({
//     slug: tech.slug,
//   }));
// }

// Generate metadata for each technology
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const tech = technologiesData.technologies.find((t) => t.slug == slug);

    if (!tech) {
        return {
            title: "Technology Not Found",
            description: "The technology you're looking for doesn't exist.",
        };
    }

    return {
        title: tech.metaTitle,
        description: tech.metaDescription,
        keywords: tech.metaKeywords,
        openGraph: {
            title: tech.ogTitle || tech.metaTitle,
            description: tech.ogDescription || tech.metaDescription,
            type: "website",
        },
        alternates: {
            canonical: `/technologies/${tech.slug}`,
        },
    };
}

export default async function TechnologyDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params

    console.log(slug)
    const tech = technologiesData.technologies.find((t) => t.slug == slug);

    if (!tech) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Hero Section */}
            <TechHeroSection tech={tech} />

            {/* Overview Section */}
            <OverviewSection service={tech} />

            {/* Features Section */}
            <FeaturesSection service={tech} />

            {/* Tech Stack Section */}
            <TechStackSection tech={tech} />

            {/* Process Section */}
            <ProcessSection tech={tech} />

            {/* Why Choose Section */}
            <WhyChooseServiceSection service={tech} />

            {/* Pricing Section */}
            <PricingSection service={tech} />

            {/* Case Studies Section */}
            <CaseStudiesSection service={tech} />

            {/* FAQ Section */}
            <FAQSection service={tech} />

            {/* Related Technologies Section */}
            <RelatedServicesSection service={tech} />

            {/* Enquiry Form Section */}
            {/* <EnquirySection tech={tech} /> */}

            {/* CTA Section */}
            <CTASection />
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

function TechStackSection({ tech }: { tech: any }) {
    const data = tech.techStack;

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
                    {data.technologies?.map((tech: string, idx: number) => (
                        <div key={idx} className="px-5 py-3 bg-[#f4f6fb] rounded-xl border border-[#1a3fa0]/10 text-sm font-semibold text-[#1a3fa0] hover:bg-[#1a3fa0] hover:text-white transition-all duration-300 cursor-default">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Process Section (Server Component)
function ProcessSection({ tech }: { tech: any }) {
    const data = tech.process;

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