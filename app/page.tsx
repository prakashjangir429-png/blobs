'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { PortfolioCard } from '@/components/sections/PortfolioCard'
import { BlogCard } from '@/components/sections/BlogCard'
import { services } from '@/data/services'
import { portfolioProjects } from '@/data/portfolio'
import { blogPosts } from '@/data/blog'
import { motion } from 'framer-motion'
import TrueValueSection from '@/components/sections/aboutus'
import { AppWindowIcon, Cog, PhoneIcon } from 'lucide-react'
import { Car, DollarSign, Settings, GraduationCap,  PartyPopper,
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
  Briefcase } from 'lucide-react'
import TopScorers from '@/components/tesmonials'

const industries = [
  {
    title: "Automobile",
    icon: Car,
  },
  {
    title: "Capital markets",
    icon: DollarSign,
  },
  {
    title: "Manufacturing",
    icon: Settings,
  },
  {
    title: "Higher education",
    icon: GraduationCap,
  },
]

const indus = [
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
const developers = [
  "Hire iPhone Developers",
  "Hire Android Developers",
  "Hire Full Stack Developers",
  "Hire React Native Developers",
  "Hire React JS Developers",
  "Hire Python Developers",
  "Hire Flutter Developers",
  "Hire NodeJS Developers",
  "Hire AI Developers",
  "Hire Mean Stack Developers"
]
function Indus({ title, Icon }: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        bg-white
        rounded-lg
        p-10
        text-center
        shadow-sm
        border
        border-gray-200
        overflow-hidden
        group
        cursor-pointer
      "
    >
      {/* Bottom Blue Strip */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-sky-500 transition-all duration-300 group-hover:h-2" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center mb-6"
      >
        <Icon size={42} className="text-sky-500 group-hover:text-[#0f2b52] transition duration-300" />
      </motion.div>

      {/* Title */}
      <h3 className="text-[#0f2b52] font-medium">
        {title}
      </h3>
    </motion.div>
  )
}
function IndustryCard({ title, Icon }: any) {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="relative bg-white rounded-lg p-10 text-center overflow-hidden cursor-pointer group"
    >
      {/* Background Hover Layer */}
      <motion.div
        variants={{
          hover: { scale: 8, opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute w-24 h-24 bg-[#0f2b52] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          variants={{
            hover: { color: "#ffffff" },
          }}
          transition={{ duration: 0.3 }}
          className="text-[#0f2b52] font-semibold text-xl mb-4"
        >
          {title}
        </motion.h3>

        <motion.p
          variants={{
            hover: { color: "#ffffff" },
          }}
          transition={{ duration: 0.3 }}
          className="text-gray-700 font-medium mb-2"
        >
          Let us show you how our experience.
        </motion.p>

        <motion.div
          variants={{
            hover: { scale: 1.2, rotate: 10 },
          }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <Icon size={52} className="text-gray-800 stroke-[1px] group-hover:text-white transition duration-300" />
        </motion.div>
      </div>
    </motion.div>
  )
}


function HoverCard({ title }: { title: string }) {
  return (
    <motion.div
      initial={false}
      whileHover="hover"
      className="relative border border-gray-300 rounded-lg p-6 text-center bg-white overflow-hidden cursor-pointer group"
    >
      {/* Bubble Effect */}
      <motion.div
        variants={{
          hover: { scale: 10, opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute  w-10 h-10 bg-[#0f2b52] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 z-0"
      />
      <motion.div
        variants={{
          hover: { opacity: 1, y: 0 },
        }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="px-4 absolute flex items-center justify-center z-30 bottom-0 left-0 right-0 top-0 py-2 m-auto bg-[#0f2b52]/50 text-[#0f2b52] rounded-md"
      >
        <button className='bg-white p-2 rounded-md text-sm font-medium flex items-center gap-1 cursor-pointer'>
          <PhoneIcon className="w-4 h-4 inline-block mr-2" />
          Contact Now
        </button>
      </motion.div>
      {/* Content */}
      <div className="relative z-10">
        <Cog className="w-14 h-14 mb-3 mx-auto stroke-[1px] text-[#0f2b52] group-hover:text-white transition duration-300" />
        <div className="text-[#0f2b52] font-medium group-hover:text-white transition duration-300">
          {title}
        </div>

        {/* Reveal Button */}

      </div>
    </motion.div>
  )
}
export default function Home() {

  return (
    <>

      <div className="relative min-h-screen bg-background">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="
    fixed z-1 bottom-[10vh] left-0 opacity-25
    w-[100vw] h-[100vw] max-w-full rounded-full
    bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.7)_0%,_rgba(255,127,0,0.7)_14%,_rgba(255,255,0,0.7)_28%,_rgba(0,255,0,0.7)_52%,_rgba(0,0,255,0.7)_76%,_rgba(75,0,130,0.7)_70%,_rgba(148,0,211,0.7)_85%)]
    blur-3xl
  "
        />
        {/* <RadialRainbowGlow/> */}
        <Navigation />

        {/* Hero Section */}
        <Hero
          title="Transform Your Business with Digital Excellence"
          subtitle="Digital Agency"
          description="Unlock your business potential with our comprehensive IT services, digital marketing strategies, and stunning graphic design solutions."
          ctaText="Start Your Project"
          ctaLink="/services"
          secondaryCta={{ text: 'Watch Demo', link: '#' }}
        />
        <TrueValueSection />
        {/* Services Section */}

        <section className="w-full bg-[#f4f6f9] py-20">
          <div className="relative z-1 max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-start">

            {/* LEFT CONTENT */}
            <div className='col-span-3'>
              <p className="text-xs tracking-[0.4em] text-sky-600 font-semibold mb-6">
                OUR SERVICES
              </p>

              <h1 className="text-4xl lg:text-5xl font-bold text-[#0f2b52] leading-tight mb-6">
                Top Web & Software Development Company in India
              </h1>

              <p className="text-gray-600 leading-relaxed text-lg">
                True Value infosoft has offered{" "}
                <span className="font-semibold text-[#0f2b52]">
                  mobile app development
                </span>{" "}
                and website development services since 2011. We have a strong
                portfolio of over 500+ projects, which includes custom mobile apps
                for iOS and Android platforms. Our team of developers works with
                our clients to deliver high-quality products that are tailored to
                their needs.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white border col-span-2 rounded-lg shadow-sm p-8">

              {/* Trusted */}
              <h3 className="text-xl font-semibold text-blue-600 text-center mb-6">
                Trusted By The Top Companies
              </h3>

              {/* Ratings */}
              <div className="flex justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-red-500 text-lg">★★★★★</div>
                  <p className="text-sm text-gray-500">5.0 RATINGS</p>
                </div>
                <div className="text-center">
                  <div className="text-red-500 text-lg">★★★★★</div>
                  <p className="text-sm text-gray-500">4.8 RATINGS</p>
                </div>
                <div className="text-center">
                  <div className="text-red-500 text-lg">★★★★★</div>
                  <p className="text-sm text-gray-500">5.0 RATINGS</p>
                </div>
              </div>

              {/* Certifications */}
              <h4 className="text-lg font-semibold text-blue-600 text-center mb-6">
                Certifications
              </h4>

              <div className="flex justify-center gap-10 mb-8">
                <div className="w-20 h-20 border rounded flex items-center justify-center text-xs text-gray-500">
                  ISO
                </div>
                <div className="w-20 h-20 border rounded flex items-center justify-center text-xs text-gray-500">
                  GPTW
                </div>
              </div>

              {/* Button */}
              <div className="text-center">
                <button className="bg-[#0f2b52] hover:bg-[#0c2242] text-white px-8 py-3 rounded-md font-medium transition">
                  ↓ Company Profile
                </button>
              </div>
            </div>
          </div>
          <div className='max-w-7xl relative z-1 mx-auto mt-12 px-6'>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDescription}
                  features={service.features}
                  slug={service.slug}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl relative z-1 mx-auto px-6">

            {/* Top Heading */}
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] text-sky-600 font-semibold mb-6">
                SOLUTIONS
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2b52] mb-6">
                Hire Developers For Custom IT Solutions
              </h2>

              <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                We are one of the best IT Consulting companies that handle all aspects of software creation.
                <span className="text-blue-600 font-medium"> Hire web developers</span> who excel in a wide range of
                technology solutions and build websites that are efficient, flexible, and easy to maintain.
                Also, we help you to <span className="text-blue-600 font-medium">hire app developers</span> who develop
                bespoke applications to help you redefine customer experiences.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 bg-[#0f2b52] text-white px-8 py-3 rounded-md font-semibold shadow-md"
              >
                Hire Developers Now
              </motion.button>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {developers.map((item, index) => (
                <HoverCard key={index} title={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f6f9] py-24">
          <div className="max-w-7xl relative z-1 mx-auto px-6">

            {/* Top Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

              {/* Left */}
              <div>
                <p className="text-xs tracking-[0.4em] text-sky-600 font-semibold mb-6">
                  INDUSTRIES WE SERVE
                </p>

                <h2 className="text-4xl font-bold text-[#0f2b52] leading-tight">
                  Managed IT services customized for your industry
                </h2>
              </div>

              {/* Right */}
              <div className="text-gray-600 text-lg leading-relaxed">
                Our vertical solutions expertise allows your business to streamline workflow,
                and increase productivity. No matter the business, True Value infosoft has
                you covered with industry compliant solutions, customized to your company’s
                specific needs.
              </div>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((item, index) => (
                <IndustryCard key={index} title={item.title} Icon={item.icon} />
              ))}
            </div>

          </div>
        </section>

            <section className="bg-[#f4f6f9] py-24">
      <div className="max-w-7xl relative z-1 mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2b52] mb-4">
            We Serve All Industries
          </h2>
          <p className="text-gray-600 text-lg">
            We stay on top of our industry by being experts in yours.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {indus.map((item, index) => (
            <Indus key={index} title={item.title} Icon={item.icon} />
          ))}
        </div>

      </div>
      <TopScorers/>
    </section>

        {/* Blog Preview Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/50 bg-primary/10">
                <span className="text-sm font-medium text-primary">Insights & Tips</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Latest from Our Blog
                </span>
              </h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                Stay updated with industry insights, tips, and best practices.
              </p>
            </motion.div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <Footer />
      </div>
    </>
  )
}
