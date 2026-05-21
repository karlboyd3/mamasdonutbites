import Image from "next/image";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#catering", label: "Catering" },
  { href: "#find-us", label: "Find Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    label: "Instagram",
    handle: "@mamasdonutbites",
    href: "https://instagram.com/mamasdonutbites",
  },
  {
    label: "Facebook",
    handle: "Mama's Donut Bites",
    href: "https://www.facebook.com/pages/Mamas-Donut-Bites/219968224715863",
  },
  {
    label: "Twitter",
    handle: "@MamasDonutBites",
    href: "https://twitter.com/MamasDonutBites",
  },
  {
    label: "Yelp",
    handle: "Leave a Review",
    href: "http://www.yelp.com/biz/mamas-donut-bites-arlington",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-chocolate text-powder">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand + logo */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-4 group">
              <div className="bg-white rounded-2xl p-2 inline-block group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo.jpg"
                  alt="Mama's Donut Bites"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </a>
            <p className="text-tan text-sm leading-relaxed">
              Fresh, hot, made-to-order mini donuts serving the DMV.
              <br />
              Arlington · Washington DC · Northern Virginia.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-heading text-lg font-bold text-powder mb-4">
              Quick Links
            </div>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-tan hover:text-golden transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-heading text-lg font-bold text-powder mb-4">
              Contact
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:mamasdonutbites@gmail.com"
                className="flex items-center gap-2 text-tan hover:text-golden transition-colors"
              >
                <span>📧</span>
                <span>mamasdonutbites@gmail.com</span>
              </a>
              <a
                href="tel:7036087056"
                className="flex items-center gap-2 text-tan hover:text-golden transition-colors"
              >
                <span>📞</span>
                <span>(703) 608-7056</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-tan hover:text-golden transition-colors"
              >
                <span>🎉</span>
                <span>Book Catering</span>
              </a>
            </div>
          </div>

          {/* Social links */}
          <div>
            <div className="font-heading text-lg font-bold text-powder mb-4">
              Follow Us
            </div>
            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 rounded-full bg-chocolate-light/60 flex items-center justify-center text-xs font-bold text-tan group-hover:bg-golden/20 group-hover:text-golden transition-all shrink-0">
                    {s.label.slice(0, 2).toUpperCase()}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-powder/90 group-hover:text-golden transition-colors leading-tight">
                      {s.label}
                    </div>
                    <div className="text-xs text-tan/70">{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-chocolate-light/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-tan text-xs">
          <div>© {year} Mama&apos;s Donut Bites. All rights reserved.</div>
          <div>Made with 🍩 in the DMV</div>
        </div>
      </div>
    </footer>
  );
}
