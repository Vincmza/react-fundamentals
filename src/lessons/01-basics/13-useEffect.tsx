/*
 * 13-useEffect
 *
 * useEffect permet l'execution d'effets de bord basé sur des dépendances, après le rendu d'un composant.
 */

// Exemple

import { useEffect, useState } from "react";

export function NoDependencyArray() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  /*
   * La callback passé à `useEffect` sera éxécuté :
   * - après le 1er rendu du composant
   * - après chaque re-rendu
   */
  useEffect(() => {
    console.log(
      "i'm a side effect that always run after this component render"
    );
  });

  return <button onClick={increment}>Clicked {count} times</button>;
}

export function NoDependencyArrayWithCleanup() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  /*
   * La callback retourné par `useEffect` sera éxécuté :
   * - avant la ré-execution de la callback passé a `useEffect`
   * - avant que le composant ne soit détruit
   *
   * Cette callback retourné par `useEffect` permet de faire du "nettoyage" (ex: clear un timeout), avant le lancement du prochain effet de bord
   */
  useEffect(() => {
    console.log(
      "i'm a side effect that always run after this component render"
    );

    return () => {
      "Cleaning up before the next side effect call";
    };
  });

  return <button onClick={increment}>Clicked {count} times</button>;
}

export function WithDependencyArray() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  /*
   * La callback passé à `useEffect` sera éxécuté :
   * - après le 1er rendu du composant
   * - après chaque re-rendu SEULEMENT SI `count` à changé (`count` est une dépendance de l'éffet de bord).
   *
   * Le model mental est : "Je veux produire un effet de board, quand tel truc change".
   * Il faut comprendre : "RE-EXECUTE la callback QUAND une dépendance du tableau CHANGE"
   *
   * ATTENTION : la comparaison entre l'ancienne et la nouvelle valeur d'une dépendance à `useEffect` est une `shallow comparaison`.
   * Dans le cas d'un objet ou tableau, seule la référence est comparé et pas l'objet en profondeur.
   */
  useEffect(() => {
    console.log(`The new value of count is ${count}`);
  }, [count]);

  return <button onClick={increment}>Clicked {count} times</button>;
}

export function WithDependencyArrayAndCleanup() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  /*
   * La callback retourné par `useEffect` sera éxécuté :
   * - avant la ré-execution de la callback passé a `useEffect`
   * - avant que le composant ne soit détruit
   *
   * Cette callback retourné par `useEffect` permet de faire du "nettoyage" (ex: clear un timeout, un listener), avant le lancement du prochain effet de bord
   */
  useEffect(() => {
    console.log(`The new value of count is ${count}`);

    return () => {
      console.log("Cleaning up before the next side effect call");
    };
  }, [count]);

  return <button onClick={increment}>Clicked {count} times</button>;
}

export function RunOnlyOnce() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  /*
   * La callback passé à `useEffect` sera éxécuté :
   * - uniquement après le 1er rendu du composant (car tableau de dépendance "vide")
   *
   * Le model mental est le même que celui avec les dépendances.
   *
   * Ici il faut comprendre : "RE-EXECUTE la callback QUAND rien CHANGE"
   * MAIS, comme "rien" ne change jamais, il n'y aura jamais de nouvelle éxecution de la callback
   */
  useEffect(() => {
    console.log("I run only once, on the first render");
  }, []);

  return <button onClick={increment}>Clicked {count} times</button>;
}

export function RunOnlyOnceWithCleanup() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  /*
   * La callback retourné par `useEffect` sera éxécuté :
   * - uniquement avant que le composant ne soit détruit (car tableau de dépendance "vide")
   */
  useEffect(() => {
    console.log("I run only once, on the first render");

    return () => {
      console.log("I run only once, before the component is destroyed");
    };
  }, []);

  return <button onClick={increment}>Clicked {count} times</button>;
}
