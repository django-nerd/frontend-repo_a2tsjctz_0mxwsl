import { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Hero from "./Hero";
import Categories from "./Categories";
import FeaturedCarousel from "./FeaturedCarousel";
import Testimonials from "./Testimonials";
import ProjectCard from "./ProjectCard";
import { sampleProjects } from "./mockData";

export function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCarousel />
      <Testimonials />
    </>
  );
}

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export function ProjectsPage() {
  const q = useQuery();
  const [sort, setSort] = useState(q.get("sort") || "new");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const keyword = q.get("q")?.toLowerCase() || "";
  const category = q.get("category") || "";

  const list = sampleProjects
    .filter((p) => (category ? p.category === category : true))
    .filter(
      (p) =>
        keyword
          ? p.title.toLowerCase().includes(keyword) ||
            p.description.toLowerCase().includes(keyword) ||
            p.techStack.join(" ").toLowerCase().includes(keyword)
          : true
    )
    .filter((p) => p.price >= min && p.price <= max)
    .sort((a, b) => {
      if (sort === "new") return b.createdAt - a.createdAt;
      if (sort === "popular") return b.downloads - a.downloads;
      return a.price - b.price;
    });

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">Projects</h1>
          {(keyword || category) && (
            <p className="text-sm text-gray-500 mt-1">
              Filters: {keyword && `keyword=\"${keyword}\" `}{category && `category=${category}`}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-600">Sort</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded border px-3 py-2"
          >
            <option value="new">Newest</option>
            <option value="popular">Popular</option>
            <option value="price">Price</option>
          </select>
          <label className="ml-6 text-sm text-gray-600">Price</label>
          <input
            type="number"
            className="w-24 rounded border px-2 py-2"
            placeholder="min"
            value={min}
            onChange={(e) => setMin(Number(e.target.value) || 0)}
          />
          <span>–</span>
          <input
            type="number"
            className="w-24 rounded border px-2 py-2"
            placeholder="max"
            value={max}
            onChange={(e) => setMax(Number(e.target.value) || 0)}
          />
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

export function ProjectDetailPage() {
  const { id } = useParams();
  const project = sampleProjects.find((p) => p.id === id);
  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <img src={project.thumbnail} alt={project.title} className="rounded-lg w-full object-cover" />
          <h1 className="mt-6 text-3xl font-bold">{project.title}</h1>
          <div className="mt-2 flex gap-2 flex-wrap">
            {project.techStack.map((t) => (
              <span key={t} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-700">{project.description}</p>
          <h3 className="mt-6 font-semibold">Features</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <div className="mt-8">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold">Instructions</h3>
            <div className="mt-2 rounded-lg border bg-white p-4 text-gray-700 whitespace-pre-wrap">
              {project.instructions}
            </div>
          </div>
        </div>
        <aside className="lg:col-span-1">
          <div className="rounded-xl border bg-white p-6 sticky top-24">
            <div className="text-3xl font-extrabold">${project.price}</div>
            <button className="mt-4 w-full rounded-lg bg-blue-600 text-white py-3 font-medium hover:bg-blue-700">Buy Project</button>
            <p className="mt-3 text-sm text-gray-500">Instant download after purchase.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function StudentDashboard() {
  const purchases = ["p2", "p4"]; // mock
  const myProjects = sampleProjects.filter((p) => purchases.includes(p.id));
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Student Dashboard</h1>
      <div className="mt-6">
        <div className="border-b">
          <div className="flex gap-6 text-sm">
            <button className="py-2 border-b-2 border-blue-600 font-medium">Purchased Projects</button>
            <button className="py-2 text-gray-500">Profile Settings</button>
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProjects.map((p) => (
            <div key={p.id} className="rounded-xl border bg-white p-4">
              <div className="flex items-center gap-4">
                <img src={p.thumbnail} className="w-20 h-16 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-gray-500">{p.category}</div>
                </div>
                <button className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdminDashboard() {
  const pending = [
    { id: "s1", title: "Chat App", author: "Rahul", price: 25, date: "2d ago" },
    { id: "s2", title: "Quiz System", author: "Meera", price: 15, date: "4d ago" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <div className="mt-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 rounded-xl border bg-white p-6">
          <h2 className="font-semibold mb-4">Pending Approvals</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-2">Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Submitted</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {pending.map((r) => (
                  <tr key={r.id} className="border-t">
                    <td className="py-2">{r.title}</td>
                    <td>{r.author}</td>
                    <td>${r.price}</td>
                    <td>{r.date}</td>
                    <td className="text-right">
                      <button className="mr-2 rounded border px-3 py-1 hover:bg-gray-50">Reject</button>
                      <button className="rounded bg-emerald-600 text-white px-3 py-1 hover:bg-emerald-700">Approve</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-semibold mb-4">Recent Transactions</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-between">
              <span>Smart Attendance System</span>
              <span className="font-medium">$29</span>
            </li>
            <li className="flex items-center justify-between">
              <span>College Event Portal</span>
              <span className="font-medium">$19</span>
            </li>
            <li className="flex items-center justify-between">
              <span>E-Commerce Storefront</span>
              <span className="font-medium">$39</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function UploadPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Upload Project</h1>
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input className="mt-1 w-full rounded border px-3 py-2" placeholder="Project title" />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea className="mt-1 w-full rounded border px-3 py-2" rows={4} placeholder="Write a detailed description" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select className="mt-1 w-full rounded border px-3 py-2">
              <option>Java</option>
              <option>Python</option>
              <option>JavaScript</option>
              <option>PHP</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Price ($)</label>
            <input type="number" className="mt-1 w-full rounded border px-3 py-2" placeholder="e.g., 29" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">YouTube Link</label>
          <input className="mt-1 w-full rounded border px-3 py-2" placeholder="https://youtube.com/..." />
        </div>
        <div>
          <label className="block text-sm font-medium">ZIP Upload</label>
          <input type="file" accept=".zip" className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <button className="rounded-lg bg-blue-600 text-white px-5 py-2.5 font-medium hover:bg-blue-700">Submit for Review</button>
      </form>
    </section>
  );
}
