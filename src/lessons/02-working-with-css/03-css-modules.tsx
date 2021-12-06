/*
 * 03-css-modules
 *
 * Les CSS modules permettent d'avoir du CSS encapsulé.
 * Les classes contenu dans ce fichier seront remplacer des noms uniques pour éviter les collisions de nommage CSS.
 *
 * Les fichiers DOIVENT avoir l'extension .module.css (dans create-react-app).
 */

// Exemple

/*
 * On importe un module CSS comme un fichier JavaScript.
 * `styles` est un objet JavaScript contenant toute les classes du module css.
 *
 * A l'utilisation un nom unique sera créé pour chaque classe du module CSS.
 * - format : [filename]_[classname]__[hash]
 * - ex: Card_card-title__x3hd87
 */
import styles from "../../resources/Card.module.css";

export function Card() {
  // pour les classes CSS contenant un `-` il faut utiliser la syntaxe `tableau` => `styles["my-class-name"]`
  return (
    <div className={styles.card}>
      <h1 className={styles["card-title"]}>Hello</h1>
      <p className={styles["card-body"]}>React</p>
    </div>
  );
}
