/*
 * 06-conditional-rendering
 *
 * On ne peut pas utiliser de if/else en JSX, car ce ne sont pas des expressions mais des déclarations (see: https://2ality.com/2012/09/expressions-vs-statements.html).
 *
 * Pour afficher des composants de façon conditionnel ont utilise les opérateurs raccourcis ou ternaires
 */

// Exemple

export function If() {
  return <div>{true && <p>I render if the left operand is truthy</p>}</div>;
}

export function Unless() {
  // Unless est l'inverse de If, donc `{false || ...}` est équivalent à `{!true && ...}`
  return <div>{false || <p>I render if the left operand is falsy</p>}</div>;
}

export function IfElse() {
  // C'est juste un ternaire en JavaScript
  return (
    <div>
      {true ? (
        <p>I render if the expression is truthy</p>
      ) : (
        <p>I render if the expression is falsy</p>
      )}
    </div>
  );
}
