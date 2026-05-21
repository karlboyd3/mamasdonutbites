const reviews = [
  {
    stars: 5,
    quote:
      "Fresh, hot, and absolutely delicious. We had Mama's Donut Bites at our farmers market and the line never stopped! Everyone was raving about them.",
    name: "Sarah M.",
    event: "Farmers Market",
  },
  {
    stars: 5,
    quote:
      "Perfect for our corporate event — everyone loved them. The donuts were made right in front of us and tasted amazing. We'll definitely book again.",
    name: "James T.",
    event: "Corporate Event",
  },
  {
    stars: 5,
    quote:
      "We hired Mama's Donut Bites for our daughter's birthday party and it was the highlight of the whole celebration. The kids and adults couldn't get enough!",
    name: "Jennifer K.",
    event: "Birthday Party",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-raspberry/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-raspberry/15 text-raspberry px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            ⭐ Customer Love
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-chocolate mb-4">
            What People Are Saying
          </h2>
          <p className="text-chocolate-light max-w-lg mx-auto leading-relaxed">
            Don&apos;t take our word for it — here&apos;s what our customers
            say about their Mama&apos;s Donut Bites experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-powder rounded-2xl p-6 shadow-md border border-raspberry/10 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-golden text-xl">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-chocolate-light leading-relaxed mb-5 text-sm italic">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between border-t border-tan/30 pt-4">
                <div className="font-semibold text-chocolate">{r.name}</div>
                <span className="bg-golden/15 text-chocolate text-xs px-2.5 py-1 rounded-full font-medium">
                  {r.event}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
