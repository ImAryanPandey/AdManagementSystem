import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600">
        Reach out to us for any queries, support, or feedback.
      </p>
      <form className="space-y-4 mt-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Your email"
          />
        </div>
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Your message"
            rows="4"
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
