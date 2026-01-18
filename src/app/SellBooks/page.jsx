"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Upload, BookOpen, DollarSign, Tag, Image as ImageIcon, Type, FileText, User, ChevronDown } from "lucide-react";

const Page = () => {
  const { user } = useUser();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const newBook = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      fullDescription: form.fullDescription.value,
      price: parseFloat(form.price.value),
      priority: form.priority.value,
      relevantField: form.relevantField.value,
      imageUrl: form.imageUrl.value,
      sellerEmail: form.sellerEmail.value,
      sellerUsername: form.sellerUsername.value,
      category: form.category.value,
      authorName: form.authorName?.value || "",
      isbn: form.isbn?.value || "",
      pages: parseInt(form.pages?.value) || 0,
      language: form.language?.value || "English",
      format: form.format?.value || "PDF",
    };

    try {
      const response = await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });

      const data = await response.json();
      toast.success("📚 Book added successfully!");
      form.reset();
      setTimeout(() => {
        router.push("/ManageBooks");
      }, 1500);
    } catch (error) {
      toast.error("Error adding book: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Thriller",
    "Romance",
    "Biography",
    "Self-Help",
    "Business",
    "Technology",
    "Science",
    "History",
    "Poetry",
    "Children",
    "Young Adult",
    "Educational",
    "Cookbooks",
    "Art & Photography"
  ];

  const bookFormats = [
    "PDF",
    "EPUB",
    "MOBI",
    "Audiobook",
    "Interactive",
    "Bundle"
  ];

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Arabic",
    "Hindi",
    "Russian",
    "Portuguese",
    "Bengali"
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4 md:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-600 mb-4">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            List Your <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">E-Book</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Share your knowledge with readers worldwide. Fill in the details below to publish your digital book.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              
              {/* Basic Information Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Type className="h-5 w-5 text-indigo-400" />
                  <h3 className="text-xl font-semibold text-white">Basic Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Book Title <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        name="title"
                        placeholder="Enter book title"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Author Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        name="authorName"
                        placeholder="Author's full name"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Short Description <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="shortDescription"
                    placeholder="Brief summary (max 150 characters)"
                    maxLength={150}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Appears in search results and previews</p>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Full Description <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="fullDescription"
                    placeholder="Detailed description about your book..."
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>
              </div>

              {/* Pricing & Details Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Pricing & Details</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Price ($) <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</div>
                      <input
                        name="price"
                        type="number"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        className="w-full pl-8 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Category <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        required
                      >
                        <option value="">Select Category</option>
                        {bookCategories.map((cat) => (
                          <option key={cat} value={cat.toLowerCase().replace(/\s+/g, '-')}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Format <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="format"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      required
                    >
                      {bookFormats.map((format) => (
                        <option key={format} value={format}>{format}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">ISBN</label>
                    <input
                      name="isbn"
                      placeholder="ISBN number"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Pages</label>
                    <input
                      name="pages"
                      type="number"
                      placeholder="Number of pages"
                      min="0"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Language</label>
                    <select
                      name="language"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    >
                      {languages.map((lang) => (
                        <option key={lang} value={lang}>{lang}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Media & Additional Info Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <ImageIcon className="h-5 w-5 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Media & Additional Info</h3>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Cover Image URL <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      name="imageUrl"
                      placeholder="https://example.com/book-cover.jpg"
                      type="url"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Recommended: 1200x1800 pixels, JPEG or PNG</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Priority</label>
                    <input
                      name="priority"
                      placeholder="Featured, New Release, etc."
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Relevant Field</label>
                    <input
                      name="relevantField"
                      placeholder="Keywords or tags"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Seller Information Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-5 w-5 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Seller Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Seller Email</label>
                    <input
                      name="sellerEmail"
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-400 cursor-not-allowed"
                      value={user?.emailAddresses?.[0]?.emailAddress || ""}
                      readOnly
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Seller Username</label>
                    <input
                      name="sellerUsername"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-400 cursor-not-allowed"
                      value={user?.fullName || user?.username || ""}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-700">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-700 cursor-not-allowed'
                      : 'bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Publishing Book...
                    </>
                  ) : (
                    <>
                      <Upload className="h-5 w-5" />
                      Publish E-Book
                    </>
                  )}
                </button>
                
                <p className="text-center text-gray-400 text-sm mt-4">
                  By publishing, you agree to our{" "}
                  <a href="/terms" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    Terms of Service
                  </a>
                  {" "}and{" "}
                  <a href="/policies" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    Content Policies
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Tips Card */}
        <div className="mt-8 bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Tag className="h-5 w-5 text-indigo-400" />
            Tips for Better Listings
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5"></div>
              Use high-quality cover images (minimum 1200x1800 pixels)
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5"></div>
              Write compelling descriptions that highlight unique selling points
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5"></div>
              Choose accurate categories and tags for better discoverability
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5"></div>
              Consider offering a free preview chapter to attract readers
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;