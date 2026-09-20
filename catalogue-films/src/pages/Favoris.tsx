// src/pages/Favoris.tsx
import { useFavoris } from "../contextes/FavorisContext";
import { CarteFilm } from "../composants/CarteFilm";
import { Bouton } from "../composants/Bouton";

export function Favoris() {
  const { favoris, dispatch } = useFavoris();

  if (favoris.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900">Vos favoris</h1>
        <p className="text-slate-500 mt-4">Aucun favori pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Vos favoris</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 mt-6">
        {favoris.map((film) => (
          <li key={film.imdbID} className="flex flex-col gap-2">
            <CarteFilm film={film} />
            <Bouton
              libelle="Retirer"
              variante="danger"
              onClick={() => dispatch({ type: "retirer", id: film.imdbID })}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}