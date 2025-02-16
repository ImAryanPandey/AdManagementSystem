import React, { useEffect, useState } from "react";

const PropertySearch = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch("/api/properties");
      const data = await response.json();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  return (
    <div className="property-search container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Available Properties</h2>
      <div className="grid grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property._id} className="property-card p-4 border rounded">
            <h3 className="text-lg font-bold">{property.name}</h3>
            <p>{property.location}</p>
            <p>Pin Code: {property.pinCode}</p>
            <p>
              Dimensions: {property.height} x {property.width}
            </p>
            <div className="images">
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={`/${image}`}
                  alt="Property"
                  className="w-full h-32 object-cover"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySearch;
