/*
 * 10-children
 *
 * Pour passer du contenu entre les balises ouvrante et fermante d'un composant on utilise la props: children
 */

// Exemple

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode; // la props DOIT avoir ce nom et ce type
}

export function Card(props: CardProps) {
  return <div>{props.children}</div>;
}

export function UsingChildren() {
  return (
    <Card>
      I am the content of the card, i will be accessible inside the component
      via the `children` props.
    </Card>
  );
}
