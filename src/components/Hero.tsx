import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 parallax-bg"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518893063132-36e46dbe2428?q=80&w=1920&auto=format&fit=crop")',
          filter: 'brightness(0.6)'
        }}
      />
      <img
        src="/michelly.jpeg"
        alt=""
        className="absolute inset-0 z-[1] w-full h-full object-cover opacity-30 mix-blend-overlay pointer-events-none"
        referrerPolicy="no-referrer"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block font-medium">Bem-vinda ao seu Portal</span>
          <h1 className="text-5xl md:text-8xl text-white mb-6 leading-tight">
            Santuário <br />
            <span className="italic font-light">Rosas & Ventres</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Um convite para mergulhar na sua essência cíclica através da Dança, da Ginecologia Natural e da Arte.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#servicos"
              className="px-8 py-4 bg-marsala text-white rounded-full hover:bg-marsala/90 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 group"
            >
              Conheça nossas Vivências
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all"
            >
              O Santuário
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
