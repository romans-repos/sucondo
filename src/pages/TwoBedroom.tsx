import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function TwoBedroom() {
  const { t } = useTranslation();

  const features = [
    t('twoBedroom.features.size'),
    t('twoBedroom.features.masterBed'),
    t('twoBedroom.features.guestBed'),
    t('twoBedroom.features.livingArea'),
    t('twoBedroom.features.kitchen'),
    t('twoBedroom.features.balconies'),
    t('twoBedroom.features.wardrobes'),
    t('twoBedroom.features.laundry'),
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('twoBedroom.title')}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('twoBedroom.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('twoBedroom.description')}
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('twoBedroom.pricing.title')}</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-gray-600">{t('twoBedroom.pricing.startingPrice')}:</span>
                  <span className="font-semibold text-gray-900">{t('twoBedroom.pricing.startingPriceValue')}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">{t('twoBedroom.pricing.maintenance')}:</span>
                  <span className="font-semibold text-gray-900">{t('twoBedroom.pricing.maintenanceValue')}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&q=80"
              alt={t('twoBedroom.title')}
              className="rounded-lg w-full h-72 object-cover"
            />
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&q=80"
                alt="Master bedroom"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1560449752-09cfece3660f?auto=format&fit=crop&q=80"
                alt="Second bedroom"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('twoBedroom.floorPlan')}</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
              alt={t('twoBedroom.floorPlan')}
              className="max-w-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}