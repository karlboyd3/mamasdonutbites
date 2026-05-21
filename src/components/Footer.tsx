const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#catering", label: "Catering" },
  { href: "#find-us", label: "Find Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-chocolate text-powder">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-3 group w-fit">
              <span className="text-3xl group-hover:rotate-12 transition-transform duration-200">
                🍩
              </span>
              <div className="font-heading text-xl font-bold text-powder leading-tight">
                Mama&apos;s Donut Bites
              </div>
            </a>
            <p className="text-tan text-sm leading-relaxed mb-5">
              Fresh, hot, made-to-order mini donuts serving the DMV.
              <br />
              Arlington · Washington DC · Northern Virginia.
            </p>
            <a
              href="https://instagram.com/mamasdonutbites"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-raspberry/20 hover:bg-raspberry/40 text-powder px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              📷 @mamasdonutbites
            </a>
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
                href="https://instagram.com/mamasdonutbites"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-tan hover:text-golden transition-colors"
              >
                <span>📷</span>
                <span>@mamasdonutbites</span>
              </a>
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
