/*
 * 03-binding
 *
 * JSX nous permet de binder des propriétés et des événements.
 *
 * Note : les événements du DOM commencent par `on` et sont en camelCase.
 *
 * Moyen mnémotechnique :
 * - Prendre un évenement natif du DOM (ex: onmousedown) https://developer.mozilla.org/fr/docs/Web/Events
 * - le convertir en camelCase : onMouseDowm
 */

// Exemple

export function PropertyBinding() {
  const disabled = true;

  // L'attribut `disabled` aura la valeur de la constante `disabled`
  return <button disabled={disabled}>Click me</button>;
}

export function EventBinding() {
  const clickHandler = () => {
    console.log("clicked");
  };

  // Appel `clickHandler` au clic sur le bouton
  return <button onClick={clickHandler}>Click me</button>;
}

export function EventBindingWithParams() {
  const clickHandler = (name: string) => {
    console.log("Hello", name);
  };

  /*
   * Appel la fonction anonyme au clic sur le bouton
   * ce qui appelera `clickHandler` avec la valeur `React`
   */
  return <button onClick={() => clickHandler("React")}>Click me</button>;
}
