/*
 * 04-useState
 *
 * useState est un `React hook` qui permet d'ajouter un etat local à un composant et de le modifier.
 * useState renvoie une valeur d’état local et une fonction pour la mettre à jour.
 * La modification d'un état entraine le re-rendu du composant => `la fonction s'éxécute a nouveau`
 *
 * Lorsque l'état est un `reference type` (Object & Array) il doit être modifié de façon immuable.
 *
 * Note: tous les hooks de React commence par `use`
 */

// Exemple

import React, { useState } from "react";

export function WithValueType() {
  /*
   * useState crée un etat `name` avec la valeur initiale : Bruce
   * Et un setter, une methode `setName` permettant de changer l'état
   *
   * L'état en lui même (ici name) n'est pas modifiable, il faut utiliser le setter.
   * L'appel au setter déclenche TOUJOURS un re-rendu par React.
   */
  const [name, setName] = useState("Bruce");

  const callMeBatman = () => {
    /*
     * ici on change l'état via le setter : Bruce -> Batman
     * Le composant sera donc re-rendu => nouvel appel à `WithValueType`
     * Dans ce re-rendu `name` vaudra donc : Batman
     */
    setName("Batman");
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={callMeBatman}>Call me batman</button>
    </div>
  );
}

export function UpdateBasedOnPreviousState() {
  /*
   * crée un etat `count` avec la valeur initiale 0
   * et une methode `setCount` permettant de changer l'état
   */
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    /* BAD
     * utiliser directement `count` ne garanti pas d'avoir la dernière valeur de l'état à jour
     * Les 3 `setCount()` ci-dessous retournerons `1` et pas `3`
     */
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    /* GOOD
     * ici on change l'état basé sur l'état précédent : 0 -> 0 + 1 = 1
     * avec le mode `fonction` on est garanti d'avoir la dernière valeur de l'état à jour passé en parametre de notre callback
     */
    setCount(prevCount => prevCount + 1);
  };

  return <button onClick={incrementCount}>Clicked {count} times</button>;
}

export function WithObject() {
  /*
   * useState crée un etat dont la valeur initiale est un objet.
   */
  const [person, setPerson] = useState({ name: "Bruce", gender: "male" });

  const callMeBatman = () => {
    /*
     * ici on change l'état via le setter.
     * lorsque l'état est un objet, il doit être modifié de façon immuable.
     *
     * Ici on crée donc un nouvel objet basé sur l'état précédent avec le spread operator.
     */
    setPerson(prevState => ({
      ...prevState,
      name: "Batman",
    }));
  };

  return (
    <div>
      <p>My name is {person.name}</p>
      <button onClick={callMeBatman}>Call me batman</button>
    </div>
  );
}

export function WithArray() {
  /*
   * useState crée un etat dont la valeur initiale est un tableau.
   */
  const [fruits, setFruits] = useState(["Kiwi", "Cherry"]);

  const addPeach = () => {
    /*
     * ici on change l'état via le setter.
     * lorsque l'état est un tableau, il doit être modifié de façon immuable.
     *
     * Ici on crée donc un nouveau tableau basé sur l'état précédent avec le spread operator.
     */
    setFruits(prevState => [...prevState, "Peach"]);
  };

  return (
    <div>
      <p>{fruits.join(",").toString()}</p>
      <button onClick={addPeach}>Add peach</button>
    </div>
  );
}
