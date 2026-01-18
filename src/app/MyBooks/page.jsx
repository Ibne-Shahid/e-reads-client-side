"use client";
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { 
    Calendar, 
    BookOpen, 
    DollarSign, 
    Mail, 
    Star, 
    Filter,
    Search,
    ChevronDown,
    Tag,
    TrendingUp,
    BarChart3
} from 'lucide-react'
import Link from 'next/link'

const Page = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [filterStatus, setFilterStatus] = useState('all')
    const [filterFormat, setFilterFormat] = useState('all')
    const { user } = useUser()

    useEffect(() => {
        if (!user) return
        setLoading(true)
        fetch(`http://localhost:5000/orders?email=${user?.emailAddresses[0]?.emailAddress}`)
            .then(res => res.json())
            .then(data => {
                // Filter out non-book orders and format the data
                const bookOrders = data.map(order => ({
                    ...order,
                    bookTitle: order.bookTitle || order.foodName,
                    bookId: order.bookId || order.foodId,
                    format: order.format || 'PDF',
                    category: order.category,
                    purchaseDate: order.date,
                    status: 'completed'
                }))
                setOrders(bookOrders)
                setLoading(false)
            })
            .catch(error => {
                console.error("Error fetching orders:", error)
                setLoading(false)
            })
    }, [user]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Filter orders based on search and filters
    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.bookTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            order.category?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
        const matchesFormat = filterFormat === 'all' || order.format === filterFormat;
        
        return matchesSearch && matchesStatus && matchesFormat;
    });

    if (loading) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-900 to-gray-800">
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                    <BookOpen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-indigo-400 animate-pulse" />
                </div>
                <p className="text-gray-400 text-sm font-medium">Loading your library...</p>
            </div>
        </div>
    )

    if (!orders || orders.length === 0) return (
        <div className="relative min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 py-12">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-indigo-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Your Library is Empty</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                    You haven't purchased any books yet. Start building your digital library by exploring our collection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        href="/browse"
                        className="px-8 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold transition-all duration-300"
                    >
                        Browse Books
                    </Link>
                    <Link 
                        href="/categories"
                        className="px-8 py-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 text-white font-semibold transition-all duration-300"
                    >
                        Explore Categories
                    </Link>
                </div>
            </div>
        </div>
    )

    // Calculate statistics
    const totalSpent = orders.reduce((sum, order) => sum + order.price, 0);
    const averagePrice = totalSpent / orders.length;
    const uniqueCategories = [...new Set(orders.map(order => order.category))].filter(Boolean);
    const uniqueFormats = [...new Set(orders.map(order => order.format))].filter(Boolean);

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
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                My <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Library</span>
                            </h1>
                            <p className="text-gray-400">
                                Welcome back, <span className="text-indigo-300">{user?.firstName || 'Reader'}</span>! 
                                You have {orders.length} purchased {orders.length === 1 ? 'book' : 'books'}.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Mail className="h-4 w-4" />
                            <span className="text-sm">{user?.emailAddresses[0]?.emailAddress}</span>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-indigo-500/50 transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-400">Total Books</p>
                                    <p className="text-2xl font-bold text-white">{orders.length}</p>
                                </div>
                                <div className="p-2 rounded-lg bg-linear-to-r from-indigo-500/20 to-blue-500/20">
                                    <BookOpen className="h-6 w-6 text-blue-400" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-purple-500/50 transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-400">Total Spent</p>
                                    <p className="text-2xl font-bold text-white">${totalSpent.toFixed(2)}</p>
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
                                    <p className="text-2xl font-bold text-white">${averagePrice.toFixed(2)}</p>
                                </div>
                                <div className="p-2 rounded-lg bg-linear-to-r from-green-500/20 to-emerald-500/20">
                                    <TrendingUp className="h-6 w-6 text-emerald-400" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-yellow-500/50 transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-400">Categories</p>
                                    <p className="text-2xl font-bold text-white">{uniqueCategories.length}</p>
                                </div>
                                <div className="p-2 rounded-lg bg-linear-to-r from-yellow-500/20 to-amber-500/20">
                                    <Tag className="h-6 w-6 text-amber-400" />
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
                                        placeholder="Search your library..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            
                            {/* Filters */}
                            <div className="flex gap-4">
                                <div className="relative">
                                    <select
                                        value={filterFormat}
                                        onChange={(e) => setFilterFormat(e.target.value)}
                                        className="appearance-none pl-4 pr-10 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer"
                                    >
                                        <option value="all">All Formats</option>
                                        {uniqueFormats.map(format => (
                                            <option key={format} value={format}>{format}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                                </div>
                                
                                <div className="relative">
                                    <select
                                        value={filterStatus}
                                        onChange={(e) => setFilterStatus(e.target.value)}
                                        className="appearance-none pl-4 pr-10 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer"
                                    >
                                        <option value="all">All Status</option>
                                        <option value="completed">Completed</option>
                                        <option value="pending">Pending</option>
                                    </select>
                                    <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                            <div className="h-2 w-2 rounded-full bg-green-400"></div>
                            <span>Showing {filteredOrders.length} of {orders.length} books</span>
                        </div>
                    </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredOrders.map((order) => (
                        <div 
                            key={order._id} 
                            className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            {/* Book Cover */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={order.imageUrl}
                                    alt={order.bookTitle}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent"></div>
                                
                                {/* Format Badge */}
                                <div className="absolute top-4 right-4">
                                    <div className="px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700">
                                        <span className="text-xs font-medium text-gray-300">
                                            {order.format}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Price Tag */}
                                <div className="absolute bottom-4 left-4">
                                    <div className="px-3 py-1 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600">
                                        <span className="text-sm font-bold text-white">${order.price}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Book Info */}
                            <div className="p-5">
                                <div className="mb-3">
                                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1 mb-1">
                                        {order.bookTitle}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-1">
                                        {order.sellerEmail}
                                    </p>
                                </div>

                                {/* Details */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Calendar className="h-3 w-3" />
                                            <span>Purchased: {formatDate(order.purchaseDate)}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                                            <span className="text-white font-semibold">4.8</span>
                                        </div>
                                    </div>
                                    
                                    {order.category && (
                                        <div className="flex items-center gap-2">
                                            <Tag className="h-3 w-3 text-gray-500" />
                                            <span className="text-xs text-gray-400 capitalize">
                                                {order.category.replace('-', ' ')}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <Link 
                                        href={`/books/${order.bookId}`}
                                        className="flex-1 py-2 text-center rounded-lg bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 hover:bg-linear-to-r hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-500/50 hover:text-white transition-all duration-300 text-sm font-medium"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Section */}
                <div className="bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6 md:p-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <BarChart3 className="h-6 w-6 text-indigo-400" />
                        Library Insights
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-300">Top Categories</h4>
                            <div className="space-y-2">
                                {uniqueCategories.slice(0, 3).map(category => {
                                    const count = orders.filter(o => o.category === category).length;
                                    return (
                                        <div key={category} className="flex items-center justify-between">
                                            <span className="text-sm text-gray-400 capitalize">{category.replace('-', ' ')}</span>
                                            <span className="text-sm font-semibold text-white">{count}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-300">Formats</h4>
                            <div className="space-y-2">
                                {uniqueFormats.map(format => {
                                    const count = orders.filter(o => o.format === format).length;
                                    return (
                                        <div key={format} className="flex items-center justify-between">
                                            <span className="text-sm text-gray-400">{format}</span>
                                            <span className="text-sm font-semibold text-white">{count}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-300">Reading Activity</h4>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-400">Total Reading Time</span>
                                    <span className="text-sm font-semibold text-white">
                                        {(orders.length * 3.5).toFixed(1)} hours
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-400">Books per Month</span>
                                    <span className="text-sm font-semibold text-white">
                                        {(orders.length / 6).toFixed(1)}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-400">Most Recent</span>
                                    <span className="text-sm font-semibold text-white">
                                        {formatDate(orders[0]?.purchaseDate)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Continue Reading CTA */}
                <div className="mt-8 text-center">
                    <Link 
                        href="/Books"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold transition-all duration-300"
                    >
                        <BookOpen className="h-5 w-5" />
                        Discover More Books
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page