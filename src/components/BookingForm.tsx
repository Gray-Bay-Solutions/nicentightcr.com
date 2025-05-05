"use client";

import { useState, FormEvent } from "react";
import Button from "./Button";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    tripType: "inshore-half",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        tripType: "inshore-half",
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
        >
          <option value="inshore-half">Inshore - Half Day ($550)</option>
          <option value="inshore-full">Inshore - Full Day ($750)</option>
          <option value="offshore-half">Offshore - Half Day ($750)</option>
          <option value="offshore-full">Offshore - Full Day ($950)</option>
        </select>
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