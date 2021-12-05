/*
 * 03-useImperativeHandle
 *
 * Le hook `useImperativeHandle` permet de personnaliser l’instance qui est exposée au composant parent lors de l’utilisation d'une `ref`.
 */

// Exemple

import React, { useImperativeHandle, useRef } from "react";

interface CustomInputProps {
  placeholder: string;
}

interface CustomInputRef {
  focus: () => void;
}

export const CustomInput = React.forwardRef<CustomInputRef, CustomInputProps>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    /*
     * Ceci permet a `CustomInput` d'exposer uniquement certaine partie de son api interne via la `ref` passé en paramètre.
     */
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));

    // On défini que `inputRef` fera référence à cette input
    return <input ref={inputRef} placeholder={props.placeholder} />;
  }
);

export function UsingRefToManipulateDomElement() {
  // On utilise une `ref` pour garder une référence sur l'input entre les re-rendus.
  const customInputRef = useRef<CustomInputRef>(null);

  const focusInput = () => {
    // Ici `current` fait référence a l'objet retourné par `useImperativeHandle` à l'intérieur de `CustomInput`
    customInputRef.current?.focus();
  };

  return (
    <div>
      {/* On passe `customInputRef` à `CustomInput` */}
      <CustomInput ref={customInputRef} placeholder="type someting" />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}
