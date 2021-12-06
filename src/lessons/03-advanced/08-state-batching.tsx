/*
 * 08-state-batching
 *
 * Le state batching consiste a rassembler plusieurs appel à `useState` dans une seule mise à jour afin de n'éffectuer qu'un seul re-rendu.
 * Ceci permet d'optimiser les performances.
 *
 * Avant React v18, React batch automatiquement les appels a `useState` sauf :
 * - Dans une callback venant de la callback queue (ex: setTimeout, setInterval)
 * - Dans une callback venant de la micro task queue (ex: promise.then(), après un `await`)
 *
 * Après React v18 :
 * - batch partout
 */

export {};
