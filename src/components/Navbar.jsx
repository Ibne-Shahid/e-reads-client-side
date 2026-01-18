"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    useUser,
    SignInButton,
    SignUpButton,
    SignOutButton,
} from "@clerk/nextjs";
import { Menu, X, BookOpen, User, ChevronDown } from "lucide-react";

export default function Navbar() {
    const { isSignedIn, user, isLoaded } = useUser();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Books", href: "/Books" },
        { name: "About", href: "/AboutUs" },
        { name: "Contact", href: "/ContactUS" }
    ];

    return (
        <nav className="bg-linear-to-b from-gray-900 to-gray-800 shadow-xl sticky top-0 z-50 font-sans text-white border-b border-indigo-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-linear-to-r from-indigo-500 to-purple-600 p-2 rounded-lg">
                                <BookOpen className="h-6 w-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    E-Reads
                                </span>
                            </span>
                        </Link>
                        
                       
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.slice(0, 5).map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-1.5 transition-all duration-200 hover:text-indigo-300 ${
                                    pathname === item.href
                                        ? "text-indigo-400 font-semibold border-b-2 border-indigo-400"
                                        : "text-gray-300"
                                }`}
                            >
                                <span className="text-sm">{item.name}</span>
                            </Link>
                        ))}
                        
                        {/* User Actions */}
                        <div className="flex items-center space-x-4">
                            {isSignedIn ? (
                                <>
                                    <div className="relative">
                                        <button
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-200"
                                        >
                                            <div className="h-8 w-8 rounded-full bg-linear-to-r from-indigo-400 to-purple-500 flex items-center justify-center">
                                                <User className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm">{user?.firstName || "Account"}</span>
                                            <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                                        </button>
                                        
                                        {dropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-2 z-50">
                                                <Link
                                                    href="/profile"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    Profile
                                                </Link>
                                                <Link
                                                    href="/profile"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    Sell Books
                                                </Link>
                                                <Link
                                                    href="/my-books"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    Manage Books
                                                </Link>
                                                <Link
                                                    href="/wishlist"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    My Books
                                                </Link>
                                                <div className="border-t border-gray-700 my-2"></div>
                                                <div className="px-4 py-2">
                                                    <SignOutButton>
                                                        <button className="w-full text-left text-sm text-red-400 hover:text-red-300 transition-colors">
                                                            Sign Out
                                                        </button>
                                                    </SignOutButton>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <SignInButton>
                                        <button className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-200 text-sm font-medium">
                                            Sign In
                                        </button>
                                    </SignInButton>
                                    <SignUpButton>
                                        <button className="px-4 py-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 text-sm font-medium">
                                            Sign Up Free
                                        </button>
                                    </SignUpButton>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                        >
                            {mobileOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileOpen && (
                    <div className="lg:hidden bg-gray-800/95 backdrop-blur-lg border-t border-gray-700">
                        <div className="py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors ${
                                        pathname === item.href
                                            ? "bg-indigo-500/20 text-indigo-400 border-l-4 border-indigo-400"
                                            : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                                    }`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                            
                            <div className="border-t border-gray-700 my-2"></div>
                            
                            {isSignedIn ? (
                                <>
                                    <Link
                                        href="/my-books"
                                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <span>My Books</span>
                                    </Link>
                                    <Link
                                        href="/my-books"
                                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <span>Sell Books</span>
                                    </Link>
                                    <Link
                                        href="/my-books"
                                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <span>Manage Books</span>
                                    </Link>
                                    <Link
                                        href="/profile"
                                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <span className="text-lg">👤</span>
                                        <span>Profile</span>
                                    </Link>
                                    <div className="px-4 py-3">
                                        <SignOutButton>
                                            <button className="flex items-center space-x-3 text-sm text-red-400 hover:text-red-300 transition-colors">
                                                <span className="text-lg">🚪</span>
                                                <span>Sign Out</span>
                                            </button>
                                        </SignOutButton>
                                    </div>
                                </>
                            ) : (
                                <div className="px-4 py-3 space-y-3">
                                    <SignInButton>
                                        <button 
                                            className="w-full px-4 py-3 rounded-lg border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-200 text-sm font-medium text-center"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            Sign In
                                        </button>
                                    </SignInButton>
                                    <SignUpButton>
                                        <button 
                                            className="w-full px-4 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 text-sm font-medium text-center"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            Sign Up Free
                                        </button>
                                    </SignUpButton>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}