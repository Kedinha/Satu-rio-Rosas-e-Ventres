import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { galleryImages } from '../constants/data.tsx';

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">O Movimento</span>
            <h2 className="text-4xl md:text-5xl text-marsala">Galeria de Almas</h2>
          </div>
          <a
            href="https://www.instagram.com/michellydominiq/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-marsala/20 rounded-full hover:bg-marsala hover:text-white transition-all flex items-center gap-2"
          >
            <Instagram size={18} />
            Ver mais no Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 0.98 }}
              className="aspect-square rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
