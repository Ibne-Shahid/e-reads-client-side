"use client"
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-16 pb-6">
      <div data-aos='fade-up' className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <Link href="/" className="text-xl font-bold">
            <p className="text-4xl font-bold bg-linear-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">TasteHouse</p>
          </Link>
          <p className="mt-3 text-sm text-gray-400">
            Where every bite feels like home. Fresh, flavorful, unforgettable.
          </p>

          
          <div className="flex space-x-4 mt-4">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram/><i className="fab fa-instagram"></i></a>
            <a href="#"><FaTwitter/><i className="fab fa-x-twitter"></i></a>
            <a href="#"><FaTiktok/><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#menu" className="hover:text-white transition">Menu</a></li>
            <li><a href="#about" className="hover:text-white">Our Story</a></li>
            <li><a href="#reservations" className="hover:text-white transition">Reservations</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Opening Hours</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Sat–Tue: 10am – 9pm</li>
            <li>Wed–Thu: 10am – 11pm</li>
            <li>Friday: Closed</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Join our community for offers & updates.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded focus:ring-2 focus:ring-amber-400 outline-none"
            />
            <Button type="submit" className="py-2 bg-primary text-white font-semibold rounded hover:bg-amber-300 transition">Subscribe</Button>
          </form>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} TasteHouse Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
