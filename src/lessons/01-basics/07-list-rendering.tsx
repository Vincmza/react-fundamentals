/*
 * 07-list-rendering
 *
 * On ne peut pas utiliser de boucle for en JSX, car ce ne sont pas des expressions mais des déclarations (see: https://2ality.com/2012/09/expressions-vs-statements.html).
 *
 * Pour afficher des composants a partir d'un tableau on utilise l'opérateur `map` des Arrays (see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
 */

// Exemple

export function ListRendering() {
  const fruits = [
    { id: 1, name: "Kiwi" },
    { id: 2, name: "Peach" },
  ];

  /*
   * Il faut lire ceci :
   * "Je vais `mapper` chaque objet de mon array `fruits` en `li`."
   */
  return (
    <ul>
      {fruits.map(fruit => (
        /*
         * `key` est obligatoire et doit être unique pour optimiser le re-rendu des listes
         * Ne pas utiliser l'index d'un tableau comme `key` mais plutôt un id unique venant du backend.
         */
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
}
