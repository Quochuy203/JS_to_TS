// src/App.tsx
import { useState } from "react";
import type { Inscription, InscriptionEnregistree } from "./lib/inscription";
import { FormulaireInscription } from "./composants/FormulaireInscription";
import { ListeInscriptions } from "./composants/ListeInscriptions";
import { RechercheFilms } from "./composants/RechercheFilms";

function App() {
  const [inscriptions, setInscriptions] = useState<InscriptionEnregistree[]>([]);

  const gererNouvelleInscription = (donnees: Inscription) => {
    const nouvelle: InscriptionEnregistree = {
      id: Date.now(),
      nom: donnees.nom,
      prenom: donnees.prenom,
      email: donnees.email,
      cgv: donnees.cgv,
    };
    setInscriptions((liste) => [nouvelle, ...liste]);
  };

  const gererSuppression = (id: number) => {
    setInscriptions((liste) => liste.filter((i) => i.id !== id));
  };

  return (
    <>
      <RechercheFilms />

      <main className="max-w-5xl mx-auto px-4 py-10 border-t mt-10 pt-10">
        <h1 className="text-4xl font-bold text-gray-900">Créer un compte</h1>
        <p className="text-gray-500 mt-2">
          Formulaire contrôlé, typé et validé à la soumission.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Inscription</h2>
            <FormulaireInscription onInscription={gererNouvelleInscription} />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Inscrits ({inscriptions.length})
            </h2>
            <ListeInscriptions
              inscriptions={inscriptions}
              onSuppression={gererSuppression}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;