// layouts/RootLayout.jsx
// Shared layout wrapping every page.
// Navbar stays fixed at top, Footer at bottom.
// React Router renders the matched page inside <Outlet />.

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => (
  <div style={{ background: "#020b1a", minHeight: "100vh", color: "#fff" }}>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900">Skip to content</a>
    <Navbar />
    <main id="main-content" className="pt-16">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default RootLayout;
