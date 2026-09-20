// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Layout } from "./composants/Layout";
import { Accueil } from "./pages/Accueil";
import { Recherche } from "./pages/Recherche";
import { Inscription } from "./pages/Inscription";
import { PageIntrouvable } from "./pages/PageIntrouvable";
import { DetailFilm } from "./pages/DetailFilm";
import { Connexion } from "./pages/Connexion";
import { RouteProtegee } from "./composants/RouteProtegee";
import { Favoris } from "./pages/Favoris";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Accueil />} />
        <Route path="recherche" element={<Recherche />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="films/:id" element={<DetailFilm />} />
        <Route path="connexion" element={<Connexion />} />
        <Route
          path="favoris"
          element={
            <RouteProtegee>
              <Favoris />
            </RouteProtegee>
          }
        />
        <Route path="*" element={<PageIntrouvable />} />
      </Route>
    </Routes>
  );
}

export default App;