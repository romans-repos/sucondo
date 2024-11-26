import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const features = [
  'Modern open-plan layout',
  '45-50 square meters',
  'Fully-equipped kitchen',
  'Private balcony',
  'Built-in wardrobes',
  'High-speed internet ready',
];

export default function OneBedroom() {
  const { t } = useTranslation();

  const featuresTranslated = [
    t('oneBedroom.features.layout'),
    t('oneBedroom.features.size'),
    t('oneBedroom.features.kitchen'),
    t('oneBedroom.features.balcony'),
    t('oneBedroom.features.wardrobe'),
    t('oneBedroom.features.internet'),
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('oneBedroom.title')}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('oneBedroom.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('oneBedroom.description')}
            </p>
            
            <ul className="space-y-4 mb-8">
              {featuresTranslated.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('oneBedroom.pricing.title')}</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-gray-600">{t('oneBedroom.pricing.startingPrice')}:</span>
                  <span className="font-semibold text-gray-900">{t('oneBedroom.pricing.startingPriceValue')}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">{t('oneBedroom.pricing.maintenance')}:</span>
                  <span className="font-semibold text-gray-900">{t('oneBedroom.pricing.maintenanceValue')}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80"
              alt={t('oneBedroom.title')}
              className="rounded-lg w-full h-72 object-cover"
            />
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80"
                alt="Kitchen"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1560185008-a33f941363c4?auto=format&fit=crop&q=80"
                alt="Bedroom"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('oneBedroom.floorPlan')}</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
              alt={t('oneBedroom.floorPlan')}
              className="max-w-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}