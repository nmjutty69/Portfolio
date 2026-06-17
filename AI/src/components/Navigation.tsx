import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-50 relative"
    >
      <div className="text-xl font-bold tracking-tight">Portfolio</div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#about" className="hover:text-black flex items-center gap-1">About <ArrowDownRight className="w-3 h-3 text-gray-400" /></a>
        <a href="#projects" className="hover:text-black flex items-center gap-1">Projects <ArrowDownRight className="w-3 h-3 text-gray-400" /></a>
        <a href="#career" className="hover:text-black flex items-center gap-1">Career <ArrowDownRight className="w-3 h-3 text-gray-400" /></a>
        <a href="#skills" className="hover:text-black flex items-center gap-1">Skills <ArrowDownRight className="w-3 h-3 text-gray-400" /></a>
        <a href="#contacts" className="hover:text-black flex items-center gap-1">Contacts <ArrowDownRight className="w-3 h-3 text-gray-400" /></a>
      </div>
    </motion.nav>
  );
}
