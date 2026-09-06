import { FILMS, trierPar, filtrerParGenre, type film } from "../lib/utils";
import { ListeFilms } from "./ListeFilms";

export function App() {
  const filmsTries = trierPar(FILMS, "titre");

  const filmsSF = filtrerParGenre(FILMS, "SF");

  const filmsVides = filtrerParGenre(FILMS, undefined);

  const handleSelection = (film: film) => {
    alert(`Phim được chọn: ${film.titre}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="border-b border-gray-200 pb-5">
          <h1 className="text-3xl font-bold text-gray-900">
            Catalogue de Films
          </h1>
          <p className="text-gray-600 mt-2">
            TP2 — Design System avec React, TypeScript et Tailwind CSS
          </p>
        </header>

        {/* Section 1: Tous les films */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Tous les films (triés par titre)
          </h2>
          <ListeFilms films={filmsTries} onSelection={handleSelection} />
        </section>

        {/* Section 2: Films SF */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Films de Science-Fiction
          </h2>
          <ListeFilms films={filmsSF} onSelection={handleSelection} />
        </section>

        {/* Section 3: Liste vide */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Recherche sans résultat (Test liste vide)
          </h2>
          <ListeFilms
            films={filmsVides.filter(() => false)}
            messageVide="Aucun film ne correspond à vos critères."
          />
        </section>
      </div>
    </div>
  );
}

export default App;