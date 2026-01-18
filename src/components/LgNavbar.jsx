"use client"
import Link from 'next/link';
import React from 'react'
import { RxAvatar } from "react-icons/rx";
import Button from './Button';
import { toast } from 'react-toastify';

const LgNavbar = ({ navItems, pathname, SignInButton, SignUpButton, SignOutButton, setDropdownOpen, dropdownOpen, user, isSignedIn, isLoaded }) => {
    return (
        <div className="hidden lg:flex items-center space-x-8 text-lg">
            {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`relative group ${isActive ? "text-gray-200 font-semibold" : "text-white"
                            }`}
                    >
                        <span
                            className={`transition duration-200 ${isActive
                                ? "text-gray-200"
                                : "group-hover:text-gray-300"
                                }`}
                        >
                            {item.name}
                        </span>


                        <span
                            className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${isActive
                                ? "w-full bg-gray-300"
                                : "w-0 group-hover:w-full bg-gray-300"
                                }`}
                        ></span>
                    </Link>
                );
            })}

            <div className="hidden lg:flex items-center space-x-4">
                {!isLoaded ? (
                    <div className="w-10 h-10 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin" />
                ) : !isSignedIn ? (
                    <>
                        <RxAvatar size={32} className="opacity-75" />
                        <SignInButton mode="modal">
                            <Button className="bg-primary hover:bg-orange-600 transition-all shadow">
                                Login
                            </Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button className="bg-secondary hover:bg-gray-800 transition-all shadow">
                                Register
                            </Button>
                        </SignUpButton>
                    </>
                ) : (
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 hover:opacity-80 transition"
                        >
                            <img
                                src={user.imageUrl}
                                className="w-10 h-10 rounded-full border-2 border-white shadow"
                            />
                        </button>
                        {
                            dropdownOpen && (
                                <div className="absolute right-0 mt-3 w-56 bg-white/90 backdrop-blur-xl shadow-2xl rounded-xl text-black overflow-hidden border border-gray-200 animate-fadeIn">

                                    <div className="p-4 border-b bg-gray-50">
                                        <p className="font-semibold">{user.fullName}</p>
                                        <p className="text-sm text-gray-600">
                                            {user.primaryEmailAddress?.emailAddress}
                                        </p>
                                    </div>

                                    <Link
                                        href="/user-profile"
                                        className="block px-4 py-2 hover:bg-gray-100 transition font-medium">
                                        Profile
                                    </Link>

                                    <Link href="/AddFoods" className="block px-4 py-2 hover:bg-gray-100 transition">
                                        Add Food
                                    </Link>

                                    <Link href="/ManageFoods" className="block px-4 py-2 hover:bg-gray-100 transition">
                                        Manage Foods
                                    </Link>

                                    <Link href="/MyOrders" className="block px-4 py-2 hover:bg-gray-100 transition">
                                        My Orders
                                    </Link>

                                    <SignOutButton redirectUrl="/">
                                        <button onClick={() => toast.success("Logged out!")} className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 transition">
                                            Logout
                                        </button>
                                    </SignOutButton>

                                </div>
                            )
                        }
                    </div>
                )}
            </div>

        </div>
    )
}

export default LgNavbar

