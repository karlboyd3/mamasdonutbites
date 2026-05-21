const donuts = [
  {
    emoji: "🍩",
    name: "Classic Mini Donut Bites",
    desc: "Light, fluffy, and perfectly golden-fried. The original — simple, warm, and absolutely delicious.",
    gradient: "from-golden to-donut",
    badge: "Fan Favorite",
  },
  {
    emoji: "✨",
    name: "Cinnamon Sugar Bites",
    desc: "Hot mini donuts rolled in a warm blend of cinnamon and sugar. A timeless, irresistible classic.",
    gradient: "from-donut to-chocolate-light",
    badge: null,
  },
  {
    emoji: "❄️",
    name: "Powdered Sugar Bites",
    desc: "Dusted in a generous snowfall of powdered sugar. Sweet, airy, and simply perfect.",
    gradient: "from-tan to-cream-dark",
    badge: null,
  },
  {
    emoji: "🍫",
    name: "Chocolate Drizzle Bites",
    desc: "Golden donut bites finished with a rich, silky chocolate drizzle. Indulgent and irresistible.",
    gradient: "from-chocolate-light to-chocolate",
    badge: null,
  },
  {
    emoji: "🫐",
    name: "Raspberry Drizzle Bites",
    desc: "Fresh hot donuts with a sweet, vibrant raspberry drizzle on top. A fruity crowd-pleaser.",
    gradient: "from-raspberry to-raspberry-light",
    badge: "Popular",
  },
  {
    emoji: "🌟",
    name: "Seasonal Special",
    desc: "Ask about today's limited special flavor. We rotate seasonal toppings and glazes regularly.",
    gradient: "from-golden-light to-tan",
    badge: "Limited",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-cream-dark scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-golden/20 border border-golden/30 text-chocolate px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🍩 Our Menu
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-chocolate mb-4">
            Our Donut Bites
          </h2>
          <p className="text-chocolate-light max-w-xl mx-auto leading-relaxed">
            Every order is made fresh to order. Watch your donuts come to life
            right in front of you — golden, warm, and ready to enjoy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donuts.map((donut) => (
            <div
              key={donut.name}
              className="bg-powder rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div
                className={`bg-gradient-to-br ${donut.gradient} h-40 flex items-center justify-center relative`}
              >
                <span className="text-6xl group-hover:scale-110 transition-transform duration-200">
                  {donut.emoji}
                </span>
                {donut.badge && (
                  <span className="absolute top-3 right-3 bg-raspberry text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {donut.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-chocolate mb-2">
                  {donut.name}
                </h3>
                <p className="text-chocolate-light text-sm leading-relaxed mb-4">
                  {donut.desc}
                </p>
                <a
                  href="#contact"
                  className="text-raspberry text-sm font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Ask about pricing →
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-chocolate-light text-sm mt-10">
          Pricing varies by event size and package.{" "}
          <a href="#contact" className="text-raspberry font-semibold hover:underline">
            Contact us for a custom quote.
          </a>
        </p>
      </div>
    </section>
  );
}
