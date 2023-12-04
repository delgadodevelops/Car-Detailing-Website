import emailjs from "emailjs-com";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [emailSent, setEmailSent] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "subject") setSubject(value);
    if (name === "message") setMessage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      };

      const response = await emailjs.send(
        "service_iyf7d3r",
        "template_7p2deo2",
        templateParams,
        "EfGTdTFgjfpRrAh7I"
      );

      setEmailSent(true);
      console.log("Email sent successfully!", response.status, response.text);

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      setAlertVisible(true);

      setTimeout(() => setAlertVisible(false), 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };

  return (
    <section className="bg-custom-blue">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-custom-orange">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          Want to get in touch with me? Please fill out the form below. Thank
          you.
        </p>

        {alertVisible && (
          <div
            className="flex items-center p-4 mb-4 text-sm  border rounded-lg bg-custom-blue text-green-400 border-green-800"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Success alert!</span> Your message
              has been sent successfully.
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="shadow-sm bg-custom-bluee border border-custom-orange text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@delgadodevelops.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={handleChange}
              className="shadow-sm bg-custom-bluee border border-custom-orange text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Let me know why you're reaching out."
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              rows="6"
              className="shadow-sm bg-custom-bluee border border-custom-orange text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit hover-bg-custom-orange ring-2 ring-custom-orange transition ease-in-out duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
