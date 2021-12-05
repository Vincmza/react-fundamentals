/*
 * 18-error-boundary
 *
 * Les error boundaries (périmètres d’erreurs) sont des composants qui :
 * - interceptent les erreurs JavaScript n’importe où au sein de leur arbre de composants enfants
 * - enregistrent ces erreurs
 * - affichent une UI de secours à la place de l’arbre de composants qui a planté
 *
 * Une composant basé sur les classes devient un périmètre d’erreur si elle définit au moins une des méthodes de cycle de vie :
 * - `static getDerivedStateFromError()`
 * - `componentDidCatch()`
 *
 * Attention :
 * Depuis React v16, les erreurs qui ne sont pas interceptées par un périmètre d’erreur entraînent
 * le démontage de l’intégralité de l’arbre des composants (donc crash de l'app => page blanche).
 *
 * une alternative plus interessante : https://www.npmjs.com/package/react-error-boundary
 */

// Exemple

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // On met a jour l'état, au prochain rendu l'UI de secours sera affichée.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Ici on peut envoyer l'erreur a un service de monitoring (ex: sentry)
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}
