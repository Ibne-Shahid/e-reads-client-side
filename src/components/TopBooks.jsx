"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, ChevronRight } from 'lucide-react';
import Button from './Button';
import Card from './Card';

const TopBooks = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://e-reads-server-side.vercel.app/topBooks');
                const data = await response.json();
                setItems(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchData();
    }, []);

    if (loading) return (
        <div className="min-h-[400px] flex flex-col items-center justify-center bg-linear-to-b from-gray-900 to-gray-800 py-16">
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                </div>
                <p className="text-gray-400 text-sm font-medium">Loading top picks...</p>
            </div>
        </div>
    );

    return (
        <section className="relative bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-4">
                        <TrendingUp className="h-4 w-4 text-indigo-400" />
                        <span className="text-sm font-medium text-indigo-300">Top Picks This Week</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Bestsellers</span>
                    </h2>
                    
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Discover the most popular books that readers are loving right now
                    </p>
                </div>

                {/* Books Grid using Card component */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {items.map((item, index) => (
                        <Card 
                            key={item._id || index} 
                            item={item}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center" data-aos="fade-up">
                    <Link href="/browse">
                        <Button className="group px-8 py-4 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                            <span className="flex items-center gap-2">
                                Browse All Books
                                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                    </Link>
                    
                    <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span>Instant Download</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
                            <span>Multiple Formats</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></div>
                            <span>Free Samples</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBooks;