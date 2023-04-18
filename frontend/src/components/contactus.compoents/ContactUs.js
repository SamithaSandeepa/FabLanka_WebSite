// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdb-react-ui-kit";
import React, { useState } from 'react';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });
  
        if (response.ok) {
          setSuccess(true);
          setName('');
          setEmail('');
          setMessage('');
        } else {
          const { error } = await response.json();
          setError(error);
        }
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-center mt-12">
          <div className="md:w-1/2 pb-5">
          {success ? (
            <p className="text-green-500 font-bold mb-6">Thank you for your message! We will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2">
              <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
              {error && (
                <p className="text-red-500 font-bold mb-4">{error}</p>
              )}
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="border rounded-lg py-2 px-3"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="border rounded-lg py-2 px-3"
                  placeholder="youremail@example.com"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="message" className="font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="border rounded-lg py-2 px-3"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Send</button>
            </form>
          )}

          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 pb-5">
              <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-lg font-bold mb-4">Contact Information</h2>
                  <p className="mb-4"><i className="fas fa-envelope mr-2"></i><strong>Email:</strong> fablabmakandura@gmail.com</p>
                  <p className="mb-4"><i className="fas fa-map-marker-alt mr-2"></i><strong>Address:</strong> NO.19 Public Library complex, Makadura, Gonavila.</p>
                  <p className="mb-4"><i className="fas fa-phone mr-2"></i><strong>Phone:</strong> +94 31 229 7029</p>
              </div>
          </div>
          </div>
        </div>
  
    );
  }
  
  export default ContactUs;