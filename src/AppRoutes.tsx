import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PokedexPage } from "./pages/PokedexPage";
import NotFoundPage from "./pages/NotFoundPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokedex" element={<PokedexPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
