"use client"
import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-100 to-rose-200 py-16 px-6">
      
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600">
          About TasteHouse
        </h1>

        <p className="text-lg mt-6 text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-orange-600">TasteHouse</span> — the home for authentic 
          homemade foods! We believe the best meals are made in real kitchens by passionate people, 
          not in factories. TasteHouse is a community where anyone can 
          <span className="font-semibold"> sell their homemade dishes</span> and where food lovers can 
          <span className="font-semibold"> buy fresh, real, homemade meals.</span>
        </p>

        <p className="text-lg mt-4 text-gray-700 leading-relaxed">
          Whether it's a family recipe passed down through generations or a creative dish from a talented 
          home chef — TasteHouse brings communities together through real flavor.
        </p>

        <h2 className="text-3xl font-bold text-orange-600 mt-12">Our Mission</h2>
        <p className="text-lg mt-3 text-gray-700 leading-relaxed">
          Our mission is simple: <span className="font-semibold">empower home cooks</span>, celebrate handmade food, 
          and make real homemade flavors accessible to everyone.
        </p>

        <h2 className="text-3xl font-bold text-orange-600 mt-12">Why TasteHouse?</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-orange-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-orange-700">🍲 Support Home Chefs</h3>
            <p className="text-gray-700 mt-2">Help local cooks grow with every order.</p>
          </div>

          <div className="p-6 bg-orange-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-orange-700">✨ Unique Homemade Flavors</h3>
            <p className="text-gray-700 mt-2">Taste food made with love, not machines.</p>
          </div>

          <div className="p-6 bg-orange-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-orange-700">💰 Affordable & Fresh</h3>
            <p className="text-gray-700 mt-2">Real food at fair prices, directly from kitchens.</p>
          </div>

          <div className="p-6 bg-orange-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-orange-700">📦 Easy, Safe Ordering</h3>
            <p className="text-gray-700 mt-2">A smooth buying and selling experience.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-orange-600 mt-12 text-center">
          Join the TasteHouse Family
        </h2>

        <p className="text-lg mt-4 text-gray-700 leading-relaxed text-center">
          Whether you're a home chef ready to share your food,  
          or a food lover searching for real homemade taste —  
          <span className="font-semibold text-orange-600"> TasteHouse is your place.</span>
        </p>

      </div>
    </div>
  )
}

export default AboutPage
