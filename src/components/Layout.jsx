import { Link, NavLink } from "react-router-dom";
import { Home, LayoutGrid, Upload, User, Settings } from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-gray-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <Link to="/" className="font-extrabold text-xl tracking-tight">
            StudyStack
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-600 hover:text-gray-900"}>Home</NavLink>
            <NavLink to="/projects" className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-600 hover:text-gray-900"}>Projects</NavLink>
            <NavLink to="/dashboard" className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-600 hover:text-gray-900"}>Dashboard</NavLink>
            <NavLink to="/admin" className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-600 hover:text-gray-900"}>Admin</NavLink>
            <NavLink to="/upload" className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-600 hover:text-gray-900"}>Upload</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">
              <User size={16}/> Sign in
            </button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t mt-16">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} StudyStack</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-800">Privacy</a>
            <a href="#" className="hover:text-gray-800">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
