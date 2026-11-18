import { Route, Routes } from "react-router";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { PokedexPage } from "./pages/PokedexPage";
import NotFoundPage from "./pages/NotFoundPage";
import { TeamPage } from "./pages/TeamPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
