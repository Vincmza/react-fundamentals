/*
 * 00-jsx
 *
 * Pour créer un element HTML on utilise la fonction `React.createElement`.
 * Comme cette syntaxe est assez verbeuse et peu pratique, il existe une syntaxe plus simple : le JSX.
 *
 * JSX est une syntaxe permettant d'écrire du HTML-like dans un fichier javascript.
 * Depuis React v16.8 en 2019, un composant est "juste" une fonction qui retourne du JSX.
 *
 * Les fichiers contenant du JSX portent l'extension :
 *  - .jsx (pour JavaScript)
 *  - .tsx (pour TypeScript)
 */

// Exemple

import React from "react";

export function WithReactCreateElement() {
  /*
   * 1er param: nom de l'élément a créer
   * 2eme param : un objet contenant les attributs HTML de l'élement
   * 3eme param : le contenu de l'élément
   *
   * Cet appel créera le code HTML suivant :
   * <div id="header">Hello React</div>
   */
  return React.createElement("div", { id: "header" }, "Hello React");
}

export function WithJSX() {
  // La même chose en JSX
  return <div id="header">Hello React</div>;
}