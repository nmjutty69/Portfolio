import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const projects = [
  {
    title: 'Digital Competency Assessment System',
    type: 'Healthcare & Assessment Platform',
    year: '2025',
    tags: [{ name: 'RBAC', color: 'bg-gray-200 text-black' }, { name: 'AI Automation', color: 'bg-brand-blue text-white' }],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    title: 'Oradentix',
    type: 'Dental Management Software',
    year: '2025',
    tags: [{ name: 'Dental EMR', color: 'bg-brand-blue/80 text-white' }, { name: '2D/3D Charting & AI Voice', color: 'bg-purple-500 text-white' }],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
  },
  {
    title: 'Telemedicine Web Platform',
    type: 'Multilingual Healthcare Platform',
    year: '2025',
    tags: [{ name: 'Telemedicine', color: 'bg-brand-green text-black font-medium' }, { name: 'Multilingual', color: 'bg-gray-200 text-black' }],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
  },
  {
    title: 'AI Chatbots & Intelligent Systems',
    type: 'Intelligent Automation & AI',
    year: '2025',
    tags: [{ name: 'Voice AI & ElevenLabs', color: 'bg-brand-dark text-white' }, { name: 'LLMs & RAG', color: 'bg-gray-300 text-black' }],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  }
];

const otherProjects = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
  'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80',
  'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600&q=80',
  'https://images.unsplash.com/photo-1633433190805-4c07a3c3daba?w=600&q=80'
];

export function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" ref={containerRef} className="bg-brand-dark text-white py-32 bg-dot-pattern-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center space-y-6 mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 text-sm font-medium tracking-wide bg-gray-800">
            Projects
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            What I'm Proud of
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            A collection of impactful software products I've helped build, combining clean engineering, intelligent automation, and real-world problem solving.
          </p>
        </div>

        <motion.div style={{ y: cardsY }} className="space-y-12 relative z-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white text-black rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 group hover:scale-[1.01] transition-transform duration-500"
            >
              <div className="flex-1 space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-lg">
                  {project.title}
                </h3>
                <div className="text-gray-500 text-lg">
                  <p>{project.type}</p>
                  <p>{project.year}</p>
                </div>
              </div>

              <div className="flex-1 flex justify-center order-first md:order-none mb-8 md:mb-0">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative shadow-2xl group-hover:shadow-3xl transition-shadow">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>

              <div className="flex-1 flex md:flex-col justify-end items-end gap-3 h-full">
                {project.tags.map(tag => (
                  <span key={tag.name} className={`px-5 py-2 rounded-full text-sm ${tag.color}`}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-32 hidden">
          <h3 className="text-3xl font-medium text-center mb-16">Other projects</h3>
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide">
             {otherProjects.map((img, i) => (
               <motion.div 
                 key={i} 
                 className="min-w-[300px] md:min-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden snap-center flex-shrink-0"
                 whileHover={{ scale: 0.95 }}
                 transition={{ duration: 0.4 }}
               >
                 <img src={img} alt="Other project" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
               </motion.div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
