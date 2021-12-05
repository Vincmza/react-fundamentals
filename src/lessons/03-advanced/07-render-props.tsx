/*
 * 07-render-props
 *
 * `Render props` est un pattern très utile pour avoir accès au donnée interne d'un composant depuis sont parent.
 */

// Exemple

import { ReactNode } from "react";

interface CustomListProps {
  data: string[];
  render: (item: string) => ReactNode; // c'est la `render props`
}

export function CustomList(props: CustomListProps) {
  /*
   * CustomList ne fait que rendre un `ul` avec des `li`
   * Le contenu des `li` est la responsablité du composant parent, via la props `render`
   */
  return (
    <ul>
      {props.data.map(item => (
        <li key={item}>{props.render(item)}</li>
      ))}
    </ul>
  );
}

export function UsingRenderProps() {
  const fruits = ["Kiwi", "Peach"];

  /*
   * Ceci va rendre le contenu des `li` de `CustomList`.
   * car elle est passé en callback a la props `render`.
   */
  const customFruitRenderer = (fruit: string) => {
    return <p>{fruit} is rendered via a render props</p>;
  };

  return <CustomList data={fruits} render={customFruitRenderer} />;
}
