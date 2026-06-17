import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 relative z-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-brand-dark leading-tight">
          Muhammad Nauman Malik
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed">
          An experienced software engineer specializing in building scalable systems with AI-driven capabilities and intelligent automation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
          <a href="#contacts" className="group flex items-center gap-4 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Let's connect
            <span className="bg-white text-black p-1.5 rounded-full group-hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-full border-2 border-brand-gray"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-green text-brand-green" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium mt-0.5">Trusted by businesses</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Content / Image Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[140%] aspect-square rounded-full border border-gray-200 border-dashed absolute animate-[spin_60s_linear_infinite]" />
          <div className="w-[110%] aspect-square rounded-full border border-gray-200 border-dashed absolute animate-[spin_40s_linear_infinite_reverse]" />
          <div className="w-[80%] aspect-square rounded-full border border-gray-200 border-dashed absolute animate-[spin_30s_linear_infinite]" />
        </div>
        
        <div className="relative z-10 w-full max-w-lg mx-auto aspect-square rounded-full bg-gray-200 overflow-hidden shadow-2xl ring-4 ring-white/50">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80" 
            alt="Muhammad Nauman Malik" 
            className="object-cover w-full h-full"
          />
        </div>

        {/* Floating Tags */}
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-0 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20"
        >
          React.JS Developer
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 -left-8 bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20"
        >
          Multi Stack Developer
        </motion.div>

        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 -right-4 bg-brand-purple text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20"
        >
          AI Systems Builder
        </motion.div>

        <motion.div 
          animate={{ y: [0, 12, 0] }} 
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-4 left-12 bg-brand-green text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20 focus:outline-none"
        >
          Problem Solver
        </motion.div>
      </motion.div>
    </section>
  );
}
