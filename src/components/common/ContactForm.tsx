import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium text-neutral-700">
            Nome completo*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition"
            placeholder="Il tuo nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-neutral-700">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition"
            placeholder="La tua email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block mb-2 font-medium text-neutral-700">
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition"
            placeholder="Il tuo numero di telefono"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 font-medium text-neutral-700">
            Servizio di interesse*
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition bg-white"
          >
            <option value="">Seleziona un servizio</option>
            <option value="Grafica Pubblicitaria">Grafica Pubblicitaria</option>
            <option value="Grafica Editoriale">Grafica Editoriale</option>
            <option value="Packaging">Packaging</option>
            <option value="Sito Web">Sito Web</option>
            <option value="Social Media">Social Media</option>
            <option value="Altro">Altro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-medium text-neutral-700">
          Messaggio*
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition"
          placeholder="Descrivi brevemente il tuo progetto"
        ></textarea>
      </div>

      {showSuccess && (
        <div className="p-4 bg-green-100 text-green-700 rounded-md text-center">
          Grazie per averci contattato! Il tuo messaggio è stato inviato correttamente.
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary w-full md:w-auto"
      >
        Invia messaggio
      </button>
    </form>
  );
};

export default ContactForm;