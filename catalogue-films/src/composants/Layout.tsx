// src/composants/Layout.tsx
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contextes/AuthContext";

export function Layout() {
  const { pseudo, deconnecter } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white px-6 py-4 flex items-center justify-between">
        <nav className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-slate-600"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/recherche"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-slate-600"
            }
          >
            Recherche
          </NavLink>
          <NavLink
            to="/favoris"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-slate-600"
            }
          >
            Favoris
          </NavLink>
          <NavLink
            to="/inscription"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-300" : "text-slate-700"
            }
          >
            Inscription
          </NavLink>
        </nav>

        {pseudo ? (
          <div className="flex items-center gap-4">
            <span className="text-slate-600">Connecté en tant que {pseudo}</span>
            <button onClick={deconnecter} className="text-red-600 text-sm">
              Déconnexion
            </button>
          </div>
        ) : (
          <NavLink
            to="/connexion"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-slate-600"
            }
          >
            Connexion
          </NavLink>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-white px-6 py-4 text-center text-sm text-slate-400">
        TP5 — React Router
      </footer>
    </div>
  );
}