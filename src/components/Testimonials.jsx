"use client"

export default function CustomerTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aisha Rahman",
      text: "TasteHouse helped me discover the best homemade biryani in my area! The food tasted authentic and fresh.",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=47",
    },
    {
      id: 2,
      name: "Samir Patel",
      text: "I love supporting local home cooks. The platform is easy to use and delivery was super quick.",
      rating: 4,
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 3,
      name: "Emily Carter",
      text: "The quality was amazing — it felt like eating a homemade meal from a friend's kitchen!",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=25",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div data-aos='fade-up' className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mt-2">
            Real stories from people who love TasteHouse.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {t.name}
                  </h3>

                  <div className="flex text-yellow-400 text-sm">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mt-4 text-sm">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
