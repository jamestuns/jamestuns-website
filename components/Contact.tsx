"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_1p15i1y",
        "template_v6admcz",
        {
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          customer_message: formData.message,
          time: new Date().toLocaleString(),
        },
        "YVXbidYibB4HQgw5Z"
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Contact Us
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
            Let's Help Your Business Grow
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Whether you need financial services, business support,
            digital solutions or want to become one of our agents,
            we're ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Office Address
                  </h4>

                  <p className="text-gray-600 mt-2">
                    1 Amusu Street, Ilasa, Isolo, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Phone
                  </h4>

                  <p className="text-gray-600 mt-2">
                    +234 803 910 0957
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
                  ✉️
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Email
                  </h4>

                  <p className="text-gray-600 mt-2">
                    admin@jamestuns.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl">
                  💬
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    WhatsApp
                  </h4>

                  <p className="text-gray-600 mt-2">
                    +234 803 910 0957
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
                  🕒
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Business Hours
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Monday – Saturday
                    <br />
                    8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your Message"
                required
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-center text-green-600 font-semibold">
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-center text-red-600 font-semibold">
                  Failed to send message. Please try again.
                </p>
              )}

            </form>

          </div>

        </div>
      </div>
      {/* Google Maps */}
<div className="mt-16">
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

    <iframe
      src="https://www.google.com/maps?q=1%20Amusu%20Street,%20Ilasa,%20Lagos,%20Nigeria&output=embed"
      width="100%"
      height="420"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      title="Jamestuns Trading Venture Location"
    />

  </div>

  <div className="text-center mt-6">
    <a
      href="https://www.google.com/maps/search/?api=1&query=1%20Amusu%20Street,%20Ilasa,%20Isolo,%20Lagos,%20Nigeria"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition"
    >
      Get Directions →
    </a>
  </div>
</div>
    </section>
  );
}