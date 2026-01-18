"use client"

import { BookOpen, Shield, Globe, Download, Star, Users, Clock, Zap, Award, Headphones, Lock, TrendingUp } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      id: 1,
      icon: <BookOpen className="h-8 w-8" />,
      title: "Vast Digital Library",
      desc: "Access over 50,000+ e-books across all genres. From bestsellers to hidden gems, discover stories that captivate your imagination.",
      color: "from-indigo-500 to-blue-500",
      linear: "bg-linear-to-br from-indigo-500/20 to-blue-500/20"
    },
    {
      id: 2,
      icon: <Download className="h-8 w-8" />,
      title: "Instant Downloads",
      desc: "Get your books immediately after purchase. No waiting, no shipping fees. Start reading in seconds, not days.",
      color: "from-purple-500 to-pink-500",
      linear: "bg-linear-to-br from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      icon: <Globe className="h-8 w-8" />,
      title: "Read Anywhere",
      desc: "Sync your library across all devices. Continue reading on your phone, tablet, or computer – your progress is always saved.",
      color: "from-green-500 to-teal-500",
      linear: "bg-linear-to-br from-green-500/20 to-teal-500/20"
    },
    {
      id: 4,
      icon: <Shield className="h-8 w-8" />,
      title: "DRM Protected",
      desc: "Your purchases are secure with industry-standard protection. Authors get fair compensation while you enjoy lifetime access.",
      color: "from-blue-500 to-indigo-500",
      linear: "bg-linear-to-br from-blue-500/20 to-indigo-500/20"
    },
    {
      id: 5,
      icon: <Headphones className="h-8 w-8" />,
      title: "Audiobook Integration",
      desc: "Switch seamlessly between reading and listening. Professional narrations bring stories to life during your commute or workout.",
      color: "from-pink-500 to-red-500",
      linear: "bg-linear-to-br from-pink-500/20 to-red-500/20"
    },
    {
      id: 6,
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Search",
      desc: "Find exactly what you're looking for with our intelligent search. Filter by genre, author, rating, or reading time.",
      color: "from-orange-500 to-yellow-500",
      linear: "bg-linear-to-br from-orange-500/20 to-yellow-500/20"
    },
    {
      id: 7,
      icon: <Star className="h-8 w-8" />,
      title: "Curated Recommendations",
      desc: "Personalized suggestions based on your reading history. Discover new authors and genres you'll love.",
      color: "from-yellow-500 to-amber-500",
      linear: "bg-linear-to-br from-yellow-500/20 to-amber-500/20"
    },
    {
      id: 8,
      icon: <Clock className="h-8 w-8" />,
      title: "No Expiration",
      desc: "Once you own an e-book, it's yours forever. Re-read your favorites anytime without additional costs.",
      color: "from-teal-500 to-emerald-500",
      linear: "bg-linear-to-br from-teal-500/20 to-emerald-500/20"
    },
    {
      id: 9,
      icon: <Users className="h-8 w-8" />,
      title: "Community Features",
      desc: "Join reading groups, share reviews, and discuss books with fellow readers from around the world.",
      color: "from-violet-500 to-purple-500",
      linear: "bg-linear-to-br from-violet-500/20 to-purple-500/20"
    }
  ];

  const stats = [
    { value: "50K+", label: "E-Books Available", icon: "📚" },
    { value: "120+", label: "Countries Reached", icon: "🌎" },
    { value: "4.8/5", label: "Reader Rating", icon: "⭐" },
    { value: "24/7", label: "Access Support", icon: "🔄" }
  ];

  return (
    <main className="relative min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-gray-800" data-aos='fade-up'>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <Award className="h-4 w-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">#1 E-Book Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Choose <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">E-Reads?</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Experience the future of reading with our platform designed for digital book lovers.
              Instant access, endless possibilities.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-indigo-500/50 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24" data-aos='fade-up'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything You Need for <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Digital Reading</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We've built the perfect ecosystem for modern readers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1`}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  {/* linear Background */}
                  <div className={`absolute inset-0 ${feature.linear} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${feature.color} mb-6`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                    
                    {/* Hover Indicator */}
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-0.5 w-8 bg-linear-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">Learn more →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 md:mt-24 text-center">
              <div className="bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 md:p-12">
                <div className="max-w-2xl mx-auto">
                  <Lock className="h-12 w-12 text-indigo-400 mx-auto mb-6" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Your Reading Journey Starts Here
                  </h3>
                  <p className="text-gray-400 mb-8">
                    Join thousands of readers who have transformed their reading experience.
                    Start with your first book for free, no credit card required.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                      Start Free Trial
                    </button>
                    <button className="px-8 py-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 text-white font-semibold transition-all duration-300">
                      Browse All Features
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-sm">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">100K+ Readers</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}