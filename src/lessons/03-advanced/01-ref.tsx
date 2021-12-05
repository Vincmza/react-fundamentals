/*
 * 01-ref
 *
 * Une `ref` permet de stocker une donnée sans que la modification de celle-ci déclenche un re-rendu.
 * Pour accéder/modifier la valeur d'une `ref` on utilise sa propriété `current`.
 *
 * Cas d'usage :
 * - un id de timeout
 * - avoir une référence sur un élément du DOM et le manipuler
 * - stocker des données qui ne sont pas nécéssaire au calcul du rendu
 */

// Exemple

import { useEffect, useRef, useState } from "react";

export function UsingRefToManipulateDomElement() {
  // On utilise une `ref` pour garder une référence sur l'input entre les re-rendus.
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    // Ici `current` fait référence a l'input dans le DOM (qui est de type HTMLInputElement)
    inputRef.current?.focus();
  };

  return (
    <div>
      {/* On défini que `inputRef` fera référence à cette input */}
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}

// Exemple 2

export function UsingRefToStoreMutableValue() {
  const [searchTerm, setSearchTerm] = useState("");

  // On utilise une `ref` pour traquer si c'est le 1er rendu ou non.
  const isFirstRender = useRef(true);

  // Une fausse méthode qui simule un appel backend.
  const fetchUsersByName = (term: string) => {
    console.log(`fetching users by name : ${term}`);
  };

  /*
   * Ceci est un exemple d'une fonctionnalité de "barre de recherche" avec debounce.
   */
  useEffect(() => {
    /*
     * Après le 1er rendu on ne veux pas attendre 300ms avant de fetch les users.
     */
    if (isFirstRender.current) {
      /*
       * Défini que le 1er rendu est passé, donc ce bloc `if` sera ignoré au prochain re-rendu
       *
       * Comme `isFirstRender` est une `ref` :
       * - on peut modifier directement la valeur de sa propriété `current`
       * - la modification ne déclenchera pas un re-rendu
       */
      isFirstRender.current = false;

      // Ceci fera un fetch direct avec `searchTerm` qui vaut "", donc fetch tous les users.
      fetchUsersByName(searchTerm);

      // On retourne et ignore le reste de la fonction
      return;
    }

    /*
     * Le code ci-desous s'éxecute pour tous les autres re-rendu
     */

    // Quand `searchTerm` change on attends 300ms avant de fetch les users.
    const timeoutId = setTimeout(() => {
      fetchUsersByName(searchTerm);
    }, 300);

    /*
     * On clean l'ancien timeout dans la fonction de cleanup du `useEffect`.
     * De cette façon si l'utilisateur tappe trop vite, il n'y aura pas plusieurs timeout qui seront déclenchés, juste le plus récent.
     */
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  return (
    <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
  );
}
