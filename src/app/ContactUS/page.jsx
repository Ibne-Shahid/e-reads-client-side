"use client"
import React from 'react'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-100 to-orange-100 py-16 px-6">
      
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600">
          Contact Us
        </h1>

        <p className="text-lg mt-4 text-gray-700 text-center leading-relaxed">
          Have questions, suggestions, or need support?  
          We're here to help you on your TasteHouse journey!
        </p>

       
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-orange-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-orange-700">📍 Address</h2>
            <p className="text-gray-700 mt-2">TasteHouse HQ</p>
            <p className="text-gray-700">Dhaka, Bnagladesh</p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-orange-700">📧 Email</h2>
            <p className="text-gray-700 mt-2">support@tastehouse.com</p>
          </div>
        </div>

        
        <h2 className="text-3xl font-bold text-orange-600 mt-12">Send us a Message</h2>

        <form className="mt-6 grid gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white w-full py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  )
}

export default ContactPage
