import { Check } from 'lucide-react';

const features = [
  'Modern open-plan layout',
  '45-50 square meters',
  'Fully-equipped kitchen',
  'Private balcony',
  'Built-in wardrobes',
  'High-speed internet ready',
];

export default function OneBedroom() {
  return (
    <div className="pt-16">
      <div className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://raw.githubusercontent.com/romans-repos/sucondo/refs/heads/main/src/images/bedroom.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            One Bedroom Residence
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Perfect for Singles & Couples
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our one-bedroom units offer the perfect balance of space and comfort. 
              Each apartment features modern design elements, premium finishes, and 
              stunning views of Chiang Mai.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-gray-600">Starting Price:</span>
                  <span className="font-semibold text-gray-900">฿2.5M</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Maintenance Fee:</span>
                  <span className="font-semibold text-gray-900">฿45/sqm/month</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://raw.githubusercontent.com/romans-repos/sucondo/refs/heads/main/src/images/1br-living.jpg"
              alt="Living room"
              className="rounded-lg w-full h-72 object-cover"
            />
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://raw.githubusercontent.com/romans-repos/sucondo/refs/heads/main/src/images/1br-living2.jpg"
                alt="Kitchen"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/romans-repos/sucondo/refs/heads/main/src/images/1br-bathroom.jpg"
                alt="Bathroom"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}