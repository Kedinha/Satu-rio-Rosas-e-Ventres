import { Flower2, Music, Users, Sparkles } from 'lucide-react';

export const navLinks = [
  { name: 'O Despertar', href: '#home' },
  { name: 'O Santuário', href: '#sobre' },
  { name: 'Nossas Pétalas', href: '#servicos' },
  { name: 'O Movimento', href: '#galeria' },
  { name: 'Contato', href: '#contato' },
];

export const services = [
  {
    title: "Ginecologia Natural",
    desc: "Encontros de sabedoria ancestral, ervas, ciclos femininos e rituais de cura profunda.",
    icon: <Flower2 size={32} />,
    image: "public/fotos/michelly01.jpeg"
  },
  {
    title: "Dança do Ventre",
    desc: "Aulas que vão além da técnica, focadas na expressão da alma e reconexão com o ventre.",
    icon: <Music size={32} />,
    image: "public/fotos/michelly03.jpeg"
  },
  {
    title: "Vivências e Círculos",
    desc: "Imersões pontuais e círculos de mulheres para partilha, cura e celebração do sagrado.",
    icon: <Users size={32} />,
    image: "public/fotos/michelly06.jpeg"
  },
  {
    title: "Espetáculos",
    desc: "Performances artísticas e produções culturais que narram a força da ancestralidade feminina.",
    icon: <Sparkles size={32} />,
    image: "public/fotos/michelly04.jpeg"
  }
];

export const galleryImages = [
  "public/fotos/michelly05.jpeg",
  "public/fotos/michelly02.jpeg",
  "public/fotos/michelly06.jpeg",
  "public/fotos/michelly03.jpeg",
  "public/fotos/michelly04.jpeg",
  "public/fotos/michelly01.jpeg"
];
