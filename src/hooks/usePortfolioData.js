import { useRouteLoaderData } from "react-router-dom";
import { localPortfolioData } from "../data/portfolioData";

const usePortfolioData = () =>
  useRouteLoaderData("root")?.portfolio?.data ?? localPortfolioData;

export default usePortfolioData;
