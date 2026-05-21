"use client";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Wire up to an email service (Resend, EmailJS, Formspree, etc.)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const inputClass =
    "w-full bg-cream border border-tan rounded-xl px-4 py-2.5 text-chocolate placeholder-chocolate/30 focus:outline-none focus:ring-2 focus:ring-raspberry/30 focus:border-raspberry transition-all text-sm";

  return (
    <section id="contact" className="py-20 bg-cream-dark scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-raspberry/10 text-raspberry px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🎉 Get in Touch
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-chocolate mb-4">
            Book Catering or
            <span className="text-raspberry"> Say Hello</span>
          </h2>
          <p className="text-chocolate-light max-w-lg mx-auto leading-relaxed">
            Ready to bring fresh mini donuts to your event? Fill out the form
            below or reach out directly.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-powder rounded-2xl p-10 shadow-md text-center">
                <div className="text-7xl mb-4">🍩</div>
                <h3 className="font-heading text-2xl font-bold text-chocolate mb-2">
                  Message Received!
                </h3>
                <p className="text-chocolate-light leading-relaxed">
                  Thanks for reaching out! We&apos;ll get back to you within
                  24 hours to discuss your event.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-powder rounded-2xl p-6 sm:p-8 shadow-md space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-chocolate mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-chocolate mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-chocolate mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(703) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-chocolate mb-1.5">
                      Event Date
                    </label>
                    <input type="date" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-chocolate mb-1.5">
                      Event Location
                    </label>
                    <input
                      type="text"
                      placeholder="Arlington, VA"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-chocolate mb-1.5">
                      Estimated Guest Count
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 50"
                      min="1"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-chocolate mb-1.5">
                    Tell Us About Your Event
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share any details about your event type, location, and anything special you have in mind..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-raspberry text-white py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-raspberry-light hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "🎉 Send Catering Request"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-heading text-2xl font-bold text-chocolate mb-2">
              Reach Us Directly
            </h3>

            <a
              href="mailto:mamasdonutbites@gmail.com"
              className="flex items-start gap-4 bg-powder rounded-2xl p-5 shadow-sm border border-tan/30 hover:shadow-md hover:border-raspberry/30 transition-all group"
            >
              <div className="text-3xl">📧</div>
              <div>
                <div className="text-xs font-semibold text-chocolate-light mb-0.5 uppercase tracking-wide">
                  Email
                </div>
                <div className="font-semibold text-chocolate group-hover:text-raspberry transition-colors text-sm break-all">
                  mamasdonutbites@gmail.com
                </div>
              </div>
            </a>

            <a
              href="tel:7036087056"
              className="flex items-start gap-4 bg-powder rounded-2xl p-5 shadow-sm border border-tan/30 hover:shadow-md hover:border-raspberry/30 transition-all group"
            >
              <div className="text-3xl">📞</div>
              <div>
                <div className="text-xs font-semibold text-chocolate-light mb-0.5 uppercase tracking-wide">
                  Phone
                </div>
                <div className="font-semibold text-chocolate group-hover:text-raspberry transition-colors">
                  (703) 608-7056
                </div>
              </div>
            </a>

            <a
              href="https://instagram.com/mamasdonutbites"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-powder rounded-2xl p-5 shadow-sm border border-tan/30 hover:shadow-md hover:border-raspberry/30 transition-all group"
            >
              <div className="text-3xl">📷</div>
              <div>
                <div className="text-xs font-semibold text-chocolate-light mb-0.5 uppercase tracking-wide">
                  Instagram
                </div>
                <div className="font-semibold text-chocolate group-hover:text-raspberry transition-colors">
                  @mamasdonutbites
                </div>
              </div>
            </a>

            <div className="bg-golden/15 border border-golden/30 rounded-2xl p-5">
              <div className="font-heading text-lg font-bold text-chocolate mb-1">
                Serving the DMV
              </div>
              <p className="text-chocolate-light text-sm leading-relaxed">
                Arlington · Washington DC
                <br />
                Northern Virginia &amp; surrounding areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
