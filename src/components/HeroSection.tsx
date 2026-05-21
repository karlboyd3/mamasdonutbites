export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-cream to-tan/40 pt-16">
      {/* Decorative rings */}
      <div className="absolute top-20 left-6 w-28 h-28 rounded-full border-[10px] border-donut/15 pointer-events-none" />
      <div className="absolute top-36 right-12 w-20 h-20 rounded-full border-[8px] border-golden/20 pointer-events-none" />
      <div className="absolute bottom-28 left-1/4 w-16 h-16 rounded-full border-[6px] border-raspberry/10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-10 h-10 rounded-full border-[4px] border-donut/10 pointer-events-none" />
      <div className="absolute bottom-20 right-8 w-44 h-44 rounded-full border-[16px] border-golden/10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 w-8 h-8 rounded-full border-[3px] border-raspberry/15 pointer-events-none" />

      {/* Sugar dots */}
      <div className="absolute top-44 left-1/3 w-3 h-3 rounded-full bg-raspberry/25 pointer-events-none" />
      <div className="absolute bottom-1/3 left-16 w-2 h-2 rounded-full bg-golden/40 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-donut/15 pointer-events-none" />
      <div className="absolute bottom-1/4 right-2/5 w-2.5 h-2.5 rounded-full bg-raspberry/20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-golden/20 border border-golden/30 text-chocolate px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <span>🍩</span>
            <span>Made-to-Order · Served Hot · DMV Local</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-chocolate leading-tight mb-5">
            Fresh, Hot Mini Donuts
            <span className="text-raspberry"> Made Right </span>
            Before Your Eyes
          </h1>

          <p className="text-chocolate-light text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Serving Arlington, DC, Northern Virginia, and the DMV with
            made-to-order mini donut bites for markets, parties, weddings,
            offices, and events.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-raspberry text-white px-6 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-raspberry-light hover:shadow-lg hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
            >
              🎉 Book Catering
            </a>
            <a
              href="#find-us"
              className="bg-golden text-chocolate px-6 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-golden-light hover:shadow-lg hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
            >
              📍 Track the Truck
            </a>
            <a
              href="https://instagram.com/mamasdonutbites"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-chocolate text-chocolate px-6 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-chocolate hover:text-powder transition-all inline-flex items-center justify-center gap-2"
            >
              📷 Instagram
            </a>
          </div>
        </div>

        {/* Hero visual */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-golden via-donut to-chocolate shadow-2xl flex items-center justify-center">
              <div className="text-center text-powder">
                <div className="text-7xl md:text-8xl mb-3">🍩</div>
                <div className="font-heading text-xl md:text-2xl font-bold">
                  Mini Donut Bites
                </div>
                <div className="text-powder/70 text-sm mt-1">Fresh &amp; Hot</div>
              </div>
            </div>
            <div
              className="absolute -top-3 -right-3 w-16 h-16 bg-raspberry rounded-full shadow-lg flex items-center justify-center text-3xl animate-float"
            >
              🍩
            </div>
            <div
              className="absolute -bottom-3 -left-3 w-14 h-14 bg-cream rounded-full shadow-md flex items-center justify-center text-2xl animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              ✨
            </div>
            <div
              className="absolute top-8 -left-6 w-12 h-12 bg-golden rounded-full shadow-md flex items-center justify-center text-2xl animate-float"
              style={{ animationDelay: "0.6s" }}
            >
              🍩
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z" fill="#FFFBF5" />
        </svg>
      </div>
    </section>
  );
}
