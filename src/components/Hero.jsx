import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function Hero({ onSearch }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const q = e.target.q.value.trim();
    onSearch?.(q);
    navigate(`/projects?q=${encodeURIComponent(q)}`);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Find and Buy Academic Projects
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover peer-built projects across Java, Python, JS and more. Buy, learn, and ship faster.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="q"
                  placeholder="Search by tech stack or keyword"
                  className="w-full rounded-l-lg border border-gray-300 py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="rounded-r-lg bg-blue-600 px-5 text-white font-medium hover:bg-blue-700"
              >
                Search
              </button>
            </form>
            <div className="mt-4 text-sm text-gray-500">
              Popular: Java, Python, PHP, MERN, Flutter
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-6 border">
            <img
              src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop"
              alt="Students collaborating"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
