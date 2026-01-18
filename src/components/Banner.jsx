"use client";

import Link from "next/link";
import Button from "./Button";
import { useUser } from "@clerk/nextjs";
import { ArrowRight, Sparkles, BookOpen, Star } from "lucide-react";

export default function Hero() {
    const { isSignedIn } = useUser();
    
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 min-h-[85vh] flex items-center justify-center">
            
            {/* Animated Background Elements - SIMPLIFIED VERSION */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                
                {/* Static Book Icons (removed animations) */}
                <div className="absolute top-20 left-10">
                    <BookOpen className="h-12 w-12 text-indigo-400/20" />
                </div>
                <div className="absolute top-40 right-20">
                    <BookOpen className="h-8 w-8 text-purple-400/20" />
                </div>
                <div className="absolute bottom-32 left-1/4">
                    <BookOpen className="h-10 w-10 text-blue-400/20" />
                </div>
            </div>

            {/* Grid Pattern Overlay - FIXED syntax */}
            <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.03)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px]"></div>

            <div className="relative z-10 max-w-6xl px-6 py-12 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8">
                    <Sparkles className="h-4 w-4 text-indigo-400" />
                    <span className="text-sm font-medium text-indigo-300">
                        Over 10,000+ Digital Books Available
                    </span>
                    <Star className="h-4 w-4 text-yellow-400" />
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                    Discover Your Next
                    <span className="block mt-2 bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Favorite Read
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                    Dive into a vast collection of digital books. Read, listen, and explore 
                    stories that transport you to new worlds. Your literary journey starts here.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">10K+</div>
                        <div className="text-sm text-gray-400">Books Available</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">500+</div>
                        <div className="text-sm text-gray-400">Authors</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">24/7</div>
                        <div className="text-sm text-gray-400">Access</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">4.8</div>
                        <div className="text-sm text-gray-400">Avg. Rating</div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <Link href="/browse">
                        <Button className="group px-8 py-4 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                            <span className="flex items-center gap-2">
                                Browse Books
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                    </Link>

                    <Link href={isSignedIn ? '/my-library' : '/sign-up'}>
                        <Button className="px-8 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:bg-gray-700/50 text-white font-semibold text-lg hover:border-indigo-500/50 transition-all duration-300">
                            <span className="flex items-center gap-2">
                                {isSignedIn ? 'My Library' : 'Start Free Trial'}
                                <BookOpen className="h-5 w-5" />
                            </span>
                        </Button>
                    </Link>
                </div>

                {/* Free Book Offer - REMOVED animate-pulse */}
                <div className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <span className="text-sm text-gray-300">
                        <span className="text-indigo-300 font-semibold">Get your first book free!</span>
                        <span className="text-gray-400 ml-2">No credit card required</span>
                    </span>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div>
                    <div className="h-8 w-px bg-linear-to-b from-indigo-400/0 via-indigo-400 to-indigo-400/0"></div>
                </div>
            </div>
        </section>
    );
}