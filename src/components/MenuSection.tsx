import Image from "next/image";

// To add a photo: drop the image file into /public/menu/ and set the
// photo field to the path, e.g. photo: "/menu/classic.jpg"
const donuts = [
  {
    name: "Classic Mini Donut Bites",
    desc: "Light, fluffy, and perfectly golden-fried. The original — simple, warm, and absolutely delicious.",
    toppings: ["Plain Fried Dough", "Golden Crisp", "No Topping"],
    photo: "/donut-classic.png",
    emoji: "🍩",
    badge: "Fan Favorite",
  },
  {
    name: "Cinnamon Sugar Bites",
    desc: "Hot mini donuts rolled in a warm blend of cinnamon and sugar. A timeless classic.",
    toppings: ["Cinnamon", "White Sugar", "Rolled Coating"],
    photo: null,
    emoji: "✨",
    badge: null,
  },
  {
    name: "Powdered Sugar Bites",
    desc: "Dusted in a generous snowfall of powdered sugar. Sweet, airy, and simply perfect.",
    toppings: ["Powdered Sugar", "Light Dusting"],
    photo: null,
    emoji: "❄️",
    badge: null,
  },
  {
    name: "Chocolate Drizzle Bites",
    desc: "Golden donut bites finished with a rich, silky chocolate drizzle. Indulgent and irresistible.",
    toppings: ["Chocolate Drizzle", "Rich & Indulgent"],
    photo: "/donut-chocolate.png",
    emoji: "🍫",
    badge: null,
  },
  {
    name: "Raspberry Drizzle Bites",
    desc: "Fresh hot donuts with a sweet, vibrant raspberry drizzle on top. A fruity crowd-pleaser.",
    toppings: ["Raspberry Drizzle", "Sweet & Fruity"],
    photo: null,
    emoji: "🫐",
    badge: "Popular",
  },
  {
    name: "Seasonal Special",
    desc: "Ask about today's limited special flavor. We rotate seasonal toppings and glazes regularly.",
    toppings: ["Rotating Flavor", "Ask About Today's Special"],
    photo: null,
    emoji: "🌟",
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
              className="bg-powder rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col"
            >
              {/* Photo slot */}
              <div className="relative h-48 bg-cream-dark overflow-hidden">
                {donut.photo ? (
                  <Image
                    src={donut.photo}
                    alt={donut.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-chocolate/30">
                    <span className="text-5xl opacity-50">{donut.emoji}</span>
                    <span className="text-xs font-medium tracking-wide uppercase">
                      Photo coming soon
                    </span>
                  </div>
                )}
                {donut.badge && (
                  <span className="absolute top-3 right-3 bg-raspberry text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                    {donut.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-bold text-chocolate mb-1.5">
                  {donut.name}
                </h3>
                <p className="text-chocolate-light text-sm leading-relaxed mb-4">
                  {donut.desc}
                </p>

                {/* Flavor / topping tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {donut.toppings.map((t) => (
                    <span
                      key={t}
                      className="bg-golden/15 border border-golden/25 text-chocolate text-xs px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-auto text-raspberry text-sm font-semibold hover:underline inline-flex items-center gap-1"
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
