/*
 * 01-inline-styles
 *
 * La props `style` accept un object JavaScript contenant des styles inlines.
 *
 * Contairement a CSS le nom des propriétés est en camelCase.
 * ex: `background-color` => `backgroundColor`
 */

// Exemple

export function Card() {
  return <div style={{ backgroundColor: "red" }}>Hello React</div>;
}
