'use client'

import emailjs from "@emailjs/browser";

import { useState } from 'react';
interface FormData {
  name: string
  email: string
  company: string
  intent: string
  complexity: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  intent?: string
}

export default function EngageForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    intent: '',
    complexity: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.intent) newErrors.intent = 'Intent is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
// commenting since hostinger is not working with netlify functions
// const handleSubmit = async (ctaType: string) => {
//     if (!validateForm()) return;

//     try {
//         const res = await fetch("/.netlify/functions/send-email", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ ...formData, ctaType }),
//         });

//         if (!res.ok) throw new Error("Failed");

//         alert("Thanks! We received your request.");
//     } catch (err) {
//         console.error(err);
//         alert("Something went wrong. Please try again.");
//     }
// };

  const handleSubmit = async (ctaType: string) => {
  if (!validateForm()) return;

  try {
    const res = await emailjs.send(
        "service_w1wa1kg",
        "template_f9nz3ek",
        {
            name: formData.name || "",
            email: formData.email || "",
            company: formData.company || "",
            intent: formData.intent || "",
            complexity: formData.complexity || "",
            ctaType: ctaType || "",
        },
        "aXXty3FMWFIwfNdTu"
    );

    alert("Thank you! Your request has been submitted.");
    console.log("Email sent:", res.text)

  } catch (error) {
    console.error("Email failed", error)
    alert("Something went wrong. Please try again.")
  }
}



  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <main className="overflow-x-hidden w-full pt-20">
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight font-serif">
              This is not a sales call. This is a qualification conversation.
            </h1>
          </div>
          
          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <form className="space-y-8">
              {/* Name */}
              <div>
                <label className="block text-white font-semibold mb-3 font-serif">Name</label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full p-4 bg-transparent border border-gray-600 text-white font-serif focus:border-neon-orange focus:outline-none transition-colors"
                />
                {errors.name && <p className="text-neon-orange text-sm mt-2 font-serif">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-3 font-serif">Email</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full p-4 bg-transparent border border-gray-600 text-white font-serif focus:border-neon-orange focus:outline-none transition-colors"
                />
                {errors.email && <p className="text-neon-orange text-sm mt-2 font-serif">{errors.email}</p>}
              </div>

              {/* Company */}
              <div>
                <label className="block text-white font-semibold mb-3 font-serif">Company</label>
                <input 
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="w-full p-4 bg-transparent border border-gray-600 text-white font-serif focus:border-neon-orange focus:outline-none transition-colors"
                />
                {errors.company && <p className="text-neon-orange text-sm mt-2 font-serif">{errors.company}</p>}
              </div>

              {/* Intent */}
              <div>
                <label className="block text-white font-semibold mb-3 font-serif">Strategic Intent</label>
                <select 
                  value={formData.intent}
                  onChange={(e) => handleChange('intent', e.target.value)}
                  className="w-full p-4 bg-black border border-gray-600 text-white font-serif focus:border-neon-orange focus:outline-none transition-colors"
                >
                  <option value="">Select your primary focus</option>
                  <option value="brand">Brand & Reputation Management</option>
                  <option value="growth">Growth & Performance Marketing</option>
                  <option value="production">High-End Production & Events</option>
                  <option value="ai">AI & Technology Integration</option>
                  <option value="comprehensive">Comprehensive Strategic Partnership</option>
                </select>
                {errors.intent && <p className="text-neon-orange text-sm mt-2 font-serif">{errors.intent}</p>}
              </div>

              {/* Complexity (Optional) */}
              <div>
                <label className="block text-white font-semibold mb-3 font-serif">
                  Project Complexity <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <select 
                  value={formData.complexity}
                  onChange={(e) => handleChange('complexity', e.target.value)}
                  className="w-full p-4 bg-black border border-gray-600 text-white font-serif focus:border-neon-orange focus:outline-none transition-colors"
                >
                  <option value="">Select complexity level</option>
                  <option value="single">Single vertical engagement</option>
                  <option value="multi">Multi-vertical coordination</option>
                  <option value="enterprise">Enterprise-wide transformation</option>
                </select>
              </div>
            </form>
            
            {/* CTA Buttons */}
            <div className="space-y-4 mt-12">
              <button 
                onClick={() => handleSubmit('assessment')}
                className="w-full px-8 py-4 bg-neon-orange text-black font-semibold hover:bg-white transition-colors font-serif"
              >
                Request Strategic Assessment
              </button>
              <button 
                onClick={() => handleSubmit('consultation')}
                className="w-full px-8 py-4 border border-neon-orange text-neon-orange font-semibold hover:bg-neon-orange hover:text-black transition-colors font-serif"
              >
                Book Executive Consultation
              </button>
              <button 
                onClick={() => handleSubmit('retainer')}
                className="w-full px-8 py-4 border border-neon-orange text-neon-orange font-semibold hover:bg-neon-orange hover:text-black transition-colors font-serif"
              >
                Discuss Long-Term Partnership
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}