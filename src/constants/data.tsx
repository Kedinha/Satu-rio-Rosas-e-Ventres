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
    image: "/fotos/michelly01.jpeg"
  },
  {
    title: "Dança do Ventre",
    desc: "Aulas que vão além da técnica, focadas na expressão da alma e reconexão com o ventre.",
    icon: <Music size={32} />,
    image: "/fotos/michelly03.jpeg"
  },
  {
    title: "Vivências e Círculos",
    desc: "Imersões pontuais e círculos de mulheres para partilha, cura e celebração do sagrado.",
    icon: <Users size={32} />,
    image: "/fotos/michelly06.jpeg"
  },
  {
    title: "Espetáculos",
    desc: "Performances artísticas e produções culturais que narram a força da ancestralidade feminina.",
    icon: <Sparkles size={32} />,
    image: "/fotos/michelly04.jpeg"
  }
];

export const galleryImages = [
  "/fotos/michelly05.jpeg",
  "/fotos/michelly02.jpeg",
  "/fotos/michelly06.jpeg",
  "/fotos/michelly03.jpeg",
  "/fotos/michelly04.jpeg",
  "/fotos/michelly01.jpeg"
];
