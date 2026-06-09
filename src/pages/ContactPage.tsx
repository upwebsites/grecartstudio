import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Sede",
      content: "Viale Colli Aminei, 50\n80131 Napoli, Italia",
    },
    {
      icon: Phone,
      label: "Telefono",
      content: "+39 081 1893 9338",
      href: "tel:+3908118939338",
    },
    {
      icon: Mail,
      label: "Email",
      content: "info@grecartstudio.it",
      href: "mailto:info@grecartstudio.it",
    },
    {
      icon: Clock,
      label: "Orari",
      content: "Lun – Ven: 9:00 – 18:00\nSabato – Domenica: Chiuso",
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/grecartstudio/", label: "Instagram" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] z-0"></div>
        <div className="container relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6"
          >
            Parliamo Insieme
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6"
          >
            Contattaci
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-light/60 font-light text-lg max-w-2xl mx-auto"
          >
            Hai un progetto in mente? Siamo pronti a trasformare le tue idee in esperienze visive straordinarie.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-dark-100" id="contact">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4">Come Trovarci</p>
              <h2 className="text-white text-4xl font-heading mb-6 leading-snug">
                Parliamo del tuo <span className="italic font-light text-light/60">progetto</span>
              </h2>
              <p className="text-light/50 font-light text-lg leading-relaxed mb-12">
                Contattaci telefonicamente, via email o vieni a trovarci in sede. Siamo a tua disposizione per ogni esigenza.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex items-start gap-5 glass-panel px-6 py-5"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <item.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-light/40 mb-1 font-medium">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-light/80 hover:text-accent transition-colors font-light whitespace-pre-line"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-light/80 font-light whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-sm border border-light/5 min-h-[500px] lg:h-full">
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-16 h-[2px] bg-accent z-10"></div>
                <div className="absolute top-0 right-0 w-[2px] h-16 bg-accent z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24097.984455729404!2d14.21517!3d40.85177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0a3c328c13fd%3A0xedd23d0bd709e293!2sNapoli%20NA!5e0!3m2!1sit!2sit!4v1684144200547!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px", filter: "grayscale(90%) invert(90%) contrast(85%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa della sede di Grecart Studio"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-dark border-t border-light/5">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Connettiti con noi</p>
            <h2 className="text-white text-3xl md:text-4xl font-heading mb-4">
              Seguici sui <span className="italic font-light text-light/60">social</span>
            </h2>
            <p className="text-light/50 font-light mb-12 max-w-md mx-auto">
              Resta aggiornato sui nostri progetti e scopri le ultime novità creative
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-14 h-14 glass-panel flex items-center justify-center text-light/50 hover:text-accent hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;