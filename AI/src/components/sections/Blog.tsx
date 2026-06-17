import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const articles = [
  {
    date: 'Oct 12, 2025',
    title: 'Interview on CBS: New paradigms in tech',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&q=80'
  },
  {
    date: 'Oct 12, 2025',
    title: 'Article: How to implement strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80'
  },
  {
    date: 'Oct 12, 2025',
    title: 'News: What\'s new in an automobile industry',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=300&q=80'
  },
  {
    date: 'Oct 12, 2025',
    title: 'Article: Reface implemented some new things',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=300&q=80'
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-32 bg-gray-100 bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-sm font-medium tracking-wide bg-white">
              Blog
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-400">
              <span className="text-black">What I</span> Share
            </h2>
            <p className="text-xl text-gray-500 max-w-md">
              Here you can read fresh articles, interviews, and news related to my work and industry.
            </p>
          </div>
          
          <div className="space-y-6 mt-16 lg:mt-0">
            <Quote className="w-10 h-10 text-gray-300 fill-gray-300 transform scale-x-[-1]" />
            <h3 className="text-3xl font-medium leading-normal max-w-lg">
              It's incredibly important to share knowledge with those who have chosen the same path as you.
            </h3>
          </div>
        </div>

        <div className="space-y-6">
          {articles.map((article, idx) => (
            <motion.a 
              href="#"
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 font-medium">{article.date}</div>
                <h4 className="text-xl md:text-2xl font-medium leading-tight group-hover:text-gray-600 transition-colors">
                  {article.title}
                </h4>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
