import { motion } from 'motion/react';
import { Star, Code, Terminal, BrainCircuit, Database } from 'lucide-react';

const skills = [
  {
    title: "Programming Languages",
    list: "C#, C++, C, Java, Python, JavaScript, TypeScript, PHP, SQL",
    category: "Core",
    icon: <Code className="w-6 h-6 text-brand-purple" />
  },
  {
    title: "Web Technologies & UI",
    list: "ReactJS, Next.js, HTML5, CSS, Tailwind CSS, Bootstrap, ShadCN",
    category: "Frontend",
    icon: <Terminal className="w-6 h-6 text-brand-blue" />
  },
  {
    title: "AI & Intelligent Systems",
    list: "AI Chatbots, LLMs, RAG, Embedding Models, Context-Aware Assistants, Voice AI (ElevenLabs)",
    category: "AI",
    icon: <BrainCircuit className="w-6 h-6 text-brand-green" />
  },
  {
    title: "Backend & Databases",
    list: "ASP.NET MVC/Core (EF, ADO), Laravel, SQL Server, MySQL, RESTful API Design",
    category: "Backend",
    icon: <Database className="w-6 h-6 text-gray-800" />
  }
];

export function Testimonials() {
  return (
    <section id="skills" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center space-y-6 mb-20 z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-sm font-medium tracking-wide bg-gray-100">
            Technical Skills
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            My Arsenal
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-12 pt-4 snap-x scrollbar-hide -mx-6 px-6">
          {skills.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-3xl min-w-[320px] md:min-w-[400px] flex flex-col justify-between snap-center shrink-0"
            >
              <div className="space-y-6">
                <div className="p-3 bg-white border border-gray-200 rounded-full w-max shadow-sm">
                  {s.icon}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed min-h-[120px]">
                  {s.list}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div>
                  <h4 className="font-bold text-xl">{s.title}</h4>
                  <span className="text-gray-500 text-sm">{s.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
