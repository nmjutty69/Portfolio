import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const careerSteps = [
  {
    company: 'DevTix / Lahore',
    role: 'Multi Stack Developer',
    date: 'June 2025 → Present',
    side: 'left',
    icon: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=100&h=100&fit=crop&q=80' // Placeholder logos
  },
  {
    company: 'Ronnie Ridge Tech / Lahore',
    role: 'React.JS Internship',
    date: 'April 2025 → June 2025',
    side: 'right',
    icon: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=100&h=100&fit=crop&q=80'
  },
  {
    company: 'University of Central Punjab / Lahore',
    role: 'BS in Software Engineering',
    date: '2019 → 2024',
    side: 'left',
    icon: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop&q=80'
  },
  {
    company: 'Punjab Group of Colleges / Lahore',
    role: 'Intermediate in Computer Science',
    date: '2017 → 2019',
    side: 'right',
    icon: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=100&h=100&fit=crop&q=80' 
  }
];

export function Career() {
  return (
    <section id="career" className="py-32 bg-gray-100 relative overflow-hidden bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center space-y-6 mb-24 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-sm font-medium tracking-wide bg-white">
            Career & Education
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            My Way
          </h2>
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            The journey to becoming who I am today wasn't easy, and I look back on every step with pride. Below are my key milestones.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto z-10">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {careerSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`flex items-center ${step.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1 flex justify-end px-12">
                  {step.side === 'left' && (
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full flex items-center justify-between group hover:shadow-md transition-shadow">
                       <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                           <img src={step.icon} alt={step.company} className="w-full h-full object-cover" />
                         </div>
                         <div>
                           <h4 className="font-bold text-lg">{step.role}</h4>
                           <span className="text-gray-500 text-sm">{step.company}</span>
                         </div>
                       </div>
                       <div className="text-sm font-medium text-gray-600">{step.date}</div>
                    </div>
                  )}
                </div>
                
                {/* Node */}
                <div className="relative w-4 h-4 rounded-full bg-black shrink-0 border-4 border-gray-100 shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10" />

                <div className="flex-1 flex justify-start px-12">
                  {step.side === 'right' && (
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full flex items-center justify-between group hover:shadow-md transition-shadow">
                       <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                           <img src={step.icon} alt={step.company} className="w-full h-full object-cover" />
                         </div>
                         <div>
                           <h4 className="font-bold text-lg">{step.role}</h4>
                           <span className="text-gray-500 text-sm">{step.company}</span>
                         </div>
                       </div>
                       <div className="text-sm font-medium text-gray-600">{step.date}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
