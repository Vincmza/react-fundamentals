/*
 * 05-useMemo
 *
 * Le hook `useMemo` permet de mémoïser une valeur.
 */

import React, { useMemo, useState } from "react";

// Exemple

function fibonacci(num: number): number {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

export function UsingUseMemoToPreventLargeRecomputation() {
  const [user, setUser] = useState("");
  const [num, setNum] = useState(0);

  /*
   * La valeur sera calculée uniqement quand `num` change et sera mémoïsée.
   *
   * Le model mental est : re-calcul cette valeur uniquement quand une des dépendances du tableau change.
   *
   * Sans `useMemo`, chaque re-rendu du composant aurait déclanché le calcul.
   */
  const fiboOfNum = useMemo(() => {
    console.log(`computing fibonacci of ${num}`);
    return fibonacci(num);
  }, [num]);

  return (
    <div>
      <input
        type="text"
        placeholder="user"
        value={user}
        onChange={e => setUser(e.target.value)}
      />
      <input
        type="number"
        placeholder="num to compute"
        value={num}
        onChange={e => setNum(+e.target.value)}
      />
      <p>
        The finonacci of {num} is {fiboOfNum}
      </p>
    </div>
  );
}

// Exemple 2

interface CardProps {
  title: { value: string };
}

/*
 * Card est un composant mémoïsé, il sera re-rendu uniquement si ses props changent.
 * C'est a dire si leurs valeurs ou références changent (dans le cas des Objects, Arrays et Functions)
 */
export const Card = React.memo((props: CardProps) => {
  console.log("render Card");
  return <div>{props.title.value}</div>;
});

export function Parent() {
  const [user, setUser] = useState("");

  /*
   * La valeur sera calculée une fois (car le tableau de dépendance est vide) et sera mémoïsée.
   *
   * Sans `useMemo`, chaque re-rendu du composant aurait déclanché le calcul.
   * Comme la valeur aurait été différente entre chaque re-rendu (pas la meme référence) la mémoïsation de `Card` n'aurait eu aucun effet.
   */
  const title = useMemo(() => {
    return { value: "Hello React" };
  }, []);

  return (
    <div>
      <input value={user} onChange={e => setUser(e.target.value)} />
      <Card title={title} />
    </div>
  );
}
