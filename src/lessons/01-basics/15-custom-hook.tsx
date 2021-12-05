/*
 * 15-custom-hook
 *
 * Il est possble de créer ces propres hooks (custom hooks) afin de créer de la logique réutilisable.
 *
 * Un custom hook DOIT TOUJOURS commencer par `use`
 */

// Exemple

import { useState } from "react";

export function useCounter(initialValue: number) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return {
    count,
    increment,
  };
}

export function Counter() {
  // la logique a été extraite dans un custom hook réutilisable
  const { count: countA, increment: incrementA } = useCounter(0);
  const { count: countB, increment: incrementB } = useCounter(100);

  return (
    <div>
      <button onClick={incrementA}>Clicked A {countA} times</button>
      <button onClick={incrementB}>Clicked B {countB} times</button>
    </div>
  );
}
