/*
 * 12-portal
 *
 * Un portail permet d'afficher un élement ailleurs dans le DOM que dans son composant parent.
 */

// Exemple

import ReactDOM from "react-dom";

export function Modal() {
  return <div>Hello React</div>;
}

/*
 *On récupère l'élement avec l'id `overlays` dans `index.html`
 * force unwrap avec `!` car on sait que cette élément existe, nous l'avons créé
 */
const overlaysRoot = document.getElementById("overlays")!;

export function UsingPortal() {
  /*
   * Le composant `Modal` sera rendu en dehors de son composant parent, dans l'élement avec l'id `overlays` dans `index.html`
   * Cependant la propagation des évenements, l'API Context, etc, fonctionne toujours de la même façon.
   * `Modal` sera toujours un enfant du composant `UsingPortal`, il est juste rendu ailleurs dans le DOM.
   */
  return ReactDOM.createPortal(<Modal />, overlaysRoot);
}
