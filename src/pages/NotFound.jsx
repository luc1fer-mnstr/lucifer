// pages/NotFound.jsx
// Shown when a user navigates to a route that doesn't exist.

import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6"
    style={{ paddingTop: "80px" }}
  >
    <h1 className="text-blue-400 font-extrabold" style={{ fontSize: "6rem", lineHeight: 1 }}>
      404
    </h1>
    <p className="text-white text-2xl font-bold">Page Not Found</p>
    <p className="text-slate-400 max-w-sm">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <Link
      to="/"
      className="px-6 py-3 rounded-lg text-white font-semibold text-sm transition-transform hover:scale-105"
      style={{ background: "linear-gradient(135deg,#2563eb,#3b82f6)", boxShadow: "0 0 20px rgba(59,130,246,0.35)" }}
    >
      ← Back to Home
    </Link>
  </div>
);

export default NotFound;
