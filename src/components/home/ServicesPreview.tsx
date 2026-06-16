import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Palette, BookOpen, Package, Globe, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const services = [
  {
    icon: Palette,
    number: '01',
    title: 'Brand Identity',
    subtitle: 'Identità Visiva',
    description: "Creiamo identità visive uniche e scalabili che catturano l'essenza del tuo brand e lo posizionano al vertice del tuo settore.",
    details: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Naming'],
    color: 'from-violet-500/20 to-purple-600/20',
    accentColor: 'text-violet-400',
    borderColor: 'hover:border-violet-500/30',
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'Art Direction',
    subtitle: 'Direzione Artistica',
    description: "Curiamo l'estetica e la coerenza visiva in ogni touchpoint, garantendo una narrazione visiva impeccabile e memorabile.",
    details: ['Campaign Creative', 'Shoot Direction', 'Visual Storytelling', 'Style Guide'],
    color: 'from-cyan-500/20 to-teal-600/20',
    accentColor: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/30',
  },
  {
    icon: Globe,
    number: '03',
    title: 'Digital & Web',
    subtitle: 'Sviluppo Digitale',
    description: "Progettiamo interfacce, esperienze utente e siti web premium con tecnologie all'avanguardia per un impatto digitale di lusso.",
    details: ['Web Design', 'UI/UX', 'Development', 'E-Commerce'],
    color: 'from-blue-500/20 to-indigo-600/20',
    accentColor: 'text-blue-400',
    borderColor: 'hover:border-blue-500/30',
  },
  {
    icon: Package,
    number: '04',
    title: 'Packaging Design',
    subtitle: 'Design del Packaging',
    description: "Sviluppiamo packaging funzionali e dal design scultoreo che si distinguono sugli scaffali e creano un'esperienza memorabile.",
    details: ['Product Packaging', 'Structural Design', 'Material Selection', 'Print Ready'],
    color: 'from-amber-500/20 to-orange-600/20',
    accentColor: 'text-amber-400',
    borderColor: 'hover:border-amber-500/30',
  },
];

const MagneticCard: React.FC<{
  service: typeof services[0];
  index: number;
  isActive: boolean;
  onHover: (index: number | null) => void;
}> = ({ service, index, isActive, onHover }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onHover(null);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => onHover(index)}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className={`relative group cursor-pointer rounded-2xl border border-light/5 ${service.borderColor} bg-dark-100/50 backdrop-blur-sm overflow-hidden transition-all duration-500 ${isActive ? 'z-10' : ''}`}
    >
      {/* Spotlight gradient that follows mouse */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative z-10 p-8 lg:p-10">
        {/* Header: Number + Icon */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <span className={`text-5xl lg:text-6xl font-heading font-bold ${service.accentColor} opacity-20 group-hover:opacity-40 transition-opacity`}>
              {service.number}
            </span>
          </div>
          <div className={`w-14 h-14 rounded-xl bg-dark-200 border border-light/10 flex items-center justify-center ${service.accentColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            <Icon size={24} strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <p className={`text-xs uppercase tracking-[0.2em] ${service.accentColor} font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            {service.subtitle}
          </p>
          <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-white group-hover:text-white transition-colors">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-light/50 font-light text-sm leading-relaxed mb-6 min-h-[60px]">
          {service.description}
        </p>

        {/* Tags - revealed on hover */}
        <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {service.details.map((detail, i) => (
            <span key={i} className="px-3 py-1 text-[10px] uppercase tracking-wider rounded-full border border-light/10 text-light/40 font-medium">
              {detail}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <Link
            to="/servizi"
            className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white transition-colors"
          >
            <span className="uppercase tracking-widest text-xs">Scopri</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <div className={`w-10 h-10 rounded-full border border-light/10 flex items-center justify-center ${service.accentColor} opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </motion.div>
  );
};

const ServicesPreview: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[15vw] lg:text-[12vw] font-heading font-bold text-white/[0.02] whitespace-nowrap">
          CAPABILITIES
        </span>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs uppercase tracking-widest font-semibold mb-6"
            >
              <Sparkles size={12} />
              Cosa Facciamo
            </motion.div>
            <motion.h2
              className="text-white text-4xl lg:text-6xl font-heading leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Eccellenza in ogni <br />
              <span className="text-light/30 italic font-light">dettaglio visivo.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 lg:mt-0"
          >
            <Link
              to="/servizi"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-light/10 text-white text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-dark transition-all duration-300"
            >
              Vedi tutte le capabilities
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Interactive Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <MagneticCard
              key={index}
              service={service}
              index={index}
              isActive={activeIndex === index}
              onHover={setActiveIndex}
            />
          ))}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-light/5 pt-10"
        >
          {[
            { value: '200+', label: 'Progetti Realizzati' },
            { value: '15+', label: 'Anni di Esperienza' },
            { value: '98%', label: 'Clienti Soddisfatti' },
            { value: '24h', label: 'Tempo di Risposta' },
          ].map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-white mb-1">{stat.value}</div>
              <div className="text-light/40 text-xs uppercase tracking-widest font-light">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
