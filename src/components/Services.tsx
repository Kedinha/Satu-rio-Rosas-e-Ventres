import { motion } from 'motion/react';
import { services } from '../constants/data.tsx';

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Nossas Pétalas</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-marsala">Vivências & Práticas</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 md:p-8">
                <div className="text-gold mb-4">{service.icon}</div>
                <h3 className="text-xl text-marsala mb-4">{service.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
