/*
 * 19-suspense-react-lazy
 *
 * Le composant <Suspense> permet d'afficher un composant ou JSX de secours à la place d'un composant lazy loadé.
 * Le contenu passé à la props `fallback` de <Suspense> sera affiché en attendant que le navigateur télécharge le composant importé par `React.lazy()`.
 *
 * ATTENTION : Un composant lazy loadé DOIT être un export par défaut pour fonctionner avec `React.lazy()`.
 */

// Exemple

import React, { Suspense } from "react";

const LazyLoadedComponent = React.lazy(
  () => import("../../playground/LazyLoadedComponent")
);

export function UsingSuspense() {
  /*
   * Le composant ou JSX passé en `fallback` à <Suspense> sera affiché en attendant
   * que le navigateur télécharge le composant <LazyLoadedComponent> car il est importé via `React.lazy()`.
   */
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LazyLoadedComponent />
    </Suspense>
  );
}
