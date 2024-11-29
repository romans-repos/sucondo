import { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.phone && !/^\+?[\d\s-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information Section */}
          <div className="relative">
            <div className="sticky top-8">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Ready to make Su Condo your new home? We're here to help you take the next step.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-center group">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                    <p className="mt-1 text-gray-600">
                      Su Condo - เลขที่ 168 2 บ้านเสาหิน ซอย 5 อ.เมือง<br />
                      Chiang Mai 50000
                    </p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                    <a href="tel:+66837189388" className="mt-1 text-gray-600 hover:text-indigo-600 transition-colors">
                      +66 83 718 9388
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <a href="mailto:contact@sucondo.com" className="mt-1 text-gray-600 hover:text-indigo-600 transition-colors">
                      contact@sucondo.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <iframe
                  title="Su Condo Location"
                  className="w-full h-[300px] rounded-2xl shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0123456789!2d98.1234567!3d18.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ1JzU1LjYiTiA5OMKwMDcnNDQuNCJF!5e0!3m2!1sen!2sth!4v1234567890"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-8">
                  We've received your message and will get back to you soon.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`mt-1 block w-full rounded-lg border ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    } px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`mt-1 block w-full rounded-lg border ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    } px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`mt-1 block w-full rounded-lg border ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    } px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`mt-1 block w-full rounded-lg border ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    } px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}