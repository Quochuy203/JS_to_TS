// src/composants/RechercheFilms.tsx
import { useState, useEffect } from "react";
import type { FilmOmdb, ReponseRecherche } from "../lib/omdb";
import { construireUrlRecherche } from "../lib/omdb";
import { CarteFilm } from "./CarteFilm";

export function RechercheFilms() {
  const [terme, setTerme] = useState("");
  const [films, setFilms] = useState<FilmOmdb[]>([]);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    if (!terme) {
      setFilms([]);
      setErreur(null);
      return;
    }

    const controleur = new AbortController();

    const rechercher = async () => {
      setChargement(true);
      setErreur(null);

      try {
        const url = construireUrlRecherche(terme);
        const r = await fetch(url, { signal: controleur.signal });

        if (!r.ok) {
          throw new Error(`Erreur HTTP ${r.status}`);
        }

        const d: ReponseRecherche = await r.json();

        if (d.Response === "False") {
          setFilms([]);
          setErreur(d.Error ?? "Erreur inconnue.");
          return;
        }

        setFilms(d.Search ?? []);
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") {
          return;
        }
        setErreur(e instanceof Error ? e.message : "Erreur inconnue");
      } finally {
        setChargement(false);
      }
    };

    rechercher();

    return () => controleur.abort();
  }, [terme]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-900">Recherche de films</h1>
      <p className="text-gray-500 mt-2">Données fournies par l'API OMDB.</p>

      <label htmlFor="terme" className="block mt-8 mb-1 text-sm font-medium text-gray-700">
        Rechercher un film
      </label>
      <input
        id="terme"
        type="text"
        value={terme}
        onChange={(e) => setTerme(e.target.value)}
        placeholder="batman..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <div className="mt-8">
        {!terme && (
          <p className="text-gray-400">Tapez un titre pour lancer la recherche.</p>
        )}

        {terme && chargement && <p className="text-gray-500">Chargement…</p>}

        {terme && !chargement && erreur && (
          <p className="text-red-600">{erreur}</p>
        )}

        {terme && !chargement && !erreur && films.length === 0 && (
          <p className="text-gray-500">
            Aucun film ne correspond à « {terme} ».
          </p>
        )}

        {terme && !chargement && !erreur && films.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0">
            {films.map((film) => (
              <li key={film.imdbID}>
                <CarteFilm film={film} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}