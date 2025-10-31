import { useState } from "react"
import { X, Upload, FileText, Check } from "lucide-react"

export function ApplicationForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    resume: null as File | null
  })
  
  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    resume: ""
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Validation functions
  const validateFullName = (name: string) => {
    if (!name.trim()) return "Full name is required"
    if (name.trim().length < 2) return "Name must be at least 2 characters"
    if (!/^[a-zA-Z\s]+$/.test(name)) return "Name should only contain letters"
    return ""
  }

  const validatePhoneNumber = (phone: string) => {
    if (!phone.trim()) return "Phone number is required"
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number"
    const digitsOnly = phone.replace(/\D/g, '')
    if (digitsOnly.length < 10) return "Phone number must be at least 10 digits"
    return ""
  }

  const validateEmail = (email: string) => {
    if (!email.trim()) return "Email address is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return "Please enter a valid email address"
    return ""
  }

  const validateResume = (file: File | null) => {
    if (!file) return "Resume is required"
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(file.type)) {
      return "Please upload a PDF or Word document"
    }
    if (file.size > 5 * 1024 * 1024) {
      return "File size must be less than 5MB"
    }
    return ""
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: "" }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, resume: file }))
    setErrors(prev => ({ ...prev, resume: "" }))
  }

  // const handleSubmit = () => {
  //   // Validate all fields
  //   const newErrors = {
  //     fullName: validateFullName(formData.fullName),
  //     phoneNumber: validatePhoneNumber(formData.phoneNumber),
  //     email: validateEmail(formData.email),
  //     resume: validateResume(formData.resume)
  //   }

  //   setErrors(newErrors)

  //   // Check if there are any errors
  //   if (Object.values(newErrors).some(error => error !== "")) {
  //     return
  //   }

  //   // Form is valid - submit
  //   console.log("Form submitted:", formData)
  //   setIsSubmitted(true)

  //   // Reset form after 2 seconds and close
  //   setTimeout(() => {
  //     setIsSubmitted(false)
  //     onClose()
  //   }, 2000)
  // }
  

  //handle submit
  const handleSubmit = async () => {
  // Validate all fields
  const newErrors = {
    fullName: validateFullName(formData.fullName),
    phoneNumber: validatePhoneNumber(formData.phoneNumber),
    email: validateEmail(formData.email),
    resume: validateResume(formData.resume),
  };

  setErrors(newErrors);

  // Check if there are any validation errors
  if (Object.values(newErrors).some((error) => error !== "")) {
    return;
  }

  try {
    // Prepare form data for sending (including file)
    const formPayload = new FormData();
    formPayload.append("fullName", formData.fullName);
    formPayload.append("phoneNumber", formData.phoneNumber);
    formPayload.append("email", formData.email);
    if (formData.resume) formPayload.append("resume", formData.resume);

    // Send POST request to API route
    const res = await fetch("/api/application", {
      method: "POST",
      body: formPayload,
    });

    if (res.ok) {
      console.log("Form submitted successfully!");
      setIsSubmitted(true);

      // Reset form and close after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } else {
      console.error("Error submitting form");
      alert("There was an issue submitting your application. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An unexpected error occurred.");
  }
};

  const fontStyle = {
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif"
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" style={fontStyle}>
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-green-100 rounded-full">
              <Check className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Submitted!</h3>
          <p className="text-slate-600">Thank you for your interest. We'll review your application and get back to you soon.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" style={fontStyle}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-slate-900">Join Our Team</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          <p className="text-slate-600">
            Please fill out the form below to apply for a position at Mainland Engineering Consultants Corporation.
          </p>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:ring-blue-500"
              }`}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-slate-900 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.phoneNumber
                  ? "border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:ring-blue-500"
              }`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phoneNumber && (
              <p className="mt-2 text-sm text-red-600">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:ring-blue-500"
              }`}
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Resume Upload */}
          <div>
            <label htmlFor="resume" className="block text-sm font-semibold text-slate-900 mb-2">
              Resume <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="file"
                id="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <label
                htmlFor="resume"
                className={`flex items-center justify-center gap-3 w-full px-4 py-8 border-2 border-dashed rounded-lg cursor-pointer transition-all hover:bg-slate-50 ${
                  errors.resume
                    ? "border-red-500 bg-red-50"
                    : "border-slate-300"
                }`}
              >
                {formData.resume ? (
                  <>
                    <FileText className="h-6 w-6 text-blue-600" />
                    <div className="text-left">
                      <p className="font-medium text-slate-900">{formData.resume.name}</p>
                      <p className="text-sm text-slate-600">
                        {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <Upload className="h-6 w-6 text-slate-400" />
                    <div className="text-center">
                      <p className="font-medium text-slate-900">Click to upload resume</p>
                      <p className="text-sm text-slate-600">PDF or Word document (Max 5MB)</p>
                    </div>
                  </>
                )}
              </label>
            </div>
            {errors.resume && (
              <p className="mt-2 text-sm text-red-600">{errors.resume}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300 hover:shadow-lg"
            >
              Submit Application
            </button>
          </div>

          <p className="text-sm text-slate-500 text-center">
            All fields marked with <span className="text-red-500">*</span> are required
          </p>
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm