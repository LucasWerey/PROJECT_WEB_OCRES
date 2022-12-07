import "./spinner.scss";

// Création d'un spinner de chargement
export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <h1> CHARGEMENT ...</h1>
      <div className="loading-spinner"></div>
    </div>
  );
}
