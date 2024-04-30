import React, { useState } from "react";
import { API_URL } from "../../config";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch(`${API_URL}/contact-us/`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage("Form submitted successfully.");
        alert("Form submitted successfully.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setSuccessMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:justify-center mt-8">
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-3">
            {/* <h2 className="text-lg font-bold mb-4">Get in Touch</h2> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2716748138037!2d79.97793141525179!3d7.323351115378345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e7622d600a83%3A0xaa493fc1c1d13b3e!2sFabLab%20Makandura!5e0!3m2!1sen!2slk!4v1661173585215!5m2!1sen!2slk"
              width="100%"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <p className="mb-4">
              Feel free to send us a message if you have any questions or
              comments.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="font-bold mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border rounded-lg py-2 px-3 w-full"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="font-bold mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded-lg py-2 px-3 w-full"
                  placeholder="youremail@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="font-bold mb-2 block">
                  Subject
                </label>
                <input
                  type="subject"
                  id="subject"
                  name="subject"
                  className="border rounded-lg py-2 px-3 w-full"
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="font-bold mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border rounded-lg py-2 px-3 w-full"
                  placeholder="Your message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Send
              </button>
            </form> */}
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4">Contact Information</h2>
            <p className="mb-4">
              <i className="fas fa-envelope mr-2"></i>
              <strong>Email:</strong> info@fablanka.org, info@fablanka.lk
            </p>
            <p className="mb-4">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <strong>Postal Address:</strong> No.28, Makandura, Gonawila,
              60170, Sri Lanka.
            </p>
            <p className="mb-4">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <strong>Physical Address: </strong>Public Library Complex,
              Kurunegala Road, Makandura, Gonawila, 60170, Sri Lanka.
            </p>
            <p className="mb-4">
              <i className="fas fa-phone mr-2"></i>
              <strong>Phone:</strong> +94 31 2299275, +94 11 2545790
            </p>
          </div>
          {/* <div className="col-span-4 item-center py-5 pl-48">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNipunaPerera99%2F&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=797828301687659"
              width="400"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
