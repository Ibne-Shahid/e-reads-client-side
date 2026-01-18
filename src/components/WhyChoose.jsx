"use client"

export default function WhyChoose() {
  const features = [
    {
      id: 1,
      icon: "🍲",
      title: "Authentic Homemade Quality",
      desc: "Every meal on TasteHouse is crafted in real home kitchens, giving you the authentic flavors that restaurants can’t match.",
    },
    {
      id: 2,
      icon: "💸",
      title: "Affordable & Fresh",
      desc: "Get fresh, homemade food at prices lower than restaurants — without compromising taste or quality.",
    },
    {
      id: 3,
      icon: "🧑‍🍳",
      title: "Support Local Home Chefs",
      desc: "Your orders help home cooks earn from their passion. TasteHouse empowers families and local creators.",
    },
    {
      id: 4,
      icon: "🔒",
      title: "Safe & Verified Sellers",
      desc: "Every seller is verified to ensure hygiene and authenticity. Your safety and satisfaction come first.",
    },
    {
      id: 5,
      icon: "🚚",
      title: "Fast Local Delivery",
      desc: "Enjoy quick delivery from nearby home kitchens or choose convenient self-pickup options.",
    },
    {
      id: 6,
      icon: "✨",
      title: "Unique, Handmade Specialties",
      desc: "Discover dishes you won't find anywhere else — from traditional recipes to creative homemade treats.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section data-aos='fade-up' className="py-16 bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Why Choose TasteHouse?
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            TasteHouse brings the warmth of homemade cooking straight to your
            doorstep — with quality, trust, and convenience.
          </p>
        </div>
      </section>

      <section data-aos='fade-up' className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
