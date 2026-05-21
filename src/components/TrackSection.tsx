const upcomingLocations = [
  {
    type: "Farmers Market",
    location: "[ Location Name ]",
    area: "Arlington / Northern Virginia",
    day: "[ Day ]",
    date: "[ Update with date ]",
    hours: "[ Hours ]",
  },
  {
    type: "Community Event",
    location: "[ Location Name ]",
    area: "Washington DC / DMV",
    day: "[ Day ]",
    date: "[ Update with date ]",
    hours: "[ Hours ]",
  },
  {
    type: "Weekend Pop-Up",
    location: "[ Location Name ]",
    area: "Northern Virginia",
    day: "[ Day ]",
    date: "[ Update with date ]",
    hours: "[ Hours ]",
  },
];

export default function TrackSection() {
  return (
    <section id="find-us" className="py-20 bg-cream scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-donut/10 text-donut px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            📍 Find the Truck
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-chocolate mb-4">
            Find Us This Week
          </h2>
          <p className="text-chocolate-light max-w-lg mx-auto leading-relaxed">
            Check back regularly for updated locations. Follow us on Instagram
            for real-time daily location updates and special announcements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {upcomingLocations.map((loc, i) => (
            <div
              key={i}
              className="bg-powder border border-tan/40 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="bg-golden/20 text-chocolate text-xs font-bold px-2.5 py-1 rounded-full">
                  {loc.type}
                </span>
                <span className="text-2xl">📍</span>
              </div>
              <div className="font-heading text-lg font-bold text-chocolate mb-1">
                {loc.location}
              </div>
              <div className="text-chocolate-light text-sm mb-4">{loc.area}</div>
              <div className="border-t border-tan/30 pt-3 flex items-center justify-between text-sm">
                <div>
                  <div className="font-semibold text-chocolate">{loc.day}</div>
                  <div className="text-chocolate-light">{loc.date}</div>
                </div>
                <div className="text-chocolate-light text-right">{loc.hours}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <a
            href="https://instagram.com/mamasdonutbites"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-chocolate text-powder px-6 py-3 rounded-full font-semibold text-sm hover:bg-chocolate-light hover:shadow-md transition-all inline-flex items-center gap-2"
          >
            📷 Follow @mamasdonutbites for Daily Updates
          </a>
          <p className="text-chocolate-light/60 text-xs text-center max-w-sm">
            Follow us on Instagram for real-time locations, new flavors, and
            special event announcements.
          </p>
        </div>
      </div>
    </section>
  );
}
