export type VarianteBouton = "primaire" | "secondaire" | "danger";
export type TypeBouton = "button" | "submit"

export interface BoutonProps   {
  libelle: string;
  variante?: VarianteBouton;
  desactive?: boolean;
  onClick?: () => void;
  type?: TypeBouton;
}

const base =
  "px-4 py-2 rounded-lg font-medium transition-colors " +
  "focus:outline-none focus:ring-2 focus:ring-offset-1 " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

const stylesVariante: Record<VarianteBouton, string> = {
  primaire: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondaire: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

export function Bouton({
  libelle,
  variante = "primaire",
  desactive = false,
  onClick,
  type = "button",
}: BoutonProps) {
  return (
    <button
      type={type}
      disabled={desactive}
      onClick={onClick}
      className={`${base} ${stylesVariante[variante]}`}
    >
      {libelle}
    </button>
  );
}


