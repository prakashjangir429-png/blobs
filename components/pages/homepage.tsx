'use client'

import { Hero } from '@/components/sections/Hero'
import { BlogCard } from '@/components/sections/BlogCard'
import { blogPosts } from '@/data/blog'
import { motion } from 'framer-motion'
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
    Shield,
    ArrowRight,
    ChevronRight,
    Mail,
    Phone,
    MapPin
} from 'lucide-react'
import TopScorers from '@/components/tesmonials'
import Image from 'next/image'
import Link from 'next/link'
import BlogSection from './blogs'


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
            'From modern websites and mobile apps to custom software solutions, we assist startups and businesses in creating digital products that provide real results and support long-term growth.',
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

                <BlogSection/>
                {/* CTA Section */}
                <section className="relative py-12 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                            alt="Background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
                    </div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
                                Ready to Build Something Great?
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                            Partner with Digitonix, the leading IT company in Jaipur, for world-class web development, mobile apps, and digital marketing solutions. Join 500+ businesses achieving measurable growth.

</p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 group"
                                    >
                                        Start Your Project
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/portfolio"
                                        className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 font-semibold text-base hover:bg-white/20 transition-all duration-300"
                                    >
                                        View Portfolio
                                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Contact Info */}
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex items-center justify-center gap-3 text-gray-300">
                                        <Mail className="w-5 h-5 text-orange-400" />
                                        <span>hello@digitonix.in</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-3 text-gray-300">
                                        <Phone className="w-5 h-5 text-orange-400" />
                                        <span>+91 9887120429</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-3 text-gray-300">
                                        <MapPin className="w-5 h-5 text-orange-400" />
                                        <span>Global Offices</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </div>
        </>
    )
}
