"use client"
import React from 'react'
import { 
    BookOpen, 
    Users, 
    Globe, 
    Award, 
    Shield, 
    Heart, 
    TrendingUp, 
    Star,
    Sparkles,
    Target,
    Clock,
    Zap
} from 'lucide-react'

const AboutPage = () => {
    return (
        <div className="relative min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
                        <Sparkles className="h-4 w-4 text-indigo-400" />
                        <span className="text-sm font-medium text-indigo-300">Our Story</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        About <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">E-Reads</span>
                    </h1>
                    
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Welcome to the future of reading — where stories come alive in digital form, 
                        connecting authors and readers in a global literary community.
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-2xl overflow-hidden mb-12">
                    <div className="p-8 md:p-12">
                        {/* Introduction */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600">
                                    <BookOpen className="h-8 w-8 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Our Journey</h2>
                            </div>
                            
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Welcome to <span className="font-semibold text-indigo-300">E-Reads</span> — the premier digital platform 
                                where stories transcend boundaries and knowledge becomes accessible to all. 
                                Born from a passion for literature and technology, we've created a space 
                                where every voice can be heard and every story can be shared.
                            </p>
                            
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We believe that in the digital age, reading should be seamless, accessible, 
                                and sustainable. E-Reads bridges the gap between traditional publishing 
                                and modern technology, empowering both authors to share their visions and 
                                readers to discover worlds beyond imagination.
                            </p>
                        </div>

                        {/* Our Mission */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-600">
                                    <Target className="h-8 w-8 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                            </div>
                            
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Our mission is threefold: to <span className="font-semibold text-purple-300">democratize publishing</span>, 
                                to <span className="font-semibold text-pink-300">revolutionize reading</span>, and to 
                                <span className="font-semibold text-blue-300"> connect literary communities</span> worldwide.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 transition-all">
                                    <h3 className="text-xl font-semibold text-white mb-3">For Authors</h3>
                                    <p className="text-gray-400">
                                        We provide independent authors with the tools, platform, and audience 
                                        to publish and monetize their work without traditional barriers.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all">
                                    <h3 className="text-xl font-semibold text-white mb-3">For Readers</h3>
                                    <p className="text-gray-400">
                                        We offer unlimited access to diverse literature, innovative reading features, 
                                        and a community of fellow book lovers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-linear-to-r from-blue-500 to-cyan-600">
                                    <Award className="h-8 w-8 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Why Choose E-Reads?</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        icon: <Shield className="h-6 w-6" />,
                                        title: "Secure Platform",
                                        description: "DRM protection ensures fair compensation for authors while protecting your purchases",
                                        color: "from-green-500 to-emerald-600"
                                    },
                                    {
                                        icon: <Globe className="h-6 w-6" />,
                                        title: "Global Access",
                                        description: "Read anywhere, anytime, on any device. Your library travels with you",
                                        color: "from-blue-500 to-cyan-600"
                                    },
                                    {
                                        icon: <TrendingUp className="h-6 w-6" />,
                                        title: "Author Support",
                                        description: "Higher royalty rates and direct reader engagement for creators",
                                        color: "from-purple-500 to-pink-600"
                                    },
                                    {
                                        icon: <Zap className="h-6 w-6" />,
                                        title: "Instant Delivery",
                                        description: "Get your books immediately after purchase, no waiting required",
                                        color: "from-orange-500 to-yellow-600"
                                    }
                                ].map((feature, index) => (
                                    <div 
                                        key={index}
                                        className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className={`inline-flex p-3 rounded-xl bg-linear-to-r ${feature.color} mb-4`}>
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-white text-center mb-8">Our Impact in Numbers</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { value: "50K+", label: "E-Books", icon: "📚", color: "text-indigo-300" },
                                    { value: "10K+", label: "Authors", icon: "✍️", color: "text-purple-300" },
                                    { value: "120+", label: "Countries", icon: "🌎", color: "text-blue-300" },
                                    { value: "4.8/5", label: "Rating", icon: "⭐", color: "text-yellow-300" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-2xl mb-2">{stat.icon}</div>
                                        <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Core Values */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-linear-to-r from-pink-500 to-rose-600">
                                    <Heart className="h-8 w-8 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Our Values</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: "🤝",
                                        title: "Community First",
                                        description: "We believe in building meaningful connections between authors and readers"
                                    },
                                    {
                                        icon: "💡",
                                        title: "Innovation",
                                        description: "Constantly evolving to enhance the digital reading experience"
                                    },
                                    {
                                        icon: "🌱",
                                        title: "Sustainability",
                                        description: "Reducing paper waste while preserving the art of storytelling"
                                    }
                                ].map((value, index) => (
                                    <div 
                                        key={index}
                                        className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-pink-500/50 transition-all"
                                    >
                                        <div className="text-3xl mb-3">{value.icon}</div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                                        <p className="text-gray-400 text-sm">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col items-center gap-6 max-w-2xl mx-auto">
                        <div className="p-4 rounded-2xl bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                            <BookOpen className="h-12 w-12 text-indigo-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Join Our Literary Revolution
                        </h2>
                        
                        <p className="text-gray-400 text-lg">
                            Whether you're an author ready to share your story or a reader eager to discover 
                            new worlds — your journey begins here.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <a 
                                href="/Books"
                                className="px-8 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold transition-all duration-300"
                            >
                                Start Reading
                            </a>
                            <a 
                                href="/SellBooks"
                                className="px-8 py-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 text-white font-semibold transition-all duration-300"
                            >
                                Start Publishing
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage