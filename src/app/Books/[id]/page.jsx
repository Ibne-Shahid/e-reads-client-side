"use client";

import Button from "@/components/Button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { 
    ArrowLeft, 
    ShoppingCart, 
    BookOpen, 
    Star, 
    Calendar, 
    User, 
    Tag, 
    FileText, 
    Globe, 
    Clock,
    Shield,
    CheckCircle,
    Bookmark,
    Share2,
    Ban
} from "lucide-react";

const Page = () => {
    const { user, isLoaded } = useUser();
    const { id } = useParams();
    const router = useRouter();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPurchased, setIsPurchased] = useState(false);
    const [isAuthor, setIsAuthor] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://e-reads-server-side.vercel.app/books/${id}`);
                const data = await response.json();
                setItem(data);
                
                // Check if user already purchased this book
                if (user) {
                    const ordersResponse = await fetch(`https://e-reads-server-side.vercel.app/orders?email=${user.emailAddresses[0]?.emailAddress}`);
                    const orders = await ordersResponse.json();
                    const hasPurchased = orders.some(order => order.bookId === id);
                    setIsPurchased(hasPurchased);
                    
                    // Check if user is the author of this book
                    const userEmail = user.emailAddresses[0]?.emailAddress;
                    const isBookAuthor = data.sellerEmail === userEmail;
                    setIsAuthor(isBookAuthor);
                }
            } catch (err) {
                console.error("Error fetching item:", err);
                toast.error("Failed to load book details");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id, user]);

    const handlePurchase = async () => {
        if (!user) {
            router.push('/sign-in');
            return;
        }

        if (isAuthor) {
            toast.info("You cannot purchase your own book!");
            return;
        }

        const orderData = {
            bookId: item?._id,
            bookTitle: item?.title,
            price: item?.price,
            imageUrl: item?.imageUrl,
            format: item?.format || 'PDF',
            category: item?.category,
            sellerEmail: item?.sellerEmail,
            customerEmail: user?.emailAddresses[0]?.emailAddress,
            customerName: user?.fullName
        }

        try {
            const response = await fetch("https://e-reads-server-side.vercel.app/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success(`🎉 Successfully purchased "${item.title}"!`);
                setIsPurchased(true);
            } else {
                throw new Error(data.message || "Purchase failed");
            }
        } catch (error) {
            toast.error(error.message || "Purchase failed. Please try again.");
        }
    };

    const handleAddToWishlist = () => {
        if (!user) {
            router.push('/sign-in');
            return;
        }
        toast.info("Added to wishlist!");
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: item?.title,
                text: `Check out "${item?.title}" on E-Reads`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            toast.success("Link copied to clipboard!");
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-900 to-gray-800">
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                    <BookOpen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-indigo-400 animate-pulse" />
                </div>
                <p className="text-gray-400 text-sm font-medium">Loading book details...</p>
            </div>
        </div>
    );

    if (!item) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-900 to-gray-800">
            <BookOpen className="h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Book Not Found</h2>
            <p className="text-gray-400 mb-6">The book you're looking for doesn't exist.</p>
            <Button 
                onClick={() => router.back()} 
                className="px-6 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold"
            >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
            </Button>
        </div>
    );

    return (
        <div className="relative min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            {isLoaded && !user && (
                <>
                    <div className="absolute inset-0 backdrop-blur-lg bg-black/60 z-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl shadow-2xl max-w-md text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                                <BookOpen className="h-8 w-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-white">
                                Sign In Required
                            </h2>
                            <p className="text-gray-300 mb-6">
                                Please sign in to view book details and make purchases.
                            </p>
                            <Link href="/sign-in">
                                <Button className="px-8 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold transition-all duration-300">
                                    Sign In to Continue
                                </Button>
                            </Link>
                        </div>
                    </div>
                </>
            )}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header with Book Cover */}
                <div className="relative bg-linear-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden mb-8">
                    <div className="flex flex-col lg:flex-row">
                        {/* Book Cover */}
                        <div className="lg:w-1/3 p-8 flex items-center justify-center">
                            <div className="relative w-64 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={item.imageUrl || '/book-placeholder.jpg'}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent"></div>
                                
                                {/* Format Badge */}
                                <div className="absolute top-4 right-4">
                                    <div className="px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700">
                                        <span className="text-sm font-medium text-gray-300">
                                            {item.format || 'PDF'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Book Info */}
                        <div className="lg:w-2/3 p-8 lg:p-12">
                            <div className="flex items-center justify-between mb-4">
                                <button
                                    onClick={() => router.back()}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white transition-all"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Back
                                </button>
                                
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleAddToWishlist}
                                        className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-pink-500 text-gray-300 hover:text-pink-400 transition-all"
                                    >
                                        <Bookmark className="h-5 w-5" />
                                    </button>
                                    <button
                                        onClick={handleShare}
                                        className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 transition-all"
                                    >
                                        <Share2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-3">
                                    <Tag className="h-3 w-3 text-indigo-400" />
                                    <span className="text-xs font-medium text-indigo-300 uppercase">
                                        {item.category?.replace('-', ' ') || 'Book'}
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                                {item.title}
                            </h1>

                            <div className="flex items-center gap-4 text-gray-400 mb-6">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span className="text-lg">{item.authorName || item.sellerUsername}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(item.date).toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}</span>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i}
                                            className={`h-5 w-5 ${
                                                i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                                            }`}
                                        />
                                    ))}
                                    <span className="text-white font-semibold">4.8</span>
                                    <span className="text-gray-500">(124 reviews)</span>
                                </div>
                            </div>

                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                {item.shortDescription}
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: <FileText className="h-5 w-5" />, label: "Pages", value: item.pages || '300' },
                                    { icon: <Globe className="h-5 w-5" />, label: "Language", value: item.language || 'English' },
                                    { icon: <Clock className="h-5 w-5" />, label: "Reading Time", value: `${Math.floor((item.pages || 300) / 200)}h` },
                                    { icon: <Shield className="h-5 w-5" />, label: "DRM", value: 'Protected' }
                                ].map((stat, index) => (
                                    <div 
                                        key={index}
                                        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-indigo-500/50 transition-all"
                                    >
                                        <div className="text-gray-400 mb-1">{stat.icon}</div>
                                        <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-xs text-gray-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Price and Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700">
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Price</div>
                                    <div className="text-4xl md:text-5xl font-bold text-white">
                                        ${item.price?.toFixed(2) || '9.99'}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">Lifetime access • Free updates</div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    {isAuthor ? (
                                       
                                        <Button 
                                            disabled
                                            className="px-8 py-4 rounded-xl bg-gray-700/50 border border-gray-600 text-gray-400 font-semibold text-lg cursor-not-allowed flex items-center gap-2"
                                        >
                                            <Ban className="h-5 w-5" />
                                            Your Book
                                        </Button>
                                    ) : isPurchased ? (
                                       
                                        <Button 
                                            disabled
                                            className="px-8 py-4 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-semibold text-lg cursor-not-allowed flex items-center gap-2"
                                        >
                                            <CheckCircle className="h-5 w-5" />
                                            Purchased
                                        </Button>
                                    ) : !user ? (
                                       
                                        <Link href="/sign-in">
                                            <Button className="px-8 py-4 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center gap-2">
                                                <ShoppingCart className="h-5 w-5" />
                                                Sign In to Purchase
                                            </Button>
                                        </Link>
                                    ) : (
                                        
                                        <Button 
                                            onClick={handlePurchase}
                                            className="px-8 py-4 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center gap-2"
                                        >
                                            <ShoppingCart className="h-5 w-5" />
                                            Buy Now
                                        </Button>
                                    )}
                                    
                                    <Link href="/Books">
                                        <Button className="px-8 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 text-white font-semibold text-lg hover:bg-gray-700/50 transition-all duration-300">
                                            Browse More
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Description */}
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <FileText className="h-6 w-6 text-indigo-400" />
                        About This Book
                    </h2>
                    
                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                            {item.fullDescription}
                        </p>
                    </div>

                    {/* Additional Info */}
                    {item.relevantField && (
                        <div className="mt-8 pt-8 border-t border-gray-700">
                            <h3 className="text-xl font-semibold text-white mb-4">Additional Information</h3>
                            <div className="bg-gray-800/50 rounded-xl p-6">
                                <p className="text-gray-300">{item.relevantField}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Seller Info */}
                <div className="bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-3xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <User className="h-6 w-6 text-indigo-400" />
                        About the Author
                    </h2>
                    
                    <div className="flex items-start gap-6">
                        <div className="w-20 h-20 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">
                                {(item.sellerUsername || item.authorName || 'A')[0].toUpperCase()}
                            </span>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {item.authorName || item.sellerUsername}
                            </h3>
                            <p className="text-gray-400 mb-4">{item.sellerEmail}</p>
                            <p className="text-gray-300">
                                Published author on E-Reads. All books are professionally formatted 
                                and available in multiple digital formats.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;