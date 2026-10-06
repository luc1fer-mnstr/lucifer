import { localPortfolioData } from "../data/portfolioData";

const isRecord = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
const isOptionalString = (value) => value === undefined || value === null || typeof value === "string";

const isValidPortfolio = (value) => {
  if (!isRecord(value) || !isRecord(value.heroData) || !isRecord(value.heroData.socials)) return false;
  if (typeof value.heroData.name !== "string" || typeof value.heroData.title !== "string") return false;
  if (![value.heroData.description, value.heroData.photoUrl, value.heroData.logoUrl, value.heroData.cvLink]
    .every(isOptionalString)) return false;
  if (!isRecord(value.aboutData) || typeof value.aboutData.heading !== "string"
    || !Array.isArray(value.aboutData.paragraphs)
    || !isOptionalString(value.aboutData.photoUrl)
    || !value.aboutData.paragraphs.every((paragraph) => typeof paragraph === "string")) return false;
  if (!isRecord(value.contactData)) return false;
  if (![value.contactData.email, value.contactData.phone, value.contactData.telegram, value.contactData.location, value.contactData.photoUrl]
    .every(isOptionalString)) return false;
  if (!["skillsData", "educationData", "projectsData", "servicesData", "testimonialsData"]
    .every((key) => Array.isArray(value[key]) && value[key].every(isRecord))) return false;

  return value.skillsData.every((item) => typeof item.name === "string")
    && value.educationData.every((item) => typeof (item.degree || item.title) === "string")
    && value.projectsData.every((item) => typeof item.slug === "string" && typeof item.title === "string"
      && [item.technologies, item.focusAreas, item.skills, item.tags]
        .every((tags) => tags === undefined || Array.isArray(tags)))
    && new Set(value.projectsData.map((item) => item.slug)).size === value.projectsData.length
    && value.servicesData.every((item) => typeof item.title === "string")
    && value.testimonialsData.every((item) => typeof item.name === "string");
};

export const loadPortfolio = async ({ signal } = {}) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");
  if (!baseUrl) return { data: localPortfolioData, source: "local", error: null };

  try {
    const response = await fetch(`${baseUrl}/api/portfolio`, {
      headers: { Accept: "application/json" },
      signal: signal ? AbortSignal.any([signal, AbortSignal.timeout(8000)]) : AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Portfolio API returned ${response.status}`);

    const payload = await response.json();
    const apiData = payload?.data ?? payload;
    if (!isValidPortfolio(apiData)) throw new Error("Portfolio API response has an invalid shape");

    const data = {
      ...localPortfolioData,
      ...apiData,
      heroData: {
        ...localPortfolioData.heroData,
        ...apiData.heroData,
        socials: { ...localPortfolioData.heroData.socials, ...apiData.heroData.socials },
      },
      aboutData: { ...localPortfolioData.aboutData, ...apiData.aboutData },
      contactData: { ...localPortfolioData.contactData, ...apiData.contactData },
    };

    return { data, source: "api", error: null };
  } catch (error) {
    if (signal?.aborted) throw error;
    console.error("Unable to load portfolio from API; using local fallback.", error);
    return { data: localPortfolioData, source: "local-fallback", error: error.message };
  }
};
