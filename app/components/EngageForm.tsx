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

  const handleSubmit = async (ctaType: string) => {
    if (!validateForm()) return;

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing')
      }

      const res = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          intent: formData.intent,
          complexity: formData.complexity,
          ctaType: ctaType,
        },
        publicKey
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
                  <option value="Brand & Reputation Management">Brand & Reputation Management</option>
                  <option value="Growth & Performance Marketing">Growth & Performance Marketing</option>
                  <option value="High-End Production & Events">High-End Production & Events</option>
                  <option value="AI & Technology Integration">AI & Technology Integration</option>
                  <option value="Comprehensive Strategic Partnership">Comprehensive Strategic Partnership</option>
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
                  <option value="Single vertical engagement">Single vertical engagement</option>
                  <option value="Multi-vertical coordination">Multi-vertical coordination</option>
                  <option value="Enterprise-wide transformation">Enterprise-wide transformation</option>
                </select>
              </div>
            </form>
            
            {/* CTA Buttons */}
            <div className="space-y-4 mt-12">
              <button 
                onClick={() => handleSubmit('Request Strategic Assessment')}
                className="w-full px-8 py-4 bg-neon-orange text-black font-semibold hover:bg-white transition-colors font-serif"
              >
                Request Strategic Assessment
              </button>
              <button 
                onClick={() => handleSubmit('Book Executive Consultation')}
                className="w-full px-8 py-4 border border-neon-orange text-neon-orange font-semibold hover:bg-neon-orange hover:text-black transition-colors font-serif"
              >
                Book Executive Consultation
              </button>
              <button 
                onClick={() => handleSubmit('Discuss Long-Term Partnership')}
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