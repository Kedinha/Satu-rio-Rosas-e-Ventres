import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-paper border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <img src="/logo-symbol.png" alt="Rosas & Ventres" className="h-20 w-auto mb-2 rounded-lg" />
          <p className="text-ink/40 text-sm">© 2026 Todos os direitos reservados.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://www.instagram.com/rosaseventres/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-marsala hover:text-white transition-all">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/556792740502" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-marsala hover:text-white transition-all">
            <MessageCircle size={20} />
          </a>
        </div>

        <div className="text-ink/40 text-xs uppercase tracking-widest">
          Desenvolvido com Alma
        </div>
      </div>
    </footer>
  );
}
