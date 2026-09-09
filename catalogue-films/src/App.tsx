import { FILMS, trierPar, filtrerParGenre } from "./lib/utils";
import { ListeFilms } from "./composants/ListeFilms";

function App() {
  const filmsTries = trierPar(FILMS, "titre");
  const filmsSF = filtrerParGenre(FILMS, "SF");
  const documentaires = filtrerParGenre(FILMS, "Documentaire" as any); 
  // ⚠️ voir remarque plus bas — évite le "as any" ici

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-900">Catalogue de films</h1>
      <p className="text-gray-500 mt-2">{FILMS.length} films — composants typés et mise en forme Tailwind.</p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Tous les films</h2>
        <ListeFilms films={filmsTries} onSelection={(film) => console.log(film)} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Documentaires</h2>
        <ListeFilms films={[]} messageVide="Aucun documentaire dans le catalogue pour le moment." />
      </section>
    </main>
  );
}

export default App;