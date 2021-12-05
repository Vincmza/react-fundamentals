/*
 * 04-react-memo
 *
 * La fonction `React.memo` permet de créer un composant "pur" et de le mémoïser.
 */

// Exemple

import React, { useState } from "react";

interface CardProps {
  title: string;
}

/*
 * Card est un composant mémoïsé, il sera re-rendu uniquement si ses props changent.
 * C'est a dire si leurs valeurs ou références changent (dans le cas des Objects, Arrays et Functions).
 */
export const Card = React.memo((props: CardProps) => {
  console.log("render Card");
  return <div>{props.title}</div>;
});

export function Parent() {
  const [user, setUser] = useState("");

  /*
   * Même si l'état de `user` change, `Card` ne sera pas re-rendu car ses props n'ont pas changé.
   */
  return (
    <div>
      <input value={user} onChange={e => setUser(e.target.value)} />
      <Card title="Hello React" />
    </div>
  );
}
