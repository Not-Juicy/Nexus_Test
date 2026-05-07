import { motion } from 'motion/react';
import { ShoppingCart, Layout, Cpu, LineChart, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: LineChart,
    title: 'Digital Marketing',
    desc: 'Performance-driven campaigns across Google, Meta, and TikTok. We optimize every dollar for maximum return with data-backed strategies.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Layout,
    title: 'SaaS Strategy',
    desc: 'Product strategy, roadmap planning, and go-to-market execution for SaaS businesses. From PRDs to launch and beyond.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'Integrate AI tools and workflows into your business operations. Automate repetitive tasks and unlock new capabilities with intelligent systems.',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block underline">Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              SERVICES BUILT <br />FOR GROWTH.
            </h2>
          </div>
          <p className="max-w-sm text-white/40 text-sm leading-relaxed mb-2 uppercase tracking-wide">
            From strategy to execution, we bring the expertise and tools to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#111111] p-12 hover:bg-[#161616] transition-colors border border-white/5"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${s.color} bg-opacity-10 mb-8`}>
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-red-500 transition-colors">
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                {s.desc}
              </p>
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white">
                  {i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
