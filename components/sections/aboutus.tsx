"use client";

import { motion } from "framer-motion";
import { Stats } from "./Stats";

const TrueValueSection = () => {
    // Animation variants
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };
    const stats = [
        { number: 150, label: 'Projects Completed', suffix: '+' },
        { number: 98, label: 'Client Satisfaction', suffix: '%' },
        { number: 12, label: 'Years Experience', suffix: '+' },
        { number: 50, label: 'Team Members', suffix: '+' },
        { number: 50, label: 'Team Members', suffix: '+' },
    ]

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="w-full py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl z-1 relative mx-auto">
                {/* Header Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
                >
                    <span className="text-sm font-medium text-gray-700">
                        Our Company
                    </span>
                </motion.div>
                <div className="flex items-start gap-6 mb-6">
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h2 className="text-gray-800 text-lg md:text-[2.5rem] font-bold mb-5 leading-tight">
                             <span className="text-[#FD5D07]">Digitonix</span> is your trusted source in IT services and support
                        </h2>

                    </motion.div>

                    <p className="text-gray-800 sm:text-xl font-medium max-w-2xl leading-relaxed">
                       Digitonix is an ISO 9001:2008 certified Web Designing and Mobile App Development established in 2011.
                        We are a leading solution provider for Internet based applications. Our services are unique
                        combination of user-friendly design and strong Internet marketing plans.
                    </p>
                </div>


                {/* Trusted Source Line */}


                {/* Cards Grid */}
                <motion.div
                    className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {/* How we can help */}
                    <motion.div
                        style={{ backgroundImage: "url(https://www.truevalueinfosoft.com/assets/img/banner-1/working-day-in-office_1.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
                        className="bg-[#F5F5F5] relative p-8 border-[#FF6B4A] h-48"
                        variants={fadeInUp}
                    >
                        <div className="absolute hover:-bottom-6 transition-all duration-300 p-4 mt-6 mx-auto -bottom-10 w-60 right-0 left-0 bg-white">
                            <h3 className="text-[#000000] text-lg font-bold mb-1">How we can help</h3>
                            <p className="text-[#FD5D07] text-sm mb-1">Discover now →</p>
                            <div className="w-12 h-0.5 bg-[#FD5D07]"></div>
                        </div>
                    </motion.div>
                                        <motion.div
                        style={{ backgroundImage: "url(https://www.truevalueinfosoft.com/assets/img/banner-1/working-day-in-office_1.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
                        className="bg-[#F5F5F5] relative p-8 border-[#FF6B4A] h-48"
                        variants={fadeInUp}
                    >
                        <div className="absolute hover:-bottom-6 transition-all duration-300 p-4 mt-6 mx-auto -bottom-10 w-60 right-0 left-0 bg-white">
                            <h3 className="text-[#000000] text-lg font-bold mb-1">How we can help</h3>
                            <p className="text-[#FD5D07] text-sm mb-1">Discover now →</p>
                            <div className="w-12 h-0.5 bg-[#FD5D07]"></div>
                        </div>
                    </motion.div>
                                        <motion.div
                        style={{ backgroundImage: "url(https://www.truevalueinfosoft.com/assets/img/banner-1/working-day-in-office_1.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
                        className="bg-[#F5F5F5] relative p-8 border-[#FF6B4A] h-48"
                        variants={fadeInUp}
                    >
                        <div className="absolute hover:-bottom-6 transition-all duration-300 p-4 mt-6 mx-auto -bottom-10 w-60 right-0 left-0 bg-white">
                            <h3 className="text-[#000000] text-lg font-bold mb-1">How we can help</h3>
                            <p className="text-[#FD5D07] text-sm mb-1">Discover now →</p>
                            <div className="w-12 h-0.5 bg-[#FD5D07]"></div>
                        </div>
                    </motion.div>

                    

                </motion.div>
            </div>
                <Stats stats={stats} />
        </section>
    );
};

export default TrueValueSection;