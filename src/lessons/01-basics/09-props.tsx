/*
 * 09-props
 *
 * Un composant accepte un seul et unique paramètre, un objet contenant ses propriétés.
 * Par convention on nomme ce paramètre `props` (racourci de : properties).
 */

import { ReactNode } from "react";

// Exemple

// On crée une interface pour typer les props
interface CardProps {
  title: string;
  message: string;
  onAccept: () => void; // les événements customs sont aussi des props
  buttonIcon: ReactNode; // Une props peut être n'importe quoi, meme un composant, du JSX
}

// Card prend en paramètres une `CardProps`
export function Card(props: CardProps) {
  // au clic sur le button, j'appel la callback `props.onAccept()`
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={props.onAccept}>
        {props.buttonIcon}
        <span>Accept</span>
      </button>
    </div>
  );
}

export function UsingProps() {
  // cette fonction sera passé a `Card` via la props de callback `onAccept`
  const acceptHandler = () => {
    console.log("you've clicked the accept button in the Card");
  };

  // les `props` sont passé au composant comme des attributs HTML
  return (
    <Card
      title="Hello"
      message="React"
      buttonIcon={<i>dummy icon</i>}
      onAccept={acceptHandler}
    />
  );
}
