// src/composants/CarteFilm.tsx
import type { FilmOmdb } from "../lib/omdb";
import { Carte } from "./Carte";
import { Badge } from "./Badge";

export interface CarteFilmProps {
  film: FilmOmdb;
}

type TonType = "info" | "succes" | "attention";

const libellesType: Record<string, string> = {
  movie: "Film",
  series: "Série",
  game: "Jeu",
};

const tonsType: Record<string, TonType> = {
  movie: "info",
  series: "succes",
  game: "attention",
};

export function CarteFilm({ film }: CarteFilmProps) {
  const libelle = libellesType[film.Type] ?? film.Type;
  const ton = tonsType[film.Type] ?? "info";

  return (
    <Carte titre={film.Title} sousTitre={film.Year}>
      <div className="flex flex-col gap-3">
        {film.Poster === "N/A" ? (
          <div className="w-full aspect-[2/3] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            Pas d'affiche
          </div>
        ) : (
          <img
            src={film.Poster}
            alt={`Affiche de ${film.Title}`}
            className="w-full aspect-[2/3] object-cover rounded-lg"
          />
        )}

        <Badge texte={libelle} ton={ton} />
      </div>
    </Carte>
  );
}