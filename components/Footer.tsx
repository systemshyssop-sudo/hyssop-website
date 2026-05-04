"use client";

import Link from "next/link";
import { FaWhatsapp, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#051129] text-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center mb-12">
          <p className="text-[#8cc63f] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            Contact Hyssop
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let’s hold your hand to the <br />
            <span className="text-[#8cc63f]">perfect investment.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
            Reach us via phone, WhatsApp, or email — or visit one of our offices for guided property investment support.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-[#8cc63f] mb-10">
            <FaEnvelope className="text-sm" />
            <a href="mailto:info@hyssopproperties.com" className="hover:underline font-medium">
              info@hyssopproperties.com
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="https://wa.me/254707666000" className="flex items-center gap-2 bg-[#8cc63f] text-[#051129] px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition">
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </a>
            <a href="tel:+254707666000" className="flex items-center gap-2 border border-white/30 bg-white/5 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition">
              <FaPhone className="text-xs" />
              Call Us Now
            </a>
          </div>
        </div>

        {/* Bottom Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Quick Links Left */}
          <div className="lg:col-span-3">
            <h3 className="text-[#8cc63f] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
              <div className="space-y-4">
                <Link href="/about" className="block text-sm font-bold hover:text-[#8cc63f]">About Us</Link>
                <Link href="/properties" className="block text-sm font-bold hover:text-[#8cc63f]">Properties</Link>
                <Link href="/diaspora" className="block text-sm font-bold hover:text-[#8cc63f]">Diaspora</Link>
              </div>
              <div className="space-y-4">
                <Link href="/testimonials" className="block text-sm font-bold hover:text-[#8cc63f]">Testimonials</Link>
                <Link href="/awards" className="block text-sm font-bold hover:text-[#8cc63f]">Awards</Link>
                <Link href="/events" className="block text-sm font-bold hover:text-[#8cc63f]">Events</Link>
              </div>
            </div>
          </div>

          {/* Offices Right */}
          <div className="lg:col-span-9">
             <h3 className="text-[#8cc63f] text-center text-[10px] font-bold tracking-[0.2em] uppercase mb-8">Our Offices</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nairobi Office Card */}
                <div className="bg-[#0a1b3d] border border-white/5 p-8 rounded-2xl">
                  <p className="text-[#8cc63f] text-[10px] font-bold tracking-widest uppercase mb-4">Nairobi</p>
                  <h4 className="text-xl font-bold mb-6">Nairobi HQ</h4>
                  <div className="space-y-4 text-xs">
                    <div>
                      <p className="text-white/40 font-bold uppercase mb-1">Phone</p>
                      <p className="text-white text-sm">+254 707 666 000</p>
                    </div>
                    <div>
                      <p className="text-white/40 font-bold uppercase mb-1">Address</p>
                      <p className="text-white text-sm leading-relaxed">Hyssop Center, Ridgeways Springs,<br />Kiambu Road</p>
                    </div>
                  </div>
                </div>

                {/* Nakuru Office Card */}
                <div className="bg-[#0a1b3d] border border-white/5 p-8 rounded-2xl">
                  <p className="text-[#8cc63f] text-[10px] font-bold tracking-widest uppercase mb-4">Nakuru</p>
                  <h4 className="text-xl font-bold mb-6">Nakuru Office</h4>
                  <div className="space-y-4 text-xs">
                    <div>
                      <p className="text-white/40 font-bold uppercase mb-1">Phone</p>
                      <p className="text-white text-sm">+254 758 707 050</p>
                    </div>
                    <div>
                      <p className="text-white/40 font-bold uppercase mb-1">Address</p>
                      <p className="text-white text-sm leading-relaxed">Tower One, 3rd Floor, Moi Rd</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/30">© {new Date().getFullYear()} Hyssop Properties. All Rights Reserved.</p>
          <div className="flex gap-6 text-white/40">
            <FaFacebookF className="hover:text-[#8cc63f] cursor-pointer" />
            <FaInstagram className="hover:text-[#8cc63f] cursor-pointer" />
            <FaXTwitter className="hover:text-[#8cc63f] cursor-pointer" />
            <FaTiktok className="hover:text-[#8cc63f] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}