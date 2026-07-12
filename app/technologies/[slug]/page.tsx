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
            <OverviewSection tech={tech} />

            {/* Features Section */}
            <FeaturesSection tech={tech} />

            {/* Tech Stack Section */}
            <TechStackSection tech={tech} />

            {/* Process Section */}
            <ProcessSection tech={tech} />

            {/* Why Choose Section */}
            <WhyChooseSection tech={tech} />

            {/* Pricing Section */}
            <PricingSection tech={tech} />

            {/* Case Studies Section */}
            <CaseStudiesSection tech={tech} />

            {/* FAQ Section */}
            <FAQSection tech={tech} />

            {/* Related Technologies Section */}
            <RelatedTechnologiesSection tech={tech} />

            {/* Enquiry Form Section */}
            <EnquirySection tech={tech} />

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


// Overview Section (Server Component)
function OverviewSection({ tech }: { tech: any }) {
    const data = tech.overview;

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

// Features Section (Server Component)
function FeaturesSection({ tech }: { tech: any }) {
    const data = tech.features;

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
                    {data.features?.map((feature: any, idx: number) => {
                        const IconComponent = getIconComponent(feature.icon);
                        return (
                            <div key={idx} className="group bg-white rounded-2xl p-6 border border-[#1a3fa0]/08 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mb-4">
                                    <IconComponent className="w-6 h-6 text-[#1a3fa0]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0f2a6b] mb-2">{feature.title}</h3>
                                <p className="text-sm text-[#4a5578] leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Tech Stack Section (Server Component)
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

// Why Choose Section (Server Component)
function WhyChooseSection({ tech }: { tech: any }) {
    const data = tech.whyChoose;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
                        {data.tag}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
                        {data.title}{" "}
                        <span className="text-[#e8a020]">{data.highlightedWord}</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.reasons?.map((reason: any, idx: number) => {
                        const IconComponent = getIconComponent(reason.icon);
                        return (
                            <div key={idx} className="bg-[#f8f9fc] rounded-2xl p-6 border border-[#1a3fa0]/08 hover:shadow-md transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mb-3">
                                    <IconComponent className="w-5 h-5 text-[#1a3fa0]" />
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

// Pricing Section (Server Component)
function PricingSection({ tech }: { tech: any }) {
    const data = tech.pricing;

    return (
        <section className="py-20 bg-[#f8f9fc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
                        {data.title}{" "}
                        <span className="text-[#e8a020]">{data.highlightedWord}</span>
                    </h2>
                    <p className="text-[#4a5578] max-w-2xl mx-auto">{data.description}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {data.plans?.map((plan: any, idx: number) => (
                        <div key={idx} className={`relative bg-white rounded-2xl p-8 border ${plan.popular ? "border-[#e8a020] shadow-xl ring-2 ring-[#e8a020]/20" : "border-[#1a3fa0]/08 shadow-sm"}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#e8a020] text-white px-4 py-1 rounded-full text-xs font-bold">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-[#0f2a6b] mb-2">{plan.name}</h3>
                            <p className="text-2xl font-bold text-[#1a3fa0] mb-6">{plan.price}</p>
                            <ul className="space-y-3 mb-8">
                                {plan.features?.map((feature: string, i: number) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-[#4a5578]">
                                        <CheckCircle2 className="w-4 h-4 text-[#e8a020] flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className={`block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 ${plan.popular ? "bg-[#e8a020] text-white hover:bg-[#f0b832]" : "bg-[#f4f6fb] text-[#1a3fa0] hover:bg-[#1a3fa0] hover:text-white"}`}>
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Case Studies Section (Server Component)
function CaseStudiesSection({ tech }: { tech: any }) {
    const data = tech.caseStudies;

    return (
        <section className="py-20 bg-white">
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

// FAQ Section (Server Component with Client Interaction)
function FAQSection({ tech }: { tech: any }) {
    const data = tech.faq;

    return (
        <section className="py-20 bg-[#f8f9fc]">
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

// Related Technologies Section (Server Component)
function RelatedTechnologiesSection({ tech }: { tech: any }) {
    const data = tech.relatedTechnologies;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
                        {data.title}{" "}
                        <span className="text-[#e8a020]">{data.highlightedWord}</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
                    {data.technologies?.map((relatedTech: any, idx: number) => {
                        const IconComponent = getIconComponent(relatedTech.icon);
                        return (
                            <Link key={idx} href={`/technologies/${relatedTech.slug}`} className="group bg-[#f8f9fc] rounded-2xl p-6 border border-[#1a3fa0]/08 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mx-auto mb-3">
                                    <IconComponent className="w-6 h-6 text-[#1a3fa0]" />
                                </div>
                                <h3 className="font-bold text-[#0f2a6b] mb-2">{relatedTech.title}</h3>
                                <span className="text-sm text-[#1a3fa0] font-semibold group-hover:text-[#e8a020] transition-colors">Learn More →</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Enquiry Section (Server Component with Client Form)
function EnquirySection({ tech }: { tech: any }) {
    return (
        <section className="py-20 bg-[#f8f9fc]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#1a3fa0]/08">
                    <div className="grid lg:grid-cols-2 gap-0">
                        <div className="bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] p-10 lg:p-12 text-white flex flex-col justify-center">
                            <h2 className="text-3xl font-semibold mb-4">
                                Ready to Build Your <span className="text-[#e8a020]">Project?</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Let's discuss how our {tech.name} expertise can help bring your vision to life.
                                Get a free consultation and quote within 24 hours.
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
                                        <p className="font-semibold">24/7 Support</p>
                                        <p className="text-sm text-gray-300">Round-the-clock assistance</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Trophy className="w-5 h-5 text-[#e8a020]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">650+ Projects Delivered</p>
                                        <p className="text-sm text-gray-300">Proven track record</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 lg:p-12">
                            <EnquiryForm tech={tech} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}