/*
 * 16-context-api
 *
 * L'API Context offre un moyen de faire passer des données à travers l’arborescence du composant
 * sans avoir à passer manuellement les props à chaque niveau
 */

// Exemple

import React, { ReactNode, useContext } from "react";

/*
 * Setup du contexte
 */

// Défini le type de donnée exposé par le contexte
interface AuthContextValue {
  currentUser: string;
}

// On crée le contexte avec une valeur par défaut
const AuthContext = React.createContext({} as AuthContextValue);

// On crée un composant responsable de "fournir" le contexte
export function AuthContextProvier(props: { children: ReactNode }) {
  // Un exemple bidon de données du contexte
  const authContextValue: AuthContextValue = {
    currentUser: "Fabien",
  };

  // tous les enfants de ce composant auront accès à `authContextValue` sans passage de props.
  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

/*
 * Utilisation du contexte
 */

export function Root() {
  return (
    <AuthContextProvier>
      <GrandParent />
    </AuthContextProvier>
  );
}

export function GrandParent() {
  return <Parent />;
}

export function Parent() {
  return <Child />;
}

export function Child() {
  return <GrandChild />;
}

export function GrandChild() {
  /*
   * `GrandChild` à accès au contexte `AuthContext` en utilisant le hook `useContext`.
   * Car en amont de l'arbre de composant, dans `Root` il y a un `AuthContextProvier` qui englobe le composant `GrandParent`.
   */
  const { currentUser } = useContext(AuthContext);

  return <p>Current user is : {currentUser}</p>;
}
