/*
 * 06-useCallback
 *
 * Le hook `useCallback` permet de mémoïser une fonction.
 */

import React, { useCallback, useState } from "react";

interface ButtonProps {
  onClick: () => void;
}

/*
 * Button est un composant mémoïsé, il sera re-rendu uniquement si ses props changent.
 * C'est a dire si leurs valeurs ou références changent (dans le cas des Objects, Arrays et Functions).
 */
export const Button = React.memo((props: ButtonProps) => {
  console.log("render Button");
  return <button onClick={props.onClick}>My Button</button>;
});

export function Parent() {
  const [user, setUser] = useState("");

  /*
   * La fonction sera défini une fois (car le tableau de dépendance est vide) et sera mémoïsée.
   *
   * Le model mental est : recrée cette fonction uniquement quand une des dépendances du tableau change.
   *
   * Sans `useCallback`, chaque re-rendu du composant aurait déclanché la création d'une nouvelle fonction.
   * Comme la fonction aurait été différente entre chaque re-rendu (pas la meme référence) la mémoïsation de `Button` n'aurait eu aucun effet.
   */
  const onButtonClick = useCallback(() => {
    console.log("Button was clicked");
  }, []);

  return (
    <div>
      <input value={user} onChange={e => setUser(e.target.value)} />
      <Button onClick={onButtonClick} />
    </div>
  );
}
