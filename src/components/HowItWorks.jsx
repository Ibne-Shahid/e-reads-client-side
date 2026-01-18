"use client"
import Link from "next/link";
import Button from "./Button";
import { useUser } from "@clerk/nextjs";

export default function HowItWorks() {
    const {isSignedIn} = useUser()
  const steps = [
    {
      id: 1,
      title: "Browse Homemade Foods",
      desc: "Discover delicious homemade dishes prepared by local home cooks. Filter by cuisine, location, or dietary needs.",
      icon: "🍽️",
    },
    {
      id: 2,
      title: "Place Your Order",
      desc: "Order securely through TasteHouse. Choose pickup or home delivery if available in your area.",
      icon: "🛒",
    },
    {
      id: 3,
      title: "Enjoy Fresh Homemade Meals",
      desc: "Receive your order fresh and ready to enjoy. Support local cooks while tasting authentic flavors.",
      icon: "🏡",
    },
    {
      id: 4,
      title: "Become a Seller",
      desc: "Have a passion for cooking? Start selling your homemade dishes and earn from your kitchen.",
      icon: "👩‍🍳",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section data-aos='fade-up' className="py-16 bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">How It Works</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            TasteHouse connects food lovers with passionate home cooks.
            Here's how our platform works from browsing to enjoying your meal.
          </p>
        </div>
      </section>

      <section data-aos='fade-up' className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-aos='fade-up' className="py-20 bg-linear-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">Ready to Taste Something New?</h2>
          <p className="mt-3 text-white/90">
            Start exploring homemade foods or join as a home chef today.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/Foods">
              <Button className="bg-white text-red-600 rounded-lg font-medium hover:bg-gray-100 transition">Browse Foods</Button>
            </Link>
            <Link href={isSignedIn?'/AddFoods':'/sign-in'}>
              <Button className="border border-white text-white rounded-lg font-medium hover:bg-white/20 transition">Become a Seller</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
