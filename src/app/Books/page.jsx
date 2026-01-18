"use client";

import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { Search, Filter, ChevronDown, Grid3x3, List, X, Star } from "lucide-react";

const Page = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [format, setFormat] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  
  // Book categories from your backend
  const categories = [
    "all", "fiction", "non-fiction", "science-fiction", "fantasy", 
    "mystery", "thriller", "romance", "biography", "self-help",
    "business", "technology", "science", "history", "poetry"
  ];
  
  const formats = ["all", "PDF", "EPUB", "MOBI", "Audiobook"];
  
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "title", label: "Title A-Z" }
  ];

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/books')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                         (item.authorName && item.authorName.toLowerCase().includes(search.toLowerCase())) ||
                         item.shortDescription.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = category === "all" || item.category === category;
    const matchesFormat = format === "all" || item.format === format;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesFormat && matchesPrice;
  });

  // Sort items based on selected option
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (a.price || 0) - (b.price || 0);
      case "price-high":
        return (b.price || 0) - (a.price || 0);
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      case "title":
        return a.title.localeCompare(b.title);
      case "newest":
      default:
        return new Date(b.date || 0) - new Date(a.date || 0);
    }
  });

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-900 to-gray-800">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-400 text-sm font-medium">Loading books...</p>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 py-8 md:py-12">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Browse <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">All Books</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Discover our collection of {items.length}+ digital books. Search by title, author, or explore by category.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-6 mb-8">
          {/* Main Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search books, authors, or keywords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Quick Filters Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white transition-all"
              >
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="text-gray-400 text-sm">
              Showing {filteredItems.length} of {items.length} books
            </div>
          </div>

          {/* Advanced Filters (Collapsible) */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat.replace('-', ' ').toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Format Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Format</label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {formats.map(fmt => (
                    <option key={fmt} value={fmt}>
                      {fmt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div>
          {sortedItems.length > 0 ? (
            <>
              {/* Books Grid - 4 per row on large screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {sortedItems.map((item, index) => (
                  <Card 
                    key={item._id || index} 
                    item={item}
                    compact={true} // Use compact mode for 4 per row
                  />
                ))}
              </div>
              
              {/* Results Info */}
              <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between items-center text-gray-400 text-sm">
                <div>
                  Found {sortedItems.length} book{sortedItems.length !== 1 ? 's' : ''}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span>Average rating: 4.5/5</span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex p-4 rounded-2xl bg-gray-800/50 border border-gray-700 mb-4">
                <Search className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No books found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                  setPriceRange([0, 50]);
                  setFormat("all");
                }}
                className="px-6 py-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium transition-all"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;