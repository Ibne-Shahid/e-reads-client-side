"use client"
import Link from "next/link";
import { Star, BookOpen, Calendar, User } from "lucide-react";

export default function Card({ item }) {
    return (
        <div 
            data-aos='fade-up' 
            className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
        >
            {/* Book Cover */}
            <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                    src={item.imageUrl || '/book-placeholder.jpg'}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* linear Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Book Format Badge */}
                <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700">
                        <span className="text-xs font-medium text-gray-300">
                            {item.format || 'PDF'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-5 md:p-6">
                {/* Book Title & Author */}
                <div className="mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1 mb-1">
                        {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <User className="h-3 w-3" />
                        <span className="line-clamp-1">{item.authorName || item.sellerUsername}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-10">
                    {item.shortDescription}
                </p>

                {/* Price and Details Row */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <div className="text-2xl font-bold text-white">
                            ${item.price?.toFixed(2) || '9.99'}
                        </div>
                        {item.pages && (
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                <BookOpen className="h-3 w-3" />
                                <span>{item.pages} pages</span>
                            </div>
                        )}
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold text-white">4.8</span>
                    </div>
                </div>

                {/* Category Badge */}
                {item.category && (
                    <div className="mb-4">
                        <div className="inline-flex px-3 py-1 rounded-lg bg-gray-700/50 border border-gray-600">
                            <span className="text-xs text-gray-300 capitalize">
                                {item.category.replace('-', ' ')}
                            </span>
                        </div>
                    </div>
                )}

                {/* View Details Button */}
                <Link href={`/books/${item._id}`}>
                    <button
                        className="w-full py-3 rounded-lg bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 font-medium hover:bg-linear-to-r hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-500/50 hover:text-white transition-all duration-300 group-hover:scale-[1.02]"
                    >
                        View Details
                    </button>
                </Link>

                {/* Additional Info */}
                {item.date && (
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                        </div>
                        <span className="text-green-400 font-medium">Available</span>
                    </div>
                )}
            </div>
        </div>
    );
}