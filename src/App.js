import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import Ad from "./components/Ad/Ad";
import Profile from "./components/Profile/Profile";
import PropertyHistory from "./components/Property/PropertyHistory";
import PropertyForm from "./components/Property/PropertyForm";
import PropertySearch from "./components/Property/PropertySearch";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <Navbar />

        {/* Property Section: Links with Buttons */}
        <section className="property-section" style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Property Management</h2>
          <div className="property-buttons" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <Link to="/add-property">
              <button style={{ padding: "10px 20px", cursor: "pointer" }}>Add Property</button>
            </Link>
            <Link to="/search-property">
              <button style={{ padding: "10px 20px", cursor: "pointer" }}>Search Property</button>
            </Link>
            <Link to="/property-history">
              <button style={{ padding: "10px 20px", cursor: "pointer" }}>View Property History</button>
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-12 px-12 py-12">
          <Routes>
            {/* Standard Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/ad" element={<Ad />} />
            <Route path="/profile" element={<Profile />} />

            {/* Property Management Routes */}
            <Route path="/add-property" element={<PropertyForm />} />
            <Route path="/search-property" element={<PropertySearch />} />
            <Route path="/property-history" element={<PropertyHistory />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
