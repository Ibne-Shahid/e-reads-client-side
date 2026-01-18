"use client"

import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function CustomerTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Avid Reader",
      text: "The e-book collection here is phenomenal! I discovered authors I never would have found otherwise. The reading experience is seamless across all my devices.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1",
      booksPurchased: 42,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Enthusiast",
      text: "As someone who travels frequently, having my entire library in digital format is a game-changer. The download speeds are impressive and the formatting is always perfect.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5",
      booksPurchased: 28,
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "University Professor",
      text: "The academic collection is extensive and well-curated. My students love the accessibility features and the ability to highlight and take notes digitally.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=8",
      booksPurchased: 67,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Author & Publisher",
      text: "Publishing my books on this platform was straightforward. The analytics dashboard helps me understand my readers better. Royalty payments are always on time!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=11",
      booksPurchased: 15,
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      role: "Book Club Host",
      text: "Our book club switched to e-books from this platform and it's been amazing! We can all read the same book instantly and the discussion prompts are helpful.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=47",
      booksPurchased: 89,
    },
    {
      id: 6,
      name: "James Miller",
      role: "Audiobook Lover",
      text: "The audiobook quality is studio-grade. I listen during my commute and the narration brings stories to life. Sync feature between ebook and audiobook is brilliant.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=32",
      booksPurchased: 53,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-4">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Reader Reviews</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Readers Say</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join thousands of satisfied readers who transformed their reading experience
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { label: "Happy Readers", value: "10K+", color: "from-indigo-400 to-purple-400" },
            { label: "Books Purchased", value: "50K+", color: "from-purple-400 to-pink-400" },
            { label: "Countries", value: "120+", color: "from-pink-400 to-blue-400" },
            { label: "Avg. Rating", value: "4.8/5", color: "from-blue-400 to-indigo-400" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-indigo-500/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`text-2xl md:text-3xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-indigo-400/30 group-hover:text-indigo-400/50 transition-colors" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-gray-600"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-400 ml-2">{testimonial.rating}.0</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-xs text-gray-500">
                      {testimonial.booksPurchased} books purchased
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        

        {/* Trust Badges */}
        <div className="bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Trusted by Readers Worldwide</h3>
              <p className="text-gray-400 text-sm">
                Our platform maintains 99.9% uptime and industry-leading security standards
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              {[
                { label: "Secure Payments", icon: "🔒" },
                { label: "DRM Protected", icon: "🛡️" },
                { label: "24/7 Support", icon: "🔄" },
              ].map((badge, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <div className="text-xs text-gray-400">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}