import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Interested in making Su Condo your new home? Get in touch with us.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-indigo-600" />
                <span className="ml-3 text-gray-600">
                  168/2 Ban Sao Hin, Soi 5, Mueang Chiang Mai District, Chiang Mai 50000
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-600" />
                <span className="ml-3 text-gray-600">+66 XX XXX XXXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-600" />
                <span className="ml-3 text-gray-600">contact@sucondo.com</span>
              </div>
            </div>

            <div className="mt-12">
              <iframe
                title="Su Condo Location"
                className="w-full h-[300px] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0123456789!2d98.1234567!3d18.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ1JzU1LjYiTiA5OMKwMDcnNDQuNCJF!5e0!3m2!1sen!2sth!4v1234567890"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}