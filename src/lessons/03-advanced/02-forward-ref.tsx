/*
 * 02-forward-ref
 *
 * La fonction `React.forwardRef` permet de passer une `ref` a l'intérieur d'un composant.
 */

// Exemple

import React, { useRef } from "react";

interface CustomInputProps {
  placeholder: string;
}

export const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => {
    //La `ref` passé à `CustomInput` est transmis à cet input
    return <input ref={ref} placeholder={props.placeholder} />;
  }
);

export function UsingRefToManipulateDomElement() {
  // On utilise une `ref` pour garder une référence sur l'input entre les re-rendus.
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    // Ici `current` fait référence a l'input HTML natif a l'intérieur de `CustomInput`
    inputRef.current?.focus();
  };

  return (
    <div>
      {/* On passe `inputRef` à `CustomInput` */}
      <CustomInput ref={inputRef} placeholder="type someting" />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}
