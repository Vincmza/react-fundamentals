/*
 * 05-rules-of-hooks
 *
 * C'est très important, lisez ceci: https://fr.reactjs.org/docs/hooks-rules.html
 */

// Exemple

import { useState } from "react";

export function GoodUseOfHooks() {
  /* GOOD
   * Le hook est utilisé à la racine de la fonction
   */
  const [name, setName] = useState("Bruce");

  return <div>Hello React</div>;
}

export function BadUseOfHooks() {
  /* BAD
   * Le hook est utilisé dans un bloc de condition.
   * ESLint vous affiche une erreur.
   */
  if (1 + 1 === 2) {
    const [name, setName] = useState("Bruce");
  }

  return <div>Hello React</div>;
}
