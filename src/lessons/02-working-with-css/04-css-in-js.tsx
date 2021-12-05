/*
 * 04-css-in-js
 *
 * Il existe des libs tierces qui permettent d'écrire du CSS dans un fichier JavaScript.
 * Cette technique permet d'avoir :
 * - du CSS scopé (pas de collision de nomamge CSS)
 * - du CSS dynamique qui peut dépendre des props du composant
 * - de tout avoir dans un même fichier (principe de colocation)
 * - de charger uniquement le CSS utilisé par les composants affichés
 *
 * Le principal inconvénient est que le CSS est calculé au runtime et peut donc impacter les performances (ex: des apps qui traitent des données en temps réel).
 */

// Exemple

import styled, { css } from "styled-components";

/*
 * Ici nous utilisons `styled-components`, d'autres alternatives sont : @emotion/react, linaria, stitches
 * Le composant `Card` sera une "div stylisé".
 */
export const Card = styled.div`
  background-color: beige;

  & .card-title {
    color: red;
  }

  & .card-body {
    color: green;
  }
`;

/*
 * Style basé sur les props
 */

interface ButtonProps {
  primary?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}

export const Button = styled.button<ButtonProps>`
  color: black;
  background: white;

  ${props =>
    props.primary &&
    css`
      background: teal;
      color: white;
    `}
`;

Button.defaultProps = {
  primary: false,
  size: "md",
};
