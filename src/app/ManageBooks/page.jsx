"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { confirmWithToast } from "@/utils/confirmToast";
import { toast } from "react-toastify";
import { 
    Trash2, 
    Eye, 
    Edit, 
    BookOpen, 
    Plus, 
    Filter, 
    Search,
    DollarSign,
    Calendar,
    Tag,
    User,
    MoreVertical,
    BarChart3,
    AlertCircle
} from "lucide-react";

const ManagebooksPage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("all");
    const [filterStatus, setFilterStatus] = useState("all");
    const { user } = useUser();

    const email = user?.primaryEmailAddress?.emailAddress;

    useEffect(() => {
        async function fetchBooks() {
            try {
                setLoading(true);
                const res = await fetch(`http://localhost:5000/books?email=${email}`);
                const data = await res.json();
                setBooks(data);
            } catch (error) {
                console.error("Error fetching books:", error);
                toast.error("Failed to load your books");
            } finally {
                setLoading(false);
            }
        }

        if (email) {
            fetchBooks();
        }
    }, [email]);

    // Get unique categories from books
    const categories = [...new Set(books.map(book => book.category).filter(Boolean))];

    const handleDelete = async (id) => {
        const confirmed = await confirmWithToast("Are you sure you want to delete this book? This action cannot be undone.");
        if (!confirmed) return;

        try {
            const res = await fetch(`http://localhost:5000/books/${id}`, { method: "DELETE" });

            if (res.ok) {
                setBooks((prev) => prev.filter((item) => item._id !== id));
                toast.success("Book deleted successfully!");
            } else {
                toast.error("Failed to delete book.");
            }
        } catch (error) {
            toast.error("Something went wrong.");
        }
    };

    // Filter books based on search and filters
    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            book.shortDescription?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === "all" || book.category === filterCategory;
        const matchesStatus = filterStatus === "all" || 
                            (filterStatus === "active" ? book.isActive !== false : true);
        
        return matchesSearch && matchesCategory && matchesStatus;
    });

    // Calculate statistics
    const totalBooks = books.length;
    const totalRevenue = books.reduce((sum, book) => sum + (book.price || 0), 0);
    const avgPrice = totalBooks > 0 ? totalRevenue / totalBooks : 0;

    if (loading) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-900 to-gray-800">
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                    <BookOpen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-indigo-400 animate-pulse" />
                </div>
                <p className="text-gray-400 text-sm font-medium">Loading your books...</p>
            </div>
        </div>
    );

    return (
        <div className="relative min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 py-8 md:py-12">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 md:mb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Manage Your <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Books</span>
                            </h1>
                            <p className="text-gray-400">
                                Manage and track all your published books in one place.
                            </p>
                        </div>
                        
                        <Link 
                            href="/SellBooks"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold transition-all duration-300"
                        >
                            <Plus className="h-5 w-5" />
                            Publish New Book
                        </Link>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-indigo-500/50 transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-400">Total Books</p>
                                    <p className="text-2xl font-bold text-white">{totalBooks}</p>
                                </div>
                                <div className="p-2 rounded-lg bg-linear-to-r from-indigo-500/20 to-blue-500/20">
                                    <BookOpen className="h-6 w-6 text-blue-400" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-purple-500/50 transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-400">Total Revenue</p>
                                    <p className="text-2xl font-bold text-white">${totalRevenue.toFixed(2)}</p>
                                </div>
                                <div className="p-2 rounded-lg bg-linear-to-r from-purple-500/20 to-pink-500/20">
                                    <DollarSign className="h-6 w-6 text-pink-400" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-green-500/50 transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-400">Avg. Price</p>
                                    <p className="text-2xl font-bold text-white">${avgPrice.toFixed(2)}</p>
                                </div>
                                <div className="p-2 rounded-lg bg-linear-to-r from-green-500/20 to-emerald-500/20">
                                    <BarChart3 className="h-6 w-6 text-emerald-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search and Filters */}
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 mb-8">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Search */}
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                                    <input
                                        type="text"
                                        placeholder="Search your books by title or description..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            
                            {/* Filters */}
                            <div className="flex gap-4">
                                <div className="relative flex-1">
                                    <select
                                        value={filterCategory}
                                        onChange={(e) => setFilterCategory(e.target.value)}
                                        className="w-full appearance-none pl-4 pr-10 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer"
                                    >
                                        <option value="all">All Categories</option>
                                        {categories.map(category => (
                                            <option key={category} value={category}>
                                                {category.replace('-', ' ').toUpperCase()}
                                            </option>
                                        ))}
                                    </select>
                                    <Tag className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                                </div>
                                
                                <div className="relative">
                                    <select
                                        value={filterStatus}
                                        onChange={(e) => setFilterStatus(e.target.value)}
                                        className="appearance-none pl-4 pr-10 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer"
                                    >
                                        <option value="all">All Status</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                    <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                                <span>Showing {filteredBooks.length} of {books.length} books</span>
                            </div>
                            {searchTerm && (
                                <button 
                                    onClick={() => setSearchTerm("")}
                                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                                >
                                    Clear search
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredBooks.map((book) => (
                        <div 
                            key={book._id} 
                            className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            {/* Book Cover */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={book.imageUrl}
                                    alt={book.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent"></div>
                                
                                {/* Price Badge */}
                                <div className="absolute top-4 left-4">
                                    <div className="px-3 py-1 rounded-full bg-linear-to-r from-indigo-500 to-purple-600">
                                        <span className="text-sm font-bold text-white">${book.price}</span>
                                    </div>
                                </div>
                                
                                {/* Category Badge */}
                                <div className="absolute top-4 right-4">
                                    <div className="px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700">
                                        <span className="text-xs font-medium text-gray-300 capitalize">
                                            {book.category?.replace('-', ' ')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Book Info */}
                            <div className="p-5">
                                <div className="mb-3">
                                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1 mb-1">
                                        {book.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-2">
                                        {book.shortDescription}
                                    </p>
                                </div>

                                {/* Details */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Calendar className="h-3 w-3" />
                                            <span>{new Date(book.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <User className="h-3 w-3" />
                                            <span className="text-xs">{book.authorName || book.sellerUsername}</span>
                                        </div>
                                    </div>
                                    
                                    {book.format && (
                                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-800/50">
                                            <span className="text-xs text-gray-400">Format:</span>
                                            <span className="text-xs font-medium text-gray-300">{book.format}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2">
                                    <Link 
                                        href={`/Books/${book._id}`}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 hover:bg-linear-to-r hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-500/50 hover:text-white transition-all duration-300 text-sm font-medium"
                                    >
                                        <Eye className="h-4 w-4" />
                                        View
                                    </Link>
                                    
                                    <button 
                                        onClick={() => handleDelete(book._id)}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-red-500/50 text-gray-300 hover:text-red-400 transition-all duration-300 text-sm font-medium"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredBooks.length === 0 && (
                    <div className="text-center py-16">
                        <div className="inline-flex p-4 rounded-2xl bg-gray-800/50 border border-gray-700 mb-4">
                            <AlertCircle className="h-12 w-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">No books found</h3>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">
                            {books.length === 0 
                                ? "You haven't published any books yet. Start sharing your stories with the world!"
                                : "No books match your search criteria. Try adjusting your filters."}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/SellBooks"
                                className="px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold transition-all duration-300"
                            >
                                Publish Your First Book
                            </Link>
                            <button 
                                onClick={() => {
                                    setSearchTerm("");
                                    setFilterCategory("all");
                                    setFilterStatus("all");
                                }}
                                className="px-6 py-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 text-white font-semibold transition-all duration-300"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    </div>
                )}

                {/* Quick Tips */}
                {filteredBooks.length > 0 && (
                    <div className="bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6 md:p-8">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <BookOpen className="h-6 w-6 text-indigo-400" />
                            Management Tips
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="space-y-2">
                                <h4 className="font-semibold text-gray-300">Update Regularly</h4>
                                <p className="text-gray-400">Keep your book descriptions and metadata up to date for better visibility.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-gray-300">Monitor Performance</h4>
                                <p className="text-gray-400">Track sales and reader engagement to understand what works best.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-gray-300">Engage Readers</h4>
                                <p className="text-gray-400">Respond to reviews and consider reader feedback for future updates.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManagebooksPage;