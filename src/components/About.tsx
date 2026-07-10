import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://scontent-gru2-1.cdninstagram.com/v/t51.82787-15/651033238_18565831894001825_2120190232584568869_n.webp?_nc_cat=107&ig_cache_key=Mzg1MDczNzI1NzA3MDg0NjgyMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=ANsr1jkve9YQ7kNvwG7-mVo&_nc_oc=AdnOE0fpSt0XJgPr23Dm4qcFFh9mM7Rt_uaWvu6wXSNUJOEteh3RC_LR3PQmkXDwttc5ZwbRm5jzy4Udmq-Rocqy&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gru2-1.cdninstagram.com&_nc_gid=DcGBCBI6QV7UoLEVeYFDuw&_nc_ss=8&oh=00_AfyCqg65RUziTT4I39T3gstOpLP6MnO2VIpa1MOrNEdZOA&oe=69B9D705"
                alt="Michelly Dominique"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-marsala rounded-2xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-gold rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">A Guardiã</span>
            <h2 className="text-4xl md:text-5xl text-marsala mb-8">Michelly Dominique</h2>
            <div className="space-y-6 text-ink/80 leading-relaxed">
              <p>
                Dançarina, pesquisadora e terapeuta holística, dedicada a guiar mulheres no caminho do autoconhecimento através do corpo e da ancestralidade.
              </p>
              <p>
                Com anos de dedicação às artes do ventre e aos saberes da terra, Michelly fundou o Santuário Rosas & Ventres como um espaço de acolhimento, onde a técnica da dança se funde com rituais de cura e ginecologia natural.
              </p>
              <p>
                Sua missão é despertar a força criativa e curativa que habita em cada mulher, honrando os ciclos e a sabedoria que carregamos em nosso DNA.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://www.instagram.com/michellydominiq/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-marsala font-semibold hover:text-gold transition-colors"
              >
                <Instagram size={20} />
                Siga no Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
