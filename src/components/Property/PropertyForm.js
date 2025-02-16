import React, { useState } from "react";

const PropertyForm = () => {
  const [property, setProperty] = useState({
    name: "",
    location: "",
    pinCode: "",
    height: "",
    width: "",
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append property data
    for (const key in property) {
      formData.append(key, property[key]);
    }

    // Append images
    for (const image of images) {
      formData.append("images", image);
    }

    const response = await fetch("/api/properties", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Property posted successfully!");
    } else {
      alert("Error posting property.");
    }
  };

  return (
    <div className="property-form container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Post Your Property</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="name"
          placeholder="Property Name"
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="text"
          name="pinCode"
          placeholder="Pin Code"
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="number"
          name="height"
          placeholder="Height"
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="number"
          name="width"
          placeholder="Width"
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          required
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Submit Property
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;
