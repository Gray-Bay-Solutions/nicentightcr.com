"use client";

import { useState, FormEvent, useEffect } from "react";
import Button from "./Button";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    boat: "nicen-tight",
    tripType: "inshore",
    duration: "half-day",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  // Calculate estimated price based on selections
  const [estimatedPrice, setEstimatedPrice] = useState("$550");
  
  useEffect(() => {
    // Price calculation logic
    let price = 0;
    
    if (formData.boat === "high-roller") {
      // High Roller is offshore only
      price = formData.duration === "half-day" ? 750 : 1200;
    } else {
      // Nice'n Tight can do both inshore and offshore
      if (formData.tripType === "inshore") {
        price = formData.duration === "half-day" ? 550 : 950;
      } else {
        // Offshore on Nice'n Tight
        price = formData.duration === "half-day" ? 650 : 1050;
      }
    }
    
    setEstimatedPrice(`$${price}`);
  }, [formData.boat, formData.tripType, formData.duration]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Reset trip type if High Roller is selected (offshore only)
    if (name === "boat" && value === "high-roller") {
      setFormData(prev => ({ ...prev, tripType: "offshore" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // In a production app, this would send the data to your server
    // For now, let's simulate a successful submission after a delay
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        boat: "nicen-tight",
        tripType: "inshore",
        duration: "half-day",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-dark mb-1">
            Preferred Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="boat" className="block text-sm font-medium text-dark mb-1">
            Select Boat
          </label>
          <select
            id="boat"
            name="boat"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            value={formData.boat}
            onChange={handleChange}
          >
            <option value="nicen-tight">Nice&apos;n Tight (24ft)</option>
            <option value="high-roller">High Roller (45ft)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="tripType" className="block text-sm font-medium text-dark mb-1">
            Trip Type
          </label>
          <select
            id="tripType"
            name="tripType"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            value={formData.tripType}
            onChange={handleChange}
            disabled={formData.boat === "high-roller"}
          >
            <option value="inshore" disabled={formData.boat === "high-roller"}>Inshore</option>
            <option value="offshore">Offshore</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-dark mb-1">
            Duration
          </label>
          <select
            id="duration"
            name="duration"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            value={formData.duration}
            onChange={handleChange}
          >
            <option value="half-day">Half Day (4-5 hours)</option>
            <option value="full-day">Full Day (8-9 hours)</option>
          </select>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-md">
        <p className="text-primary-dark">
          <strong>Estimated Price:</strong> {estimatedPrice}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Final price may vary based on special requests and season.
        </p>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      
      <div>
        <Button 
          className={`w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          variant="primary"
          onClick={handleSubmit as any}
        >
          {isSubmitting ? "Sending..." : "Request Booking"}
        </Button>
      </div>
      
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 text-green-800 rounded-md">
          Thank you for your booking request! We will contact you shortly to confirm availability and details.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 text-red-800 rounded-md">
          There was an error submitting your request. Please try again or contact us directly.
        </div>
      )}
    </form>
  );
} 