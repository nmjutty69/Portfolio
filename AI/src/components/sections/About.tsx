import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, Quote } from 'lucide-react';

const accordionData = [
  {
    id: '01',
    title: 'Multi Stack Developer',
    content: 'Building robust, scalable full-stack applications with an emphasis on backend architecture, API development (RESTful, ADO.NET), and modern frontend frameworks.',
  },
  {
    id: '02',
    title: 'AI & Intelligent Systems',
    content: 'Developing voice chatbots, context-aware assistants, and LLM-powered agents using RAG and embedding models to automate and enhance complex workflows.',
  },
  {
    id: '03',
    title: 'Healthcare Software Builder',
    content: 'Creating secure, comprehensive EMR systems with interactive charting tools, telemedicine capabilities, and role-based workflows for medical professionals.',
  },
  {
    id: '04',
    title: 'React.JS Developer',
    content: 'Crafting responsive, data-driven user interfaces utilizing ReactJS, Next.js, and Tailwind CSS. Implementing real-time communication modules and performant frontend architectures.',
  }
];

export function About() {
  const [openId, setOpenId] = useState('04');

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20">
      {/* Left Column */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-12 flex flex-col justify-between"
      >
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-sm font-medium tracking-wide bg-white">
            About Me
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Hello, I'm Nauman
          </h2>
          <p className="text-xl text-gray-600 max-w-md">
            Here you'll find detailed descriptions of my technical focus areas and how I can help.
          </p>
          <div className="pt-4">
            <svg viewBox="0 0 400 100" className="w-48 h-auto opacity-70">
              <path pathLength="1" stroke="currentColor" strokeWidth="2" fill="none" d="M10,80 Q50,20 100,50 T200,40 T300,60 T380,30" strokeLinecap="round" strokeLinejoin="round" />
              <path pathLength="1" stroke="currentColor" strokeWidth="2" fill="none" d="M30,85 Q80,40 120,60 T220,50 T320,70 T390,40" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="space-y-6">
          <Quote className="w-10 h-10 text-gray-300 fill-gray-300 transform scale-x-[-1]" />
          <h3 className="text-2xl md:text-3xl font-medium leading-normal max-w-lg">
            My mission is to simplify complex workflows, optimize performance, and deliver practical, data-driven solutions with AI capabilities.
          </h3>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-16"
      >
        <div className="space-y-4">
          {accordionData.map((item) => (
            <div key={item.id} className="border-b border-gray-200 py-4">
              <button 
                onClick={() => setOpenId(openId === item.id ? '' : item.id)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${openId === item.id ? 'bg-brand-purple text-white' : 'bg-gray-200 text-gray-500 group-hover:bg-gray-300'}`}>
                    {item.id.replace('0', '')}
                  </span>
                  <span className="text-2xl font-medium">{item.title}</span>
                </div>
                {openId === item.id ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </button>
              
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pl-14 pr-8 py-6 text-gray-600 text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 py-8 pl-12">
          {/* Polaroid style images */}
          <motion.div whileHover={{ scale: 1.05, zIndex: 10 }} className="w-32 bg-white p-2 pb-8 shadow-xl -rotate-6 transform origin-bottom border border-gray-100">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80" alt="Work" className="w-full aspect-square object-cover" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, zIndex: 10 }} className="w-32 bg-white p-2 pb-8 shadow-xl rotate-3 transform origin-bottom -ml-8 border border-gray-100">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80" alt="Team" className="w-full aspect-square object-cover" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, zIndex: 10 }} className="w-32 bg-white p-2 pb-8 shadow-xl rotate-12 transform origin-bottom -ml-8 border border-gray-100">
             <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&q=80" alt="Meeting" className="w-full aspect-square object-cover" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
