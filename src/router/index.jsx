// router/index.jsx
// Centralized route configuration using createBrowserRouter.
// Add new pages here — they automatically get Navbar + Footer
// from RootLayout via the children/Outlet pattern.

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import ProjectDetailPage from "../pages/projects/ProjectDetailPage";
import EducationPage from "../pages/EducationPage";
import SectionPage from "../pages/SectionPage";
import Skills from "../components/Skills/Skills";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import MemoriesPage from "../pages/MemoriesPage";
import { createNavLinks } from "../data/portfolioData";
import { loadPortfolio } from "../services/portfolioService";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    loader: async ({ request }) => {
      const portfolio = await loadPortfolio({ signal: request.signal });
      return { portfolio, navLinks: createNavLinks(portfolio.data) };
    },
    element: <RootLayout />,
    children: [
      {
        index: true, // matches "/"
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      { path: "project", element: <ProjectsPage /> },
      { path: "project/:slug/detail", element: <ProjectDetailPage /> },
      { path: "education", element: <EducationPage /> },
      {
        path: "skills",
        element: (
          <SectionPage>
            <Skills />
          </SectionPage>
        ),
      },
      {
        path: "services",
        element: (
          <SectionPage>
            <Services />
          </SectionPage>
        ),
      },
      {
        path: "testimonials",
        element: (
          <SectionPage>
            <Testimonials />
          </SectionPage>
        ),
      },
      {
        path: "contact",
        element: (
          <SectionPage>
            <Contact />
          </SectionPage>
        ),
      },
      { path: "memories", element: <MemoriesPage /> },
      {
        path: "*", // catches all unmatched routes
        element: <NotFound />,
      },
    ],
  },
]);
