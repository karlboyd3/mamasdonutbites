import Image from "next/image";

const features = [
  {
    icon: "🍩",
    title: "Made Fresh to Order",
    desc: "Every batch is made fresh right in front of you — never frozen, never reheated.",
  },
  {
    icon: "🌟",
    title: "Local & Family-Friendly",
    desc: "A local DMV food truck rooted in community, love, and the joy of great food.",
  },
  {
    icon: "🎉",
    title: "Perfect for Any Event",
    desc: "From farmers markets to weddings, we bring the sweet experience to you.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-powder scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-raspberry/10 text-raspberry px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Our Story
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-chocolate mb-6 leading-tight">
              Where Every Bite
              <br />
              <span className="text-golden">Tells a Sweet Story</span>
            </h2>
            <div className="space-y-4 text-chocolate-light leading-relaxed">
              <p>
                Mama&apos;s Donut Bites was born from a love of fresh, hot,
                made-to-order mini donuts and a passion for bringing something
                special to every event we serve.
              </p>
              <p>
                Unlike pre-made pastries, every single one of our mini donut
                bites is crafted fresh right in front of you. Watch as the dough
                turns perfectly golden, then gets topped with your favorite
                flavors — from classic powdered sugar to rich chocolate drizzle.
              </p>
              <p>
                We&apos;re proud to be a local DMV food truck serving Arlington,
                Washington DC, and Northern Virginia. Whether you&apos;re at a
                weekend farmers market or a private event, we bring the warmth,
                the fun, and the fresh-fried goodness to you.
              </p>
            </div>
          </div>

          {/* Truck photo */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
            <Image
              src="/truck.png"
              alt="Mama's Donut Bites food truck"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-cream rounded-2xl p-6 shadow-sm border border-tan/30 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-heading text-xl font-bold text-chocolate mb-2">
                {f.title}
              </h3>
              <p className="text-chocolate-light text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
