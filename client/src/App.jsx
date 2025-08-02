import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Stories from "./components/Stories";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Booknow from "./components/Booknow";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import UserDashboardEdit from "./components/UserDashboardEdit";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminPanel from "./pages/AdminPanel";

import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <header>
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
        </header>

        <main className="w-full min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booknow" element={<Booknow />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/userDashboardEdit" element={<UserDashboardEdit />} />
            <Route path="/dashboard" element={<CustomerDashboard />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
            
            {/* Fallback route for 404 */}

            <Route
              path="*"
              element={
                <div className="p-10 text-center text-red-600 font-semibold text-lg">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
