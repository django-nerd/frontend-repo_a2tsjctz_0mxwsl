import { sampleProjects } from "./mockData";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FeaturedCarousel() {
  const featured = sampleProjects.filter((p) => p.popular);
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-center gap-2 mb-6">
        <Star className="text-yellow-500" />
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border bg-white overflow-hidden hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate(`/projects/${p.id}`)}
          >
            <img src={p.thumbnail} alt={p.title} className="h-44 w-full object-cover" />
            <div className="p-4">
              <div className="text-xs text-blue-600 font-medium">{p.category}</div>
              <h3 className="mt-1 font-semibold text-gray-900">{p.title}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-gray-600 text-sm">{p.techStack.join(", ")}</span>
                <span className="font-bold">${p.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
