'use client'

import { Hero } from '@/components/sections/Hero'
import { CTA } from '@/components/sections/CTA'
import { BlogCard } from '@/components/sections/BlogCard'
import { blogPosts } from '@/data/blog'
import { motion, useScroll, useTransform } from 'framer-motion'
import TrueValueSection, { HireDevelopersSection, IndustriesSection, ServicesSection } from '@/components/sections/aboutus'
import {
    PartyPopper,
    ShoppingCart,
    UtensilsCrossed,
    Sprout,
    Monitor,
    Dumbbell,
    Heart,
    Activity,
    Film,
    Plane,
    Truck,
    Briefcase,
    Sparkles,
    Zap,
    Shield
} from 'lucide-react'
import TopScorers from '@/components/tesmonials'


export const indus = [
    { title: "Event", icon: PartyPopper },
    { title: "Ecommerce", icon: ShoppingCart },
    { title: "Hotel and Restaurant", icon: UtensilsCrossed },
    { title: "Agriculture", icon: Sprout },
    { title: "Education & eLearning", icon: Monitor },
    { title: "Sports", icon: Activity },
    { title: "Dating", icon: Heart },
    { title: "Health and Fitness", icon: Dumbbell },
    { title: "Media & Entertainment", icon: Film },
    { title: "Travel", icon: Plane },
    { title: "Transport", icon: Truck },
    { title: "B2B", icon: Briefcase },
]
export function Indus({ title, Icon }: any) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="
        relative
        bg-white
        p-8
        text-center
        shadow-lg
        overflow-hidden
        group
        cursor-pointer
      "
        >
            <div className="absolute z-0 bottom-0 left-0 w-full h-1 group-hover:-z-1 group-hover:h-full bg-[#FD5D07] transition-all duration-300 group-hover:h-2" />

            {/* Icon */}
            <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center mb-3"
            >
                <Icon size={60} className="text-gray-700 stroke-[1.3px] group-hover:text-white transition duration-300" />
            </motion.div>

            {/* Title */}
            <h3 className="text-gray-700 stroke-[1.3px] group-hover:text-white text-lg font-medium">
                {title}
            </h3>
        </motion.div>
    )
}

const slides = [
    {
        tag: 'Leading IT Company in Jaipur',
        title: ['Build Digital', 'Products That Grow Business'],
        accent: 0,
        description:
            'From modern websites and mobile apps to custom software solutions, we help startups and businesses create digital products that deliver real results and long-term growth.',
        icon: Sparkles,
        image: '/home/b1.png',
        stat: { value: '500+', label: 'Projects Delivered' },
    },

    {
        tag: 'Web & Mobile App Development',
        title: ['Custom Software', 'Built For Your Goals'],
        accent: 0,
        description:
            'Our team develops scalable websites, mobile applications, and enterprise software tailored to your business needs, ensuring performance, security, and a great user experience.',
        icon: Zap,
        image: '/home/b2.png',
 stat: { value: '98%', label: 'Client Satisfaction' },
    },

    {
        tag: 'Digital Marketing & AI Solutions',
        title: ['Reach More', 'Customers Online'],
        accent: 0,
        description:
            'Increase visibility with SEO, digital marketing, and AI-powered solutions designed to attract qualified leads, improve conversions, and strengthen your online presence.',
        icon: Shield,
                image: '/home/b3.png',

        stat: { value: '10+', label: 'Years Experience' },
    },
];

export default function Home() {

    return (
        <>

            <div className="relative min-h-screen">
                <Hero slides={slides} />
                <TrueValueSection />

                <ServicesSection />
                <HireDevelopersSection />
                <IndustriesSection />


                <TopScorers />

                {/* Blog Preview Section */}
                <section className="py-16">
                    <div className="max-w-7xl relative z-1 mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="mb-16">
                            <motion.h2
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                                className="text-3xl sm:text-[2.6rem] font-extrabold text-[#0f2a6b] leading-tight mb-3"
                            >
                                <span className="text-[#e8a020]">Digitonix</span> Blogs

                            </motion.h2>

                            {/* Gold divider */}
                            <motion.div
                                transition={{ duration: 0.5, delay: 0.12, transformOrigin: "left" }}
                                className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#e8a020] to-[#f0b832] mb-4 origin-left"
                            />

                            <motion.p
                                transition={{ duration: 0.5, delay: 0.14 }}
                                className="text-[#4a5578] text-base sm:text-lg font-light max-w-lg"
                            >
                                We stay on top of our industry by being experts in yours.

                            </motion.p>

                        </div>
                        {/* Blog Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {blogPosts.slice(0, 3).map((post, index) => (
                                <BlogCard
                                    key={post.id}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    image={post.image}
                                    category={post.category}
                                    date={post.date}
                                    readTime={post.readTime}
                                    slug={post.slug}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTA
                    title="Ready to Transform Your Business?"
                    description="Let's work together to bring your vision to life. Our team is ready to help you succeed in the digital world."
                    ctaText="Start Your Journey"
                    ctaLink="/contact"
                />

            </div>
        </>
    )
}
