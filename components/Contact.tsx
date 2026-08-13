"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

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
                   1 Amusu street, Ilasa, Isolo, Lagos, Nigeria
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
                    +234 8039100957
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
                    +234 8039100957
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

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}