import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-xl border bg-white overflow-hidden hover:shadow-lg transition cursor-pointer"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <img src={project.thumbnail} alt={project.title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <div className="text-xs text-blue-600 font-medium">{project.category}</div>
        <h3 className="mt-1 font-semibold text-gray-900">{project.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-gray-600 text-sm">{project.techStack?.join(", ")}</span>
          <span className="font-bold">${project.price}</span>
        </div>
      </div>
    </div>
  );
}
