/*
 * 08-controlled-input
 *
 * En JSX,
 * Pour attribuer une valeur a un input, textarea, selct, etc... on utilise l'attribut `value`.
 * Pour écouter le changement de valeur d'un input, textarea, selct, etc... on utilise l'événement `onChange`.
 *
 * Attribuer uniquement une `value` rendra votre input en `lecture seule` (donc non éditable).
 *
 * Attribuer `value` et `onChange` crée un `Controlled Input`, un champ controlé par React.
 * React devient la source unique de vérité pour l'état de cet input
 * Ainsi le composant React qui affiche l'input contrôle aussi son comportement par rapport aux saisies de l’utilisateur.
 * Un input dont l’état est contrôlé de cette façon par React est appelé un « composant contrôlé ».
 */

// Exemple

import { useState } from "react";

export function ReadOnlyInput() {
  const [val, setVal] = useState("I will never change");

  /*
   * Cet input n'est pas modifiable
   *
   * Il faut comprendre :
   * - la valeur de l'input est `val` (mon état)
   * - quand je saisie du texte dans l'input, rien ne se passe au niveau de React
   * - donc pas de re-rendu
   * - donc l'input garde la valeur de `val`
   */
  return <input value={val} />;
}

export function ControlledInput() {
  const [val, setVal] = useState("I can change");

  /*
   * Cet input est modifiable et controllé par React
   *
   * Il faut comprendre :
   * - la valeur de l'input est `val` (mon état)
   * - quand je saisie du texte dans l'input, `onChange` s'execute
   * - `onChange` appel `setVal` et met a jour l'état `val` avec la nouvelle valeur (event.target.value)
   * - l'appel a `setVal` déclenche un re-rendu
   * - l'input est re-rendu avec la nouvelle valeur de `val`
   *
   * event.target.value c'est du JavaScript de base (see https://developer.mozilla.org/fr/docs/Web/API/Event/target)
   */
  return <input value={val} onChange={event => setVal(event.target.value)} />;
}
