import type { film as Film, statut as StatutFilm } from "../lib/utils";
import { Badge, type TonBadge } from "./Badge";
import { Bouton } from "./Bouton";
import { Carte } from "./Carte";

export interface ListeFilmsProps {
  films: Film[];
  messageVide?: string;
  onSelection?: (film: Film) => void;
}

const configStatut: Record<StatutFilm, { label: string; ton: TonBadge }> = {
  vu: { label: "Déjà vu", ton: "succes" },
  a_voir: { label: "À voir", ton: "info" },
  abandonne: { label: "Abandonné", ton: "neutre" },
};

export function ListeFilms({
  films,
  messageVide = "Aucun film trouvé.",
  onSelection,
}: ListeFilmsProps) {
  if (films.length === 0) {
    return (
      <div className="p-8 text-center bg-gray-100 rounded-xl text-gray-500 font-medium">
        {messageVide}
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0">
      {films.map((film) => {
        const infoStatut = configStatut[film.statut];

        return (
          <li key={film.id}>
            <Carte
              titre={film.titre}
              sousTitre={`${film.annee} — ${film.note}/10`}
              actions={
                onSelection && (
                  <Bouton
                    libelle="Détails"
                    onClick={() => onSelection(film)}
                  />
                )
              }
            >
              <div className="flex flex-wrap gap-2">
                {/* Badge affiche statut avoir vu */}
                {infoStatut && (
                  <Badge texte={infoStatut.label} ton={infoStatut.ton} />
                )}
                {/* Badge affiche les genres du films */}
                {film.genres.map((g) => (
                  <Badge key={g} texte={g} ton="neutre" />
                ))}
              </div>
            </Carte>
          </li>
        );
      })}
    </ul>
  );
}