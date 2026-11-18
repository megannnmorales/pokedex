import { Route, Routes } from "react-router";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { PokedexPage } from "./pages/PokedexPage";
import NotFoundPage from "./pages/NotFoundPage";
import { TeamPage } from "./pages/TeamPage";
import PokemonPage from "./pages/PokemonPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/pokedex/:id" element={<PokemonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
