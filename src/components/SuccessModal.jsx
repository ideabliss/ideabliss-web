import React from "react";
import { CheckCircle, X } from "lucide-react";

const SuccessModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 animate-[slideIn_0.3s_ease-out]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-orange-300" size={24} />
            <h2 className="text-xl font-bold text-gray-800">Success!</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <p className="text-gray-600 mb-6">{message}</p>
        
        <button
          onClick={onClose}
          className="w-full bg-orange-300 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition"
        >
          OK
        </button>

        <style>
          {`
            @keyframes slideIn {
              0% { opacity: 0; transform: scale(0.9) translateY(-20px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default SuccessModal;