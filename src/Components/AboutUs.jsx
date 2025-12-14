export default function About() {
  return (
    <section className="bg-[#0e0e0e] text-white min-h-screen px-6 py-32">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          About <span className="text-[#f5b754]">Rent Ride</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Reliable, affordable car rentals designed for everyday travel.
        </p>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#f5b754] mt-8 mb-14" />

        {/* Content */}
        <div className="space-y-10 text-gray-300 text-lg leading-relaxed">
          <p>
            Rent Ride was created to make car rentals simple, transparent, and
            accessible. We focus on dependable mid-range vehicles that are
            comfortable, fuel-efficient, and easy to drive — perfect for daily
            commutes, weekend trips, and short getaways.
          </p>

          <p>
            Our fleet includes well-maintained sedans, hatchbacks, and SUVs that
            balance comfort and value. Every vehicle is regularly inspected so
            you can rent with confidence and drive without worry.
          </p>

          <p>
            With clear pricing, quick pickups, flexible returns, and responsive
            support, Rent Ride is built around convenience. We’re here to help
            you get where you need to go — without unnecessary complexity.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {[
            { value: "8k+", label: "Satisfied Customers" },
            { value: "180+", label: "Reliable Vehicles" },
            { value: "24/7", label: "Customer Assistance" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1f1f1f] rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="text-4xl font-bold text-[#f5b754]">
                {item.value}
              </div>
              <div className="text-gray-400 mt-2">{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <a
            href="/cars"
            className="inline-block bg-[#f5b754] text-black px-10 py-4 rounded-full font-medium
                       transition hover:bg-white"
          >
            Browse Available Cars
          </a>
        </div>

      </div>
    </section>
  );
}
