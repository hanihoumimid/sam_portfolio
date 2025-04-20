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
      <div className="bg-white w-full">
        {sections.map((section, index) => (
          <div key={index}>
            {/* Section */}
            <div className="w-full py-8 md:py-12">
              <div className="mx-auto px-4 md:px-6 max-w-7xl">
                <h2 className="text-2xl font-bold text-gray-900">
                  Software
                </h2>
                <p className="mt-4 text-gray-600">Adobe Illustrator</p>
                <p className="mt-4 text-gray-600">Photoshop</p>
              </div>
            </div>
  
            {/* Divider (sauf après la dernière section) */}
            {index < sections.length - 1 && (
              <div className="border-t border-gray-200 w-full"></div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Project;