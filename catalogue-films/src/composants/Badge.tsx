export type TonBadge = "neutre" | "succes" | "info" | "attention";

export interface BadgeProps {
  texte: string;
  ton?: TonBadge;   // "neutre" par défaut
}
const stylesTon: Record<TonBadge, string> = {
  neutre: "bg-gray-100 text-gray-700 border-gray-200",
  succes: "bg-green-100 text-green-800 border-green-200",
  info: "bg-blue-100 text-blue-800 border-blue-200",
  attention: "bg-amber-100 text-amber-800 border-amber-200",
};

export function Badge({ texte, ton = "neutre" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full border ${stylesTon[ton]}`}
    >
      {texte}
    </span>
  );
}