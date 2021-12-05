/*
 * 11-fragment
 *
 * Un composant ne peut retourner qu'un seul élément racine.
 * Pour palier a ce problème et éviter de tout wrapper dans des `div`, React fourni le composant `Fragment`.
 */

// Exemple

import { Fragment } from "react";

export function UsingFragment() {
  /* 
   * Un `Fragment` n'est pas rendu dans le DOM.
   * Le rendu DOM ci-dessous sera donc : 
     <h1>Hello</h1>
     <p>React</p>
   * 
   * Ceci évite les problèmes de mise en page CSS.
   */
  return (
    <Fragment>
      <h1>Hello</h1>
      <p>React</p>
    </Fragment>
  );
}

export function UsingFragmentShortSynthax() {
  // `<></>` est un raccourci pour `<Fragment></Fragment>`
  return (
    <>
      <h1>Hello</h1>
      <p>React</p>
    </>
  );
}
