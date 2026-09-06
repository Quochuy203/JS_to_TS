import type { ReactNode } from "react";

export interface CarteProps {
  titre: string;
  sousTitre?: string;
  children: ReactNode;
  actions?: ReactNode; // pied de carte, optionnel
}

export function Carte({ titre, sousTitre, children, actions }: CarteProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between gap-4 border border-gray-100">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{titre}</h3>
        {sousTitre && (
          <p className="text-sm text-gray-500 mt-1">{sousTitre}</p>
        )}
        <div className="mt-3">{children}</div>
      </div>
      {actions && <div className="pt-3 border-t border-gray-100">{actions}</div>}
    </div>
  );
}