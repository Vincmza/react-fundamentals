/*
 * 08-state-batching
 *
 * Avant React v18 :
 * - Pas de batch dans une callback venant d'une callback queue (ex: setTimeout, setInterval)
 * - Pas de batch dans une callback venant d'une micro task queue (ex: fetch, promise)
 * 
 * Après React v18 :
 * - batch partout
 */

// Exemple