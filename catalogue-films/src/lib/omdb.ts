// src/lib/omdb.ts

export interface FilmOmdb {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;     
  Poster: string; 
}

export interface ReponseRecherche {
  Search?: FilmOmdb[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
}

export function construireUrlRecherche(terme: string): string {
  const cle = import.meta.env.VITE_OMDB_KEY;
  const termeEncode = encodeURIComponent(terme);
  return `https://www.omdbapi.com/?apikey=${cle}&s=${termeEncode}`;
}
export interface FilmDetailOmdb {
  imdbID: string;
  Title: string;
  Year: string;
  Genre: string;
  Runtime: string;
  Plot: string;
  Poster: string;
  Type: string;
  Response: "True" | "False";
  Error?: string;
}

export function urlDetail(id: string): string {
  const cle = import.meta.env.VITE_OMDB_KEY;
  return `https://www.omdbapi.com/?apikey=${cle}&i=${encodeURIComponent(id)}`;
}
export function afficheDisponible(poster: string): boolean {
  return poster !== "N/A" && poster !== "";
}