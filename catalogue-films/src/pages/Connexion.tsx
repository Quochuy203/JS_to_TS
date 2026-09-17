// src/pages/Connexion.tsx
import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../contextes/AuthContext";
import { ChampTexte } from "../composants/ChampTexte";
import { Bouton } from "../composants/Bouton";

export function Connexion() {
  const [pseudo, setPseudo] = useState("");
  const { connecter } = useAuth();

  const gererEnvoi = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pseudo.trim().length === 0) return;
    connecter(pseudo.trim());
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Connexion</h1>
      <form onSubmit={gererEnvoi} noValidate className="mt-6 flex flex-col gap-4">
        <ChampTexte
          nom="pseudo"
          label="Pseudo"
          valeur={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
        <Bouton libelle="Se connecter" type="submit" />
      </form>
    </div>
  );
}