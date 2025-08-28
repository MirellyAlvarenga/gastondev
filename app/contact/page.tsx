"use client";

import React, { useRef, useState, FormEvent } from "react";
import { sendEmail } from "./email";
import Socials from "../_components/ui/socials";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus("");

    sendEmail(formRef.current)
      .then(() => setStatus("Message sent successfully!"))
      .catch(() => setStatus("Failed to send message, please try again."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold border-b border-gray-600 pb-2">
            CONTACT
          </h1>
          <p className="text-gray-400 mt-2 pb-12 mb-6">
            Get in touch for any information!
          </p>

          <div className="space-y-4">
            <div className="flex items-center border border-gray-500 p-3">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <span>theteusviana@gmail.com</span>
            </div>

            <div className="flex items-center border border-gray-500 p-3">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>Belo Horizonte</span>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="italic text-lg mb-4">SOCIAL MEDIA</h2>
            <Socials />
          </div>
        </div>

        <div className="border border-gray-500 p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <div className="mr-4"></div>
            SEND ME A MESSAGE!
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">
                EMAIL ADDRESS: <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="youremail@gmail.com"
                className="w-full bg-transparent border border-gray-500 px-3 py-3"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                SUBJECT: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="WHAT'S THIS ABOUT?"
                className="w-full bg-transparent border border-gray-500 px-3 py-5"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                MESSAGE: <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="TELL ME ABOUT YOUR PROJECT, IDEA, OR JUST SAY HELLO..."
                className="w-full bg-transparent border border-gray-500 px-3 py-4 h-48"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 font-bold ${
                loading
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-white text-black hover:bg-gray-300"
              }`}
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {status && (
              <p
                className={`mt-2 ${
                  status.includes("successfully")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
