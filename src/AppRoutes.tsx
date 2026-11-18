import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PokedexPage } from "./pages/PokedexPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokedex" element={<PokedexPage />} />
    </Routes>
  );
}
