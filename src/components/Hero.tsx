import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://raw.githubusercontent.com/romans-repos/sucondo/refs/heads/main/src/images/sucondo.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl">
          {t('hero.subtitle')}
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
          <Link to="/one-bedroom">{t('hero.exploreButton')}</Link>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </div>
  );
}