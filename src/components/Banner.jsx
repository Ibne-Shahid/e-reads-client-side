"use client";

import Link from "next/link";
import Button from "./Button";
import { useUser } from "@clerk/nextjs";

export default function Hero() {
    const {isSignedIn} = useUser()
    return (
        <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center text-center">
            
            <div className="absolute inset-0 bg-black/30"></div>

            <div data-aos='fade-up' className="relative z-10 max-w-2xl px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    Homemade Food,
                    <span className="text-yellow-400"> Delivered Fresh</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 mt-4">
                    Buy delicious home-cooked meals or start selling your own dishes.
                    Made with love, shared with community.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link href="/Foods">
                        <Button className="bg-primary hover:bg-orange-600 text-white">
                            Order Homemade Food
                        </Button>
                    </Link>

                    <Link href={isSignedIn?'/AddFoods':'/sign-in'}>
                        <Button className="bg-secondary hover:bg-gray-800 text-white">
                            Start Selling
                        </Button>
                    </Link>

                    
                </div>
            </div>
        </section>
    );
}
