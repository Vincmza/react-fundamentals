/*
 * 02-global-styles
 *
 * Les styles globaux sont dans le fichier `index.css` à la racine du project (dans create-react-app).
 * Ce fichier est importé dans `index.tsx`.
 */

// Exemple

export function Card() {
  /*
   * En JSX on utilise `className`et pas `class` car c'est un mot clé réservé en JavaScript.
   * la classe CSS `global-card` provient du fichier racine `index.css`
   */
  return <div className="global-card">Hello React</div>;
}
