export function Accueil() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold">Bienvenue</h1>
      <p className="mt-4 text-slate-600">
        Recherchez des films et gardez vos favoris.
      </p>
      <a href="/recherche" className="text-blue-600 underline mt-2 inline-block">
        Aller à la recherche
      </a>
    </div>
  );
}