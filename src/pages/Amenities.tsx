import { Waves, Dumbbell, ShieldCheck, Sparkles, Building2, Wifi, Car, Coffee, TreePine } from 'lucide-react';

const amenities = [
  {
    name: 'Swimming Pool',
    description: 'Infinity pool with panoramic city views, perfect for relaxation and exercise',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80',
  },
  {
    name: 'Fitness Center',
    description: 'State-of-the-art equipment and dedicated yoga space',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
  },
  {
    name: '24/7 Security',
    description: 'Round-the-clock security personnel and CCTV monitoring',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80',
  },
  {
    name: 'Cleaning Service',
    description: 'Professional housekeeping services available on request',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
  },
  {
    name: 'High-Speed Internet',
    description: 'Fiber-optic internet throughout the building',
    icon: Wifi,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
  },
  {
    name: 'Parking',
    description: 'Secure underground parking with EV charging stations',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?auto=format&fit=crop&q=80',
  },
  {
    name: 'Café & Lounge',
    description: 'Cozy café and co-working space for residents',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80',
  },
  {
    name: 'Garden Terrace',
    description: 'Landscaped garden with seating areas and BBQ facilities',
    icon: TreePine,
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80',
  },
];

export default function Amenities() {
  return (
    <div className="pt-16">
      <div className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            World-Class Amenities
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Experience Luxury Living
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Su Condo offers a comprehensive suite of amenities designed for modern living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.name}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={amenity.image}
                alt={amenity.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <amenity.icon className="h-6 w-6 text-indigo-600" />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {amenity.name}
                  </h3>
                </div>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}