import React, { useEffect, useState } from 'react';
import { fetchServices } from '../Api/serviceApi';

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (err) {
        setError('Failed to load services');
      } finally {
        setLoading(false);
      }
    };

    getServices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Hospital Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={service.imageUrl}
              alt={service.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
