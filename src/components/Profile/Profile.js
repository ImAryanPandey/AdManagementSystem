import React, { useState } from "react";
import { useUser } from "../../context/Usercontext";

const Profile = () => {
  const { user, setUser } = useUser();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [profilePic, setProfilePic] = useState(user?.profilePic || "");
  const [preview, setPreview] = useState(user?.profilePic || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);

    // Preview the image before upload
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    // Form data for sending image and user details to the backend
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    try {
      const response = await fetch("https://api.example.com/update-profile", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setUser(data.user); // Update user context
        alert("Profile updated successfully!");
      } else {
        alert("Error updating profile. Please try again.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Profile Picture</label>
          {preview && <img src={preview} alt="Preview" className="mb-4 w-24 h-24 rounded-full" />}
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
