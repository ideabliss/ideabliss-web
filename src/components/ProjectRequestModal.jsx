import React, { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { submitToGoogleSheet } from "../utils/googleSheets";
import SuccessModal from "./SuccessModal";

const ProjectRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    purpose: "",
    otherPurpose: "",
    problemStatement: "",
    additionalRequirements: "",
    projectRequirements: "",
    agreeToTerms: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const sheetData = {
      'Full Name': formData.fullName,
      'Contact No': formData.contactNo,
      'Purpose': formData.purpose,
      'Other Purpose': formData.otherPurpose,
      'Problem Statement': formData.problemStatement,
      'Additional Requirements': formData.additionalRequirements,
      'Project Requirements': formData.projectRequirements
    };
    
    const result = await submitToGoogleSheet(sheetData, 'Project Requests');
    setIsLoading(false);
    
    if (result.success) {
      setShowSuccess(true);
    } else {
      alert('Error submitting request. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg animate-[slideIn_0.3s_ease-out] text-left">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold text-gray-800 text-left">
            Project Request
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 text-left">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-700 mb-1 text-left">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-300 text-left"
            />
          </div>

          {/* Contact No */}
          <div>
            <label className="block text-sm text-gray-700 mb-1 text-left">
              Contact No <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-300 text-left"
            />
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-sm text-gray-700 mb-2 text-left">
              Purpose of the Project <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2 text-left">
              {["Academic", "Professional", "Startup", "Others"].map(
                (option) => (
                  <label
                    key={option}
                    className="flex items-center text-gray-700 text-left"
                  >
                    <input
                      type="radio"
                      name="purpose"
                      value={option}
                      checked={formData.purpose === option}
                      onChange={handleChange}
                      required
                      className="mr-2text-orange-300 focus:ring-orange-300"
                    />
                    {option}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Other Purpose */}
          {formData.purpose === "Others" && (
            <div>
              <label className="block text-sm text-gray-700 mb-1 text-left">
                If Others, Specify the Purpose
              </label>
              <input
                type="text"
                name="otherPurpose"
                value={formData.otherPurpose}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-300 text-left"
              />
            </div>
          )}

          {/* Problem Statement */}
          <div>
            <label className="block text-sm text-gray-700 mb-1 text-left">
              Problem Statement <span className="text-red-500">*</span>
            </label>
            <textarea
              name="problemStatement"
              value={formData.problemStatement}
              onChange={handleChange}
              required
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-300 text-left"
            />
          </div>

          {/* Additional Requirements */}
          <div>
            <label className="block text-sm text-gray-700 mb-1 text-left">
              Additional Requirements (Like Project report, SRS){" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="additionalRequirements"
              value={formData.additionalRequirements}
              onChange={handleChange}
              required
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-300 text-left"
            />
          </div>

          {/* Project Requirements */}
          <div>
            <label className="block text-sm text-gray-700 mb-1 text-left">
              Project Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              name="projectRequirements"
              value={formData.projectRequirements}
              onChange={handleChange}
              required
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-300 text-left"
            />
          </div>

          {/* Terms */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-left">
            <h3 className="font-medium text-gray-800 mb-2 text-left">
              Terms and Conditions
            </h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4 max-h-32 overflow-y-auto text-left">
              <li>Projects will be delivered only after payment is processed.</li>
              <li>50% non-refundable advance required.</li>
              <li>Customizations may incur extra charges.</li>
              <li>No refunds once development commences.</li>
              <li>Support for 7 days post-delivery.</li>
            </ul>
          </div>

          {/* Agreement */}
          <div className="text-left">
            <label className="flex items-start text-left">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="mr-2 mt-1text-orange-300 focus:ring-orange-300"
              />
              <span className="text-sm text-gray-700">
                I agree to the Terms and Conditions
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-300 text-white py-3 rounded-md font-medium hover:bg-orange-400 transition text-center disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </button>

        </form>

        <style>
          {`
            @keyframes slideIn {
              0% { opacity: 0; transform: scale(0.95) translateY(-10px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}
        </style>
      </div>
      
      <SuccessModal 
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          onClose();
        }}
        message="Your project request has been submitted successfully! We'll get back to you soon."
      />
    </div>
  );
};

export default ProjectRequestModal;
