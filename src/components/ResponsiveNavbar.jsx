"use client"
import React from 'react'
import Button from './Button';
import Link from 'next/link';

const ResponsiveNavbar = ({navItems, pathname, SignInButton, SignUpButton, SignOutButton, user, isSignedIn, mobileOpen}) => {
    return (
        <div>
            {mobileOpen && (
                <div className="lg:hidden pb-3 space-y-4 mt-2 bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20 animate-fadeIn">

                    {!isSignedIn ? (
                        <>
                            <SignInButton mode="modal">
                                <Button className="w-full bg-gray-300 hover:bg-gray-400 shadow">
                                    Login
                                </Button>
                            </SignInButton>

                            <SignUpButton mode="modal">
                                <Button className="w-full bg-gray-400 hover:bg-gray-500 shadow">
                                    Register
                                </Button>
                            </SignUpButton>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-3 border-b pb-3">
                                <img
                                    src={user.imageUrl}
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <div>
                                    <p className="font-semibold">{user.fullName}</p>
                                    <p className="text-sm text-gray-200">
                                        {user.primaryEmailAddress?.emailAddress}
                                    </p>
                                    <Link href="/user-profile"
                                    className="block px-4 py-2 hover:bg-gray-100 transition font-medium">
                                    Profile
                                </Link>
                                </div>
                            </div>

                            {navItems.map((item) => {
                                const isActive = pathname === item.href;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`block ${isActive
                                            ? "text-gray-200 font-semibold"
                                            : "hover:text-gray-300"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}

                            <SignOutButton redirectUrl="/">
                                <button className="block w-full text-left text-red-300 hover:text-red-500 transition">
                                    Logout
                                </button>
                            </SignOutButton>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default ResponsiveNavbar