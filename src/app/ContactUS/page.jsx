"use client"
import React, { useState } from 'react'
import { 
    Mail, 
    Phone, 
    MapPin, 
    Send, 
    Clock, 
    Shield, 
    MessageSquare,
    User,
    HelpCircle,
    CheckCircle,
    Globe
} from 'lucide-react'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '', category: 'general' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="relative min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
                        <MessageSquare className="h-4 w-4 text-indigo-400" />
                        <span className="text-sm font-medium text-indigo-300">Get in Touch</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Contact <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">E-Reads</span>
                    </h1>
                    
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Have questions about reading, publishing, or need support? 
                        Our team is here to help you on your literary journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {[
                            {
                                icon: <Mail className="h-6 w-6" />,
                                title: "Email Support",
                                details: ["support@ereads.com", "publish@ereads.com"],
                                description: "We respond within 24 hours",
                                color: "from-indigo-500 to-blue-500"
                            },
                            {
                                icon: <Phone className="h-6 w-6" />,
                                title: "Phone Support",
                                details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
                                description: "Mon-Fri, 9AM-6PM EST",
                                color: "from-purple-500 to-pink-500"
                            },
                            {
                                icon: <MapPin className="h-6 w-6" />,
                                title: "Our Office",
                                details: ["San Francisco, CA", "Remote Team Worldwide"],
                                description: "Serving readers globally",
                                color: "from-blue-500 to-cyan-500"
                            }
                        ].map((contact, index) => (
                            <div 
                                key={index}
                                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className={`inline-flex p-3 rounded-xl bg-linear-to-r ${contact.color} mb-4`}>
                                    {contact.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                                <div className="space-y-1 mb-2">
                                    {contact.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-300">{detail}</p>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500">{contact.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-10">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="inline-flex p-4 rounded-2xl bg-linear-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
                                        <CheckCircle className="h-12 w-12 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                                    <p className="text-gray-400 mb-8">
                                        Thank you for reaching out. Our team will respond to your inquiry within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Send Us a Message</h2>
                                        <p className="text-gray-400">
                                        Whether you're a reader with questions, an author seeking support, 
                                        or a publisher interested in partnership — we're here to help.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    <User className="inline h-4 w-4 mr-2" />
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    <Mail className="inline h-4 w-4 mr-2" />
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                                    placeholder="you@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                <HelpCircle className="inline h-4 w-4 mr-2" />
                                                Category
                                            </label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none"
                                            >
                                                <option value="general">General Inquiry</option>
                                                <option value="reader">Reader Support</option>
                                                <option value="author">Author Support</option>
                                                <option value="publisher">Publisher Inquiry</option>
                                                <option value="technical">Technical Support</option>
                                                <option value="billing">Billing Question</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                <MessageSquare className="inline h-4 w-4 mr-2" />
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                                placeholder="What is this regarding?"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Your Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none min-h-[150px]"
                                                placeholder="Please provide details about your inquiry..."
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                                                isSubmitting
                                                    ? 'bg-gray-700 cursor-not-allowed'
                                                    : 'bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-500/25'
                                            }`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Support & FAQ Section */}
                <div className="bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-3xl p-8 md:p-10">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-linear-to-r from-indigo-500/20 to-blue-500/20">
                                    <Clock className="h-5 w-5 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Response Time</h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                We aim to respond to all inquiries within 24 hours during business days. 
                                Urgent matters are prioritized.
                            </p>
                        </div>
                        
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-linear-to-r from-purple-500/20 to-pink-500/20">
                                    <Shield className="h-5 w-5 text-pink-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Privacy First</h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Your information is secure and confidential. We never share your data 
                                with third parties without consent.
                            </p>
                        </div>
                        
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-linear-to-r from-blue-500/20 to-cyan-500/20">
                                    <Globe className="h-5 w-5 text-cyan-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Global Support</h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Our support team works across time zones to assist readers and authors 
                                from around the world.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-700">
                        <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "How do I publish my book on E-Reads?",
                                    a: "Visit our publishing page and follow the step-by-step guide to upload your manuscript."
                                },
                                {
                                    q: "What file formats do you support?",
                                    a: "We support PDF, EPUB, MOBI, and DOCX formats for e-book publishing."
                                },
                                {
                                    q: "How do I get technical support?",
                                    a: "For technical issues, email tech@ereads.com with details of your problem."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-gray-800/30 rounded-xl p-4">
                                    <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                                    <p className="text-gray-400 text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-center">
                            <a 
                                href="/faq"
                                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                                View all FAQs
                                <span className="text-lg">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage