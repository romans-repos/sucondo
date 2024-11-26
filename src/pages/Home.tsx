import Hero from '../components/Hero';
import AmenitiesSection from '../components/AmenitiesSection';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Hero />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('home.modernLiving.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('home.modernLiving.description')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">{t('home.modernLiving.startingPrice')}</h3>
                  <p className="text-indigo-600 text-xl">{t('home.modernLiving.startingPriceValue')}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">{t('home.modernLiving.unitTypes')}</h3>
                  <p className="text-indigo-600 text-xl">{t('home.modernLiving.unitTypesValue')}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80"
                alt={t('home.images.livingRoom')}
                className="rounded-lg object-cover h-64 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80"
                alt={t('home.images.bedroom')}
                className="rounded-lg object-cover h-64 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <AmenitiesSection />
    </div>
  );
}