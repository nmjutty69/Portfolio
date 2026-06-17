import { motion } from 'motion/react';
import { ArrowRight, Linkedin, Github, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacts" className="py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 text-sm font-medium tracking-wide bg-gray-800">
              Contact Me
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-400">
              <span className="text-white">Ways to</span> Connect
            </h2>
          </div>
          
          <div className="mt-16 bg-[#1a1a1a] rounded-3xl p-8 border border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-700">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80" alt="Muhammad Nauman Malik" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold leading-tight">Muhammad Nauman<br/>Malik</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-black">React.JS</span>
              <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-brand-blue text-white">Full Stack</span>
              <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-brand-green text-black">AI & LLMs</span>
              <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-brand-purple text-white">Software Engineer</span>
            </div>
          </div>
          
          <div className="text-gray-500 text-sm mt-8 flex justify-between items-center w-full max-w-[320px]">
            <span>© 2026 Nauman. All rights reserved.</span>
            <span>Lahore, PK</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-medium">naumandev001@gmail.com</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Github className="w-4 h-4" /></a>
              <a href="mailto:naumandev001@gmail.com" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Mail className="w-4 h-4" /></a>
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <p className="text-gray-400 font-medium pb-2 border-b border-gray-800">Message Me:</p>
            
            <input type="text" placeholder="Your Name *" className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors" />
            <input type="email" placeholder="Your Email *" className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors" />
            <input type="tel" placeholder="Your Phone" className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors" />
            <textarea placeholder="Your message *" rows={1} className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors resize-none overflow-hidden" />
            
            <div className="flex items-center gap-6 pt-4">
              <button className="group flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors shrink-0">
                Send message
                <span className="bg-black text-white p-1.5 rounded-full group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
              <p className="text-xs text-gray-500 leading-tight flex-1">
                Your information will remain private and will not be shared without your permission.
              </p>
            </div>
          </form>
          
          <div className="text-gray-500 text-sm mt-8 flex justify-between items-center w-full">
            <span>Built by Nauman</span>
          </div>
        </div>
      </div>
    </section>
  );
}
