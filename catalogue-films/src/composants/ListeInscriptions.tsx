import type { InscriptionEnregistree } from "../lib/inscription";
import { Carte } from "./Carte";
import { Badge } from "./Badge";
import { Bouton } from "./Bouton";

export interface ListeInscriptionsProps {
  inscriptions: InscriptionEnregistree[];
  onSuppression?: (id: number) => void;
}

export function ListeInscriptions({
  inscriptions,
  onSuppression,
}: ListeInscriptionsProps) {
  if (inscriptions.length === 0) {
    return (
      <div className="p-8 text-center bg-gray-100 rounded-xl text-gray-500 font-medium">
        Aucune inscription pour le moment.
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 list-none p-0">
      {inscriptions.map((inscription) => (
        <li key={inscription.id}>
          <Carte
            titre={inscription.prenom}
            sousTitre={inscription.email}
            actions={
              onSuppression && (
                <Bouton
                  libelle="Supprimer"
                  variante="danger"
                  onClick={() => onSuppression(inscription.id)}
                />
              )
            }
          >
            <Badge texte="CGV acceptées" ton="succes" />
          </Carte>
        </li>
      ))}
    </ul>
  );
}