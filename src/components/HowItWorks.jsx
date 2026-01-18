"use client"
import Link from "next/link";
import Button from "./Button";
import { useUser } from "@clerk/nextjs";
import { BookOpen, Search, Download, UserPlus, ArrowRight, Sparkles, CheckCircle, Smartphone, Cloud, Star } from "lucide-react";

export default function HowItWorks() {
    const {isSignedIn} = useUser();
    
    const steps = [
        {
            id: 1,
            title: "Browse & Discover",
            desc: "Explore our vast collection of 50,000+ e-books across all genres. Use smart filters to find exactly what you're looking for.",
            icon: <Search className="h-8 w-8" />,
            color: "from-indigo-500 to-blue-500",
            features: ["Smart search", "Personalized recommendations", "Curated collections"]
        },
        {
            id: 2,
            title: "Instant Purchase",
            desc: "Buy with one click and get instant access. No waiting, no shipping fees. Your book is ready in seconds.",
            icon: <BookOpen className="h-8 w-8" />,
            color: "from-purple-500 to-pink-500",
            features: ["One-click purchase", "Multiple payment options", "Secure checkout"]
        },
        {
            id: 3,
            title: "Read Anywhere",
            desc: "Access your library on any device. Sync your progress automatically between phone, tablet, and computer.",
            icon: <Smartphone className="h-8 w-8" />,
            color: "from-green-500 to-teal-500",
            features: ["Cross-device sync", "Offline reading", "Multiple formats"]
        },
        {
            id: 4,
            title: "Publish Your Book",
            desc: "Share your stories with the world. Upload your manuscript and start earning from your writing.",
            icon: <UserPlus className="h-8 w-8" />,
            color: "from-orange-500 to-yellow-500",
            features: ["Easy upload", "Royalty management", "Analytics dashboard"]
        }
    ];

    const platformFeatures = [
        {
            icon: <Download className="h-6 w-6" />,
            title: "Instant Downloads",
            desc: "Get books immediately after purchase"
        },
        {
            icon: <Cloud className="h-6 w-6" />,
            title: "Cloud Library",
            desc: "Access your books from any device"
        },
        {
            icon: <CheckCircle className="h-6 w-6" />,
            title: "DRM Protected",
            desc: "Secure purchases, fair for authors"
        },
        {
            icon: <Star className="h-6 w-6" />,
            title: "5-Star Support",
            desc: "24/7 customer assistance"
        }
    ];

    return (
        <main className="relative min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
            </div>

            <div className="relative z-10">
                {/* Header Section */}
                <section className="py-16 md:py-24 border-b border-gray-800" data-aos='fade-up'>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
                            <Sparkles className="h-4 w-4 text-indigo-400" />
                            <span className="text-sm font-medium text-indigo-300">Simple & Seamless</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            How <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">E-Reads Works</span>
                        </h1>
                        
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
                            From discovering your next favorite book to publishing your own stories — 
                            everything you need for your digital reading journey.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
                            {[
                                { value: "60s", label: "To Get Your First Book" },
                                { value: "3 Clicks", label: "To Complete Purchase" },
                                { value: "0s Wait", label: "Instant Access" },
                                { value: "Unlimited", label: "Reading Devices" }
                            ].map((stat, index) => (
                                <div 
                                    key={index}
                                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-indigo-500/50 transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-16 md:py-24" data-aos='fade-up'>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
                            {steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {/* Step Number */}
                                    <div className="absolute top-4 right-4">
                                        <div className="h-8 w-8 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                                            <span className="text-sm font-bold text-white">{step.id}</span>
                                        </div>
                                    </div>

                                    {/* Step Icon */}
                                    <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${step.color} mb-6`}>
                                        <div className="text-white">
                                            {step.icon}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-semibold text-white mb-4">
                                        {step.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 mb-6">
                                        {step.desc}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-2">
                                        {step.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-indigo-400 to-purple-400"></div>
                                                <span className="text-sm text-gray-400">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Arrow Connector (desktop only) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                            <ArrowRight className="h-6 w-6 text-indigo-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Platform Features */}
                        <div className="bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 md:p-12 mb-16">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Why Readers Love Our Platform
                                </h3>
                                <p className="text-gray-400 max-w-2xl mx-auto">
                                    Everything you need for the perfect reading experience
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {platformFeatures.map((feature, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="p-2 rounded-lg bg-linear-to-r from-indigo-500/20 to-purple-500/20">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                            <p className="text-sm text-gray-400">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <section className="py-16 md:py-20 bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl">
                            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
                                <div className="inline-flex p-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 mb-6">
                                    <BookOpen className="h-8 w-8 text-white" />
                                </div>
                                
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Ready to Start Your Reading Journey?
                                </h2>
                                
                                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                    Join thousands of readers who have transformed their reading experience.
                                    Your first book is on us!
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Link href="/Books">
                                        <Button className="group px-8 py-4 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                                            <span className="flex items-center gap-2">
                                                Browse Books
                                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </Button>
                                    </Link>
                                    
                                    <Link href={isSignedIn ? '/SellBooks' : '/sign-up'}>
                                        <Button className="px-8 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 text-white font-semibold text-lg hover:bg-gray-700/50 transition-all duration-300">
                                            <span className="flex items-center gap-2">
                                                {isSignedIn ? 'Publish Your Book' : 'Start Free Trial'}
                                                <Sparkles className="h-5 w-5" />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>

                                {/* Guarantee Badge */}
                                <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                                        <span className="text-sm text-gray-300">
                                            <span className="text-indigo-300 font-semibold">7-day free trial</span>
                                            <span className="text-gray-500 ml-2">• No credit card required</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    );
}