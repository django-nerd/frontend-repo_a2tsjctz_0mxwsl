import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { HomePage, ProjectsPage, ProjectDetailPage, StudentDashboard, AdminDashboard, UploadPage } from "./components/Pages";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
