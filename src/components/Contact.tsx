import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-marsala text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Inicie sua Jornada</h2>
            <p className="text-white/70 mb-12 text-lg font-light">
              Estamos prontas para te receber no Santuário. Entre em contato para agendar aulas, vivências ou saber mais sobre nossos encontros.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Localização</h4>
                  <p className="text-white/60">Campo Grande, MS - Brasil (Consulte endereço exato)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">E-mail</h4>
                  <p className="text-white/60">contato@rosaseventres.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">WhatsApp</h4>
                  <p className="text-white/60">+55 67 9274-0502</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-3xl text-ink shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-ink/50">Nome</label>
                  <input type="text" className="w-full px-4 py-3 bg-paper border border-ink/10 rounded-xl focus:outline-none focus:border-gold transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-ink/50">WhatsApp</label>
                  <input type="text" className="w-full px-4 py-3 bg-paper border border-ink/10 rounded-xl focus:outline-none focus:border-gold transition-colors" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-ink/50">Interesse</label>
                <select className="w-full px-4 py-3 bg-paper border border-ink/10 rounded-xl focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option>Dança do Ventre</option>
                  <option>Ginecologia Natural</option>
                  <option>Vivências / Círculos</option>
                  <option>Espetáculos</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-ink/50">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-paper border border-ink/10 rounded-xl focus:outline-none focus:border-gold transition-colors" placeholder="Conte-nos um pouco sobre você..." />
              </div>
              <button className="w-full py-4 bg-marsala text-white rounded-xl font-bold hover:bg-marsala/90 transition-all shadow-lg">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
    </section>
  );
}
