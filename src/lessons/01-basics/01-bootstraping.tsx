/*
 * 01-bootstraping
 *
 * Pour `monter` une application React dans le DOM on utilise la lib ReactDOM
 */

// Exemple

import React from "react";
import ReactDOM from "react-dom";

// Mon composant `racine`
export function App() {
  return <div>Hello React</div>;
}

/*
 * `ReactDOM.render` est à appeler au démarrage de l'app (ex: index.tsx dans create-react-app)
 *
 * La méthode `render` prend 2 paramètres :
 * - Le composant a rendre dans le DOM
 * - L'emplacement ou ce composant doit être rendu
 *
 * Ici, on rends le composant `App` dans un élément HTML ayant l'id `root`
 * Cette element du DOM est en général une div dans le fichier `index.html` (ex: dans create-react-app, voir le dossier pubilc/index.html à la racine de ce projet)
 */
ReactDOM.render(<App />, document.getElementById("root"));
