import Hero from '../components/Hero';
import AmenitiesSection from '../components/AmenitiesSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Modern Living in a Traditional Setting
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Su Condo offers the perfect blend of contemporary comfort and Thai charm. 
                Located in the heart of Chiang Mai, our luxury condominiums provide an 
                unparalleled living experience with stunning views and world-class amenities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Starting Price</h3>
                  <p className="text-indigo-600 text-xl">฿2.5M</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Unit Types</h3>
                  <p className="text-indigo-600 text-xl">1-2 Bedrooms</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80"
                alt="Modern living room"
                className="rounded-lg object-cover h-64 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80"
                alt="Bedroom with city view"
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