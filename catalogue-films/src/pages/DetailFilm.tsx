// src/pages/DetailFilm.tsx
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { FilmDetailOmdb } from "../lib/omdb";
import { urlDetail, afficheDisponible } from "../lib/omdb";
import { useFavoris } from "../contextes/FavorisContext";
import { Bouton } from "../composants/Bouton";

export function DetailFilm() {
  const { id } = useParams();
  const { donnees, chargement, erreur } = useFetch<FilmDetailOmdb>(
    id ? urlDetail(id) : null
  );
  const { dispatch } = useFavoris();

  if (chargement) {
    return <p className="max-w-3xl mx-auto px-4 py-10 text-slate-500">Chargement…</p>;
  }

  if (erreur) {
    return <p className="max-w-3xl mx-auto px-4 py-10 text-red-600">{erreur}</p>;
  }

  if (!donnees || donnees.Response === "False") {
    return (
      <p className="max-w-3xl mx-auto px-4 py-10 text-slate-500">
        Film introuvable.
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">{donnees.Title}</h1>
      <p className="text-slate-500 mt-1">
        {donnees.Year} — {donnees.Runtime} — {donnees.Genre}
      </p>

      {afficheDisponible(donnees.Poster) && (
        <img
          src={donnees.Poster}
          alt={`Affiche de ${donnees.Title}`}
          className="mt-4 w-64 rounded-lg"
        />
      )}

      <p className="mt-4 text-slate-700">{donnees.Plot}</p>

      <div className="mt-6">
        <Bouton
          libelle="Ajouter aux favoris"
          onClick={() =>
            dispatch({
              type: "ajouter",
              film: {
                imdbID: donnees.imdbID,
                Title: donnees.Title,
                Year: donnees.Year,
                Type: donnees.Type,
                Poster: donnees.Poster,
              },
            })
          }
        />
      </div>
    </div>
  );
}