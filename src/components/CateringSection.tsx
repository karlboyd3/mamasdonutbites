const events = [
  { icon: "💍", label: "Weddings" },
  { icon: "🏢", label: "Corporate Events" },
  { icon: "🎂", label: "Birthday Parties" },
  { icon: "🌱", label: "Farmers Markets" },
  { icon: "🎒", label: "School Events" },
  { icon: "🎊", label: "Community Events" },
  { icon: "🎄", label: "Holiday Parties" },
  { icon: "🥳", label: "Private Celebrations" },
];

export default function CateringSection() {
  return (
    <section id="catering" className="py-20 bg-chocolate relative overflow-hidden scroll-mt-16">
      {/* Decorative rings */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-[10px] border-golden/10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full border-[14px] border-raspberry/10 pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-64 h-64 rounded-full border-[20px] border-donut/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-golden/20 text-golden px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🎉 Catering &amp; Events
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-powder mb-5 leading-tight">
            Bring Fresh Mini Donuts
            <br />
            <span className="text-golden">to Your Next Event</span>
          </h2>
          <p className="text-tan max-w-2xl mx-auto leading-relaxed">
            Tell us your event date, location, guest count, and event type, and
            we&apos;ll help you create a sweet experience your guests will
            remember.
          </p>
        </div>

        {/* Event type grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {events.map((event) => (
            <div
              key={event.label}
              className="bg-chocolate-light/40 border border-tan/15 rounded-xl p-4 text-center hover:bg-golden/15 hover:border-golden/40 transition-all group cursor-default"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {event.icon}
              </div>
              <div className="text-powder text-sm font-semibold">{event.label}</div>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="bg-raspberry/20 border border-raspberry/30 rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="font-heading text-3xl font-bold text-powder mb-3">
            Ready to Book?
          </h3>
          <p className="text-tan mb-6 max-w-lg mx-auto leading-relaxed">
            We serve events of all sizes — from intimate backyard gatherings to
            large corporate celebrations. Let&apos;s make your event sweet.
          </p>
          <a
            href="mailto:mamasdonutbites@gmail.com"
            className="inline-flex items-center gap-2 bg-raspberry text-white px-8 py-4 rounded-full font-bold text-base hover:bg-raspberry-light hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            🎉 Request a Catering Quote
          </a>
        </div>
      </div>
    </section>
  );
}
