"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Star, Sparkles, TrendingUp, BookOpen, ChevronRight } from 'lucide-react';
import Button from './Button';

const TopBooks = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:5000/topBooks');
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
                    <BookOpen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-indigo-400 animate-pulse" />
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

                {/* Books Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {items.map((item, index) => (
                        <div 
                            key={index} 
                            className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/10"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Book Cover */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={item.imageUrl || '/book-placeholder.jpg'} 
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent"></div>
                                
                                {/* Bestseller Badge */}
                                <div className="absolute top-4 left-4">
                                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-linear-to-r from-yellow-500 to-orange-500">
                                        <Sparkles className="h-3 w-3 text-white" />
                                        <span className="text-xs font-bold text-white">BESTSELLER</span>
                                    </div>
                                </div>

                                {/* Format Badge */}
                                <div className="absolute top-4 right-4">
                                    <div className="px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700">
                                        <span className="text-xs font-medium text-gray-300">
                                            {item.format || 'PDF'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Book Info */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1">{item.authorName || item.sellerUsername}</p>
                                    </div>
                                    {/* Rating */}
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                        <span className="text-sm font-semibold text-white">4.8</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                    {item.shortDescription}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                                    <div>
                                        <div className="text-2xl font-bold text-white">${item.price?.toFixed(2) || '9.99'}</div>
                                        <div className="text-xs text-gray-500">{item.pages || '300'} pages</div>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <div className="px-3 py-1 rounded-lg bg-gray-700/50 border border-gray-600">
                                            <span className="text-sm text-gray-300">{item.category}</span>
                                        </div>
                                        <Link href={`/books/${item._id}`}>
                                            <button className="p-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all group-hover:scale-110">
                                                <BookOpen className="h-5 w-5 text-white" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center" data-aos="fade-up">
                    <Link href="/Books">
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

            {/* Add line-clamp utility */}
            <style jsx>{`
                .line-clamp-1 {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                }
                .line-clamp-2 {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
            `}</style>
        </section>
    );
};

export default TopBooks;