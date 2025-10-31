"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Building2, Send, CheckCircle2, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    projectDetails: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const validate = () => {
    const newErrors = {}
    const nameRegex = /^[A-Za-z\s]+$/
    const phoneDigits = formData.phone.replace(/\D/g, "")

    if (!formData.fullName || !nameRegex.test(formData.fullName)) {
      newErrors.fullName = "Full name can only contain letters and spaces"
    }

    if (!formData.company || !nameRegex.test(formData.company)) {
      newErrors.company = "Company name can only contain letters and spaces"
    }

    if (!formData.projectType || !nameRegex.test(formData.projectType)) {
      newErrors.projectType = "Project type can only contain letters and spaces"
    }

    if (phoneDigits.length !== 10) {
      newErrors.phone = "Phone number must have exactly 10 digits"
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
        setFormData({
          fullName: "",
          email: "",
          company: "",
          phone: "",
          projectType: "",
          projectDetails: "",
        })
        setErrors({})
      } else {
        alert("Error sending message: " + data.message)
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong!")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden mt-16 scroll-mt-28"
    >
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="bg-white shadow-2xl border-none rounded-2xl max-w-md w-full mx-4 animate-in fade-in zoom-in duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600 text-lg">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1B6083] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1B6083] mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether it's a new project, collaboration, or consultation — our team is ready to help you bring your
            engineering vision to life.
          </p>
        </div>

        {/* Form Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B6083] p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B6083] text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600 text-sm">info@mainlandeng.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B6083] p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B6083] text-lg mb-1">Call Us</h3>
                    <div className="mb-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-[#1B6083] text-lg">t:</h3>
                        <p className="text-gray-600 text-sm">+1 (604) 543-8044</p>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <h3 className="font-semibold text-[#1B6083] text-lg">f:</h3>
                        <p className="text-gray-600 text-sm">+1 (604) 543-8104</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B6083] p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B6083] text-lg mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-sm">#206, 8363 128 Street, Surrey, BC </p>
                    <p className="text-gray-600 text-sm">V3W 4G1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-2">
            <Card className="bg-white/98 backdrop-blur-sm border-none shadow-2xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#1B6083] to-[#2a7ba3] p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Get a Free Consultation
                </h3>
                <p className="text-blue-100">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="h-12 bg-gray-50 border-gray-200 focus:border-[#1B6083]"
                      />
                      {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 bg-gray-50 border-gray-200 focus:border-[#1B6083]"
                      />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                        Company / Organization
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="h-12 bg-gray-50 border-gray-200 focus:border-[#1B6083]"
                      />
                      {errors.company && <p className="text-red-500 text-xs">{errors.company}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12 bg-gray-50 border-gray-200 focus:border-[#1B6083]"
                      />
                      {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-sm font-semibold text-gray-700">
                      Project Type
                    </Label>
                    <Input
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="h-12 bg-gray-50 border-gray-200 focus:border-[#1B6083]"
                    />
                    {errors.projectType && <p className="text-red-500 text-xs">{errors.projectType}</p>}
                  </div>

                  {/* Row 4 */}
                  <div className="space-y-2">
                    <Label htmlFor="projectDetails" className="text-sm font-semibold text-gray-700">
                      Project Details
                    </Label>
                    <Textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      rows={6}
                      className="bg-gray-50 border-gray-200 focus:border-[#1B6083]"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-[#1B6083] to-[#2a7ba3]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
