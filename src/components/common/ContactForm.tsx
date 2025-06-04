import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
            <option value="" disabled>Seleziona un servizio</option>
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

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-100 text-green-700 rounded-md">
          Grazie per averci contattato! Ti risponderemo al più presto.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          Si è verificato un errore. Riprova più tardi o contattaci direttamente.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full md:w-auto"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
              <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Invio in corso...
          </span>
        ) : (
          'Invia messaggio'
        )}
      </button>
    </form>
  );
};

export default ContactForm;