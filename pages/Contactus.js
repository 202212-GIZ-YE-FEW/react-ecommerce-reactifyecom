import React, { useState } from "react";
import Image from 'next/image'
import contact from "../public/contact.png"
function ContactUs() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Code to submit form data goes here
    setIsSuccess(true);
  };

  return (
    <div className="flex justify-evenly text-sm">
        <div className="mt-20">
        <Image src={contact} alt="contact" className=""/>
        </div>
      <div className="w-full lg:w-2/3 xl:w-1/2 px-4 pt-16 pb-8">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        {isSuccess ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
            <p>Your message has been sent successfully.</p>
          </div>
        ) : null}
        <form onSubmit={handleFormSubmit} action="" method="post" >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              className="px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600 border border-solid"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              className="px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600 border border-solid"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Hi there, I would like to get in touch..."
              className="px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600 border border-solid"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Submit
          </button>
        </form>
      
      </div>
    </div>
  );
}

export default ContactUs;
