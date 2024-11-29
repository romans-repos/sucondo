import { Check } from 'lucide-react';

const features = [
  'Spacious 70-75 square meters',
  'Master bedroom with en-suite bathroom',
  'Guest bedroom with separate bathroom',
  'Large living and dining area',
  'Modern kitchen with island',
  'Two private balconies',
  'Built-in wardrobes in both bedrooms',
  'Separate laundry area',
];

export default function TwoBedroom() {
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
            Two Bedroom Residence
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ideal for Families
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our two-bedroom residences offer generous living spaces perfect for 
              families or those who desire extra room. Each unit features premium 
              finishes, modern appliances, and thoughtful design details.
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
                  <span className="font-semibold text-gray-900">฿4.2M</span>
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
              src="https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&q=80"
              alt="Living room"
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
      </div>
    </div>
  );
}