import { motion } from 'motion/react';
import { Flower2 } from 'lucide-react';

export default function Manifesto() {
  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <Flower2 className="mx-auto text-gold mb-8" size={48} strokeWidth={1} />
          <h2 className="text-3xl md:text-4xl text-marsala mb-8 italic">Onde a Arte e a Cura se Encontram</h2>
          <p className="text-xl text-ink/70 leading-relaxed font-light italic">
            "No pulsar do ventre reside a memória da terra. Dançamos para libertar o que o tempo calou,
            curamos para florescer o que a alma sempre soube. O Rosas & Ventres é o solo fértil onde
            cada mulher redescobre sua própria medicina."
          </p>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-marsala/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
