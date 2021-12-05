/*
 * 02-interpolation
 *
 * En JSX on utilise {} pour interpoler une expression javascript.
 *
 * Moyen mnémotechnique :
 * - En JSX dans une {} vous êtes dans `le monde JavaScript`
 * - En JSX hors des {} vous êtes dans `le monde JSX`
 */

// Exemple

export function UsingJavaScriptExpression() {
  return <div>{1 + 1}</div>; // rendu <div>2</div>
}

export function DisplayingVariable() {
  const name = "React";

  return <div>Hello {name}</div>; // rendu <div>Hello React</div>
}
