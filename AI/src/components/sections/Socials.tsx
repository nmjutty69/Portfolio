import { motion } from 'motion/react';
import { ArrowRight, Linkedin, Github, Mail, Phone } from 'lucide-react';

const socials = [
  { name: 'LinkedIn', link: 'https://linkedin.com', icon: <Linkedin className="w-6 h-6 text-blue-600" /> },
  { name: 'GitHub', link: 'https://github.com', icon: <Github className="w-6 h-6 text-gray-800" /> },
  { name: 'naumandev001@gmail.com', link: 'mailto:naumandev001@gmail.com', icon: <Mail className="w-6 h-6 text-red-500" /> },
  { name: '(+92) 3314362258', link: 'tel:+923314362258', icon: <Phone className="w-6 h-6 text-green-600" /> },
];

export function Socials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-200">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-sm font-medium tracking-wide bg-gray-100">
            Contacts & Socials
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Where to Find Me
          </h2>
        </div>

        <div className="space-y-2">
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex items-center justify-between p-6 border-b border-gray-200 hover:bg-white rounded-lg transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-white border border-transparent group-hover:border-gray-200 transition-colors">
                  {social.icon}
                </div>
                <span className="text-xl md:text-2xl font-medium truncate">{social.name}</span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-2 transition-all shrink-0 ml-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
