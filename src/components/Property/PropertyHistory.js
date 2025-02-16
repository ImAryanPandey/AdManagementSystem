import React, { useEffect, useState } from "react";
import "./Property.css"; // Ensure the CSS file is in the same folder
import { useUser } from "../../context/Usercontext";

const PropertyHistory = () => {
  const { user } = useUser();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`/api/properties/user/${user._id}`);
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    if (user) {
      fetchProperties();
    }
  }, [user]);

  return (
    <div className="property-history-container">
      <h2>Your Posted Properties</h2>
      {properties.length === 0 ? (
        <p>No properties posted yet.</p>
      ) : (
        <ul className="property-list">
          {properties.map((property) => (
            <li key={property._id} className="property-item">
              <h3>{property.name}</h3>
              <p>Location: {property.location}</p>
              <p>City: {property.city}</p>
              <p>Pin Code: {property.pincode}</p>
              <p>Dimensions: {property.height}x{property.width}</p>
              <div className="property-images">
                {property.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Property ${index + 1}`}
                    className="property-image"
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PropertyHistory;
