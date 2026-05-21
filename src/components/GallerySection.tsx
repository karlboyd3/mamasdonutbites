import Image from "next/image";

const photos = [
  {
    src: "/donut-classic.png",
    alt: "Fresh mini donut bites",
    label: "Fresh donut bites",
    emoji: "🍩",
  },
  {
    src: "/donut-making.png",
    alt: "Mini donuts being made fresh on the fryer",
    label: "Donuts being made",
    emoji: "🔥",
  },
  {
    src: "/truck.png",
    alt: "Mama's Donut Bites food truck",
    label: "The truck",
    emoji: "🚚",
  },
  {
    src: "/donut-customer.png",
    alt: "Happy customer enjoying mini donut bites",
    label: "Happy customers",
    emoji: "😊",
  },
  {
    src: null,
    alt: "Mama's Donut Bites at a farmers market",
    label: "Farmers market",
    emoji: "🌱",
  },
  {
    src: "/donut-chocolate.png",
    alt: "Chocolate drizzle mini donut bites",
    label: "Chocolate drizzle bites",
    emoji: "🍫",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-powder scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-donut/10 text-donut px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            📸 Photo Gallery
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-chocolate mb-4">
            See the Goodness
          </h2>
          <p className="text-chocolate-light max-w-lg mx-auto leading-relaxed">
            From the truck to your hands — fresh, hot, and made with love.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.label}
              className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all group relative bg-cream-dark"
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-chocolate/30">
                  <span className="text-5xl opacity-40">{photo.emoji}</span>
                  <span className="text-xs font-medium tracking-wide uppercase">
                    {photo.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://instagram.com/mamasdonutbites"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-chocolate text-chocolate px-6 py-3 rounded-full font-semibold text-sm hover:bg-chocolate hover:text-powder transition-all"
          >
            📷 View More on Instagram @mamasdonutbites
          </a>
        </div>
      </div>
    </section>
  );
}
