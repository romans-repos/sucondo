import { Waves, Dumbbell, ShieldCheck, Sparkles, Building2, Wifi, Car, Coffee, TreePine } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const amenities = [
  {
    name: 'Swimming Pool',
    description: 'Relax and unwind in our pristine swimming pool with stunning city views',
    icon: Waves,
  },
  {
    name: 'Fitness Center',
    description: 'Stay active in our fully-equipped modern fitness center',
    icon: Dumbbell,
  },
  {
    name: '24/7 Security',
    description: 'Rest easy with round-the-clock security service and CCTV monitoring',
    icon: ShieldCheck,
  },
  {
    name: 'Cleaning Service',
    description: 'Professional cleaning service available for all residents',
    icon: Sparkles,
  },
  {
    name: 'Convenient Location',
    description: 'Walking distance to grocery stores and local amenities',
    icon: Building2,
  },
  {
    name: 'Internet',
    description: 'Fast and reliable internet connection',
    icon: Wifi,
  },
  {
    name: 'Parking',
    description: 'Secure and convenient parking options',
    icon: Car,
  },
  {
    name: 'Cafe',
    description: 'Relax and socialize in our on-site cafe',
    icon: Coffee,
  },
  {
    name: 'Garden',
    description: 'Peaceful and serene garden area',
    icon: TreePine,
  },
];

export default function AmenitiesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('amenities.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('amenities.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.name}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <amenity.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  {t(`amenities.${amenity.name.toLowerCase().replace(' ', '.')}title`)}
                </h3>
              </div>
              <p className="text-gray-600">
                {t(`amenities.${amenity.name.toLowerCase().replace(' ', '.')}description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}