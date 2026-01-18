"use client"
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BookOpen, Mail, Phone, MapPin, ChevronRight, Shield, Award, Globe, Heart } from "lucide-react";
import Button from "./Button";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  // Fix hydration by setting year on client side only
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  // Client-side only component for dynamic content
  const DynamicYear = () => {
    const [year, setYear] = useState("");
    
    useEffect(() => {
      setYear(new Date().getFullYear().toString());
    }, []);
    
    if (!year) return <span className="inline-block w-16 h-4 bg-gray-700 rounded animate-pulse"></span>;
    
    return <>{year}</>;
  };

  return (
    <footer className="relative bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-6 overflow-hidden">
      {/* Background Elements - Static, no dynamic values */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div data-aos='fade-up' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-linear-to-r from-indigo-500 to-purple-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <Link href="/" className="text-3xl font-bold tracking-tight">
                <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  E-Reads
                </span>
              </Link>
            </div>
            <p className="mt-3 text-gray-400 max-w-md">
              Your gateway to a world of digital literature. Discover, read, and share stories 
              that inspire. Join thousands of readers in our growing community.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {[
                { icon: <FaFacebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <FaInstagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <FaTwitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <FaTiktok className="h-5 w-5" />, label: "TikTok" },
                { icon: <FaYoutube className="h-5 w-5" />, label: "YouTube" },
                { icon: <FaLinkedin className="h-5 w-5" />, label: "LinkedIn" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-indigo-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Browse Books", href: "/browse" },
                { name: "Categories", href: "/categories" },
                { name: "Best Sellers", href: "/best-sellers" },
                { name: "New Releases", href: "/new-releases" },
                { name: "Free Books", href: "/free-books" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <div className="h-1 w-1 rounded-full bg-gray-600 group-hover:bg-indigo-400"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Authors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Award className="h-4 w-4 text-purple-400" />
              For Authors
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Publish Your Book", href: "/publish" },
                { name: "Author Dashboard", href: "/dashboard" },
                { name: "Royalty Information", href: "/royalties" },
                { name: "Author Resources", href: "/resources" },
                { name: "Success Stories", href: "/success-stories" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-purple-300 transition-colors flex items-center gap-2 group"
                  >
                    <div className="h-1 w-1 rounded-full bg-gray-600 group-hover:bg-purple-400"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Mail className="h-4 w-4 text-pink-400" />
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Get weekly book recommendations, author interviews, and exclusive offers.
            </p>
            <form 
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission
              }}
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full py-3 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Subscribe Now
              </Button>
            </form>
            
            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-400">Secure Payment</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Globe className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-gray-400">Worldwide Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-gray-800">
          {[
            {
              icon: <Phone className="h-5 w-5" />,
              title: "Contact Us",
              content: "support@ereads.com",
              sub: "24/7 Customer Support"
            },
            {
              icon: <Mail className="h-5 w-5" />,
              title: "Business Inquiries",
              content: "publish@ereads.com",
              sub: "For Authors & Publishers"
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              title: "Based In",
              content: "San Francisco, CA",
              sub: "Serving Readers Worldwide"
            }
          ].map((info, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-linear-to-r from-indigo-500/20 to-purple-500/20">
                {info.icon}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-300">{info.title}</h4>
                <p className="text-white font-semibold">{info.content}</p>
                <p className="text-xs text-gray-500 mt-1">{info.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                © <DynamicYear /> <span className="text-indigo-400 font-semibold">E-Reads</span>. 
                All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-xs text-gray-500">
                <Link href="/privacy" className="hover:text-indigo-300 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-indigo-300 transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-indigo-300 transition-colors">Cookie Policy</Link>
                <Link href="/accessibility" className="hover:text-indigo-300 transition-colors">Accessibility</Link>
                <Link href="/dmca" className="hover:text-indigo-300 transition-colors">DMCA</Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Heart className="h-4 w-4 text-red-400" />
              <span>Made with passion for readers everywhere</span>
            </div>
          </div>

          {/* App Download CTA - Client-side only check for loading state */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400 mb-3">Download our mobile app for better reading experience</p>
            <div className="flex justify-center gap-3">
              <button 
                className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white transition-all flex items-center gap-2"
                onClick={() => window.open('https://play.google.com/store', '_blank')}
              >
                <span className="text-2xl">📱</span>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
              <button 
                className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white transition-all flex items-center gap-2"
                onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
              >
                <span className="text-2xl">📱</span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}