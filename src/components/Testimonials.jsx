export default function Testimonials() {
  const items = [
    {
      name: "Aisha R.",
      role: "CS Undergrad",
      text:
        "I grabbed a Python project and learned more in a weekend than a whole month of classes!",
    },
    {
      name: "Karan P.",
      role: "ECE Student",
      text:
        "The codebase was clean and came with a video walkthrough. Totally worth it.",
    },
    {
      name: "Sana M.",
      role: "BCA Final Year",
      text: "Helped me ship my final-year project on time with great docs.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-semibold mb-6">What students say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <div key={t.name} className="rounded-xl border bg-white p-6">
            <p className="text-gray-700">“{t.text}”</p>
            <div className="mt-4 text-sm text-gray-500">
              <span className="font-semibold text-gray-900">{t.name}</span> · {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
