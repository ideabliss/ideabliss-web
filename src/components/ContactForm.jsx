import React from "react";

const ContactForm = () => {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

      <textarea
        className="w-3/4 md:w-1/2 p-4 rounded-lg text-black focus:outline-none"
        placeholder="Drop your Message"
        rows="5"
      ></textarea>

      <div className="mt-6 flex justify-center gap-4">
        <input
          className="p-3 rounded-lg text-black w-72 focus:outline-none"
          placeholder="Enter your Contact Number"
        />
        <button className="bg-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-600">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default ContactForm;