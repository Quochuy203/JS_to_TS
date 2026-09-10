export interface Inscription {
    nom: string;
    prenom: string;
    email: string;
    motDePasse: string;
    confirmerMotDePasse: string;
    cgv: boolean;
}

export const inscriptionInitiale: Inscription = {
    nom: "",
    prenom: "",
    email: "",
    motDePasse: "",
    confirmerMotDePasse: "",
    cgv: false,
};

export type ErreurIncription = Partial<Record<keyof Inscription, string>>;

export function valider(données: Inscription): ErreurIncription {
    const erreurs: ErreurIncription = {};

    if (données.prenom.trim().length < 2) {
        erreurs.prenom = "Le prénom doit contenir au moins 2 caractères.";
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(données.email)) {
        erreurs.email = "L'adresse e-mail n'est pas valide.";
    }
    if (données.motDePasse.length < 8) {
        erreurs.motDePasse = "Le mot de passe doit contenir au moins 8 caractères.";
    }
    if (données.confirmerMotDePasse !== données.motDePasse) {
        erreurs.confirmerMotDePasse = "Les mots de passe ne correspondent pas.";
    }
    if (!données.cgv) {
        erreurs.cgv = "Vous devez accepter les conditions générales d'utilisation.";
    }
    return erreurs;
}
export type InscriptionEnregistree =
  Omit<Inscription, "motDePasse" | "confirmerMotDePasse"> & { id: number };