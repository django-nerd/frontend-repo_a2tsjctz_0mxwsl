export const categories = [
  "Java",
  "Python",
  "JavaScript",
  "PHP",
  "C#",
  "C++",
  "Data Science",
  "Web Development",
  "Mobile Apps"
];

export const sampleProjects = [
  {
    id: "p1",
    title: "Smart Attendance System",
    category: "Python",
    price: 29,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    description:
      "A face-recognition based attendance system using OpenCV and Python. Includes training script, GUI, and CSV export.",
    features: [
      "Live camera face detection",
      "CSV/Excel export",
      "Model training helper",
      "Tkinter based GUI"
    ],
    techStack: ["Python", "OpenCV", "NumPy"],
    youtubeId: "dQw4w9WgXcQ",
    instructions:
      "1) Install requirements. 2) Run train.py to generate embeddings. 3) Start the app with main.py. 4) Use the GUI to register faces.",
    popular: true,
    downloads: 124,
    approved: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 10
  },
  {
    id: "p2",
    title: "E-Commerce Storefront",
    category: "JavaScript",
    price: 39,
    thumbnail: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
    description:
      "A full MERN-like frontend with cart, product listing, and checkout UI using vanilla REST mocks.",
    features: ["Product catalog", "Cart & checkout", "Responsive design"],
    techStack: ["React", "Tailwind"],
    youtubeId: "ysz5S6PUM-U",
    instructions: "Install, run npm start, and populate products.json to get started.",
    popular: true,
    downloads: 201,
    approved: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 4
  },
  {
    id: "p3",
    title: "Hospital Management System",
    category: "Java",
    price: 49,
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    description:
      "Desktop application for patient, doctor, and appointment management with MySQL integration.",
    features: ["CRUD for entities", "Reports", "Auth"],
    techStack: ["Java", "Swing", "MySQL"],
    youtubeId: "oHg5SJYRHA0",
    instructions: "Import SQL, configure DB URL, build and run.",
    popular: false,
    downloads: 58,
    approved: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 20
  },
  {
    id: "p4",
    title: "College Event Portal",
    category: "PHP",
    price: 19,
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Web app to create and manage college events with registrations and email notifications.",
    features: ["Event CRUD", "Email notifications", "Admin panel"],
    techStack: ["PHP", "MySQL", "Bootstrap"],
    youtubeId: "ysz5S6PUM-U",
    instructions: "Copy to htdocs, configure DB, import SQL, done!",
    popular: true,
    downloads: 340,
    approved: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2
  }
];
