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
        src="https://scontent-gru1-2.cdninstagram.com/v/t51.82787-15/742060276_18599660245001825_7591681048998852503_n.webp?_nc_cat=103&ig_cache_key=MzkzNzg1Mzg5NTEwNjY0MTY0OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=T__MRrjz7L4Q7kNvwEMLEVy&_nc_oc=AdozjHF2pxp0v3BnBHcX9ngDygLo0ZfgcgqF0qf5GcZ0SUWklUR-v_NK3NXULSKS7kHfOBSilKPEUla6GxtXCDZ-&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_gid=aJLIcUzWolM-dn2VqZ2JyQ&_nc_ss=7a22e&oh=00_AQCv9E3oQmkh6QTJaFCK-TReStk1rNp76SYBlUJgKgEscQ&oe=6A5629CE"
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
