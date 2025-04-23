// src/pages/Project.js
import { useParams } from "react-router-dom";

import Card from '../Components/Card.js';

// function Project() {
  // const { id } = useParams(); // Récupère l'ID depuis l'URL (/project/1)

  const Project = () => {
    // Tableau des sections (peut être dynamique)
    const sections = [
      {
        title: "Section 1",
        content: "Contenu de la première section..."
      },
      {
        title: "Section 2",
        content: "Contenu de la deuxième section..."
      },
      {
        title: "Section 3",
        content: "Contenu de la troisième section..."
      }
    ];
  
    return (
      <p>En cours de construction</p>
    );
  };
  
  export default Project;