const photos = [
  {
    emoji: "🍩",
    label: "Fresh donut bites",
    gradient: "from-golden to-donut",
    span: "",
  },
  {
    emoji: "🔥",
    label: "Donuts being made",
    gradient: "from-donut to-chocolate-light",
    span: "",
  },
  {
    emoji: "🚚",
    label: "Food truck setup",
    gradient: "from-tan to-golden/60",
    span: "sm:col-span-2 lg:col-span-1",
  },
  {
    emoji: "🎉",
    label: "Catering event",
    gradient: "from-raspberry/40 to-raspberry-light/20",
    span: "",
  },
  {
    emoji: "🌱",
    label: "Farmers market",
    gradient: "from-golden-light/60 to-tan",
    span: "",
  },
  {
    emoji: "😊",
    label: "Happy customers",
    gradient: "from-cream-dark to-tan/50",
    span: "",
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
              className={`${photo.span} aspect-square bg-gradient-to-br ${photo.gradient} rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all group cursor-pointer flex items-center justify-center`}
            >
              <div className="text-center">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">
                  {photo.emoji}
                </div>
                <div className="text-chocolate/50 text-xs font-medium group-hover:text-chocolate/70 transition-colors">
                  {photo.label}
                </div>
              </div>
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
