import { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/Portfolio.css";

export default function Portfolio() {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "antorou"; // Replace with your GitHub username

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "RuNation",
      images: [
        "rn.jpg",
        "runation1.jpg",
        "runation2.jpg",
      ],
      description: "Jeu de stratégie et de running",
      details: "Création d'un jeu de stratégie façon conquete de territoire, où le but est de courir et de prendre le contrôle d'un maximum de zones. Nous avons uilisé l'API de Strava.",
      technologies: ["Ruby", "Ruby on Rails", "JavaScript", "PostgreSQL", "Heroku"]
    },
    {
      id: 2,
      title: "Visit Indonesia",
      images: [
        "flores.jpg",
        "bali.png",
        "bali1.png"
      ],
      description: "Site vitrine pour un guide",
      details: "Detailed information about project 2 including technologies used, challenges faced, and outcomes achieved.",
      technologies: ["ReactJS", "Tailwind"]
    },
    {
    id: 3,
    title: "API Pokedex",
    images: [
      "pokem.png",
      "pokem1.png",
      "pokem2.png",
      "pokem3.png",
      "pokem4.png",
      "pokem5.png",
    ],
    description: "Creation d'une API",
    details: "Projet que j'ai adoré faire, consistant a créer une API depuis une base de données. CRUD, gestion des users.",
    technologies: ["TypeScript", "NodeJS", "JWT", "MySQL",]
  },
  {
    id: 4,
    title: "Bataille navale",
    images: [
      "battleship.png",
      "battleship1.png",
      "battleship2.png",
      "battleship3.png",
    ],
    description: "Programmation d'une bataille navale",
    details: "Programmation de l'iconnique Bataille navale, jouable dans le terminal.",
    technologies: ["TypeScript", "NodeJS"]
  },
  {
    id: 5,
    title: "Recettes",
    images: [
      "recipe.png",
      "recipes01.png",
      "recipes02.png",
      "recipes03.png",
      "recipes04png",
    ],
    description: "Programmation d'une bataille navale",
    details: "Programmation de l'iconnique Bataille navale, jouable dans le terminal.",
    technologies: ["TypeScript", "NodeJS"]
  },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const [enlargedImage, setEnlargedImage] = useState(null);

  return (
    <div className={`container mx-auto px-4 py-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Introductory sentence with animation */}
      <div className="text-center mb-12 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Mes projets</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Voici ici mes projets. Cliquez sur chacun d'eux pour plus de détails, screenshots, et les technologies usées.
        </p>
      </div>

      {/* Projects grid with staggered animations */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card max-w-sm rounded-xl overflow-hidden shadow-lg bg-grey-100 flex flex-col transition-all duration-300 hover:scale-105 animate-fadeInUp`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img 
              src={project.images[0]} 
              alt={project.title} 
              className="w-full h-48 object-contain transition-transform duration-500 hover:scale-110"
            />
            <div className="p-4 flex-grow">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-700 text-base">
                {project.description}
              </p>
            </div>
            <div className="px-4 pb-4">
              <button 
                onClick={() => openModal(project)}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Voir le projet
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with animations */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedProject?.title}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition duration-300 transform hover:rotate-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Carousel Section */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop={true}
                  autoPlay={false}
                  interval={5000}
                  stopOnHover={true}
                  dynamicHeight={false}
                  className="carousel-container"
                >
                  {selectedProject?.images.map((image, index) => (
                    <div key={index} className="h-96 cursor-pointer" onClick={() => setEnlargedImage(image)}>
                      <img 
                        src={image} 
                        alt={`${selectedProject.title} - ${index + 1}`} 
                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              
              {/* Project Details */}
              <div className="mb-6 animate-fadeInUp">
                <h4 className="font-semibold text-lg mb-2">Description</h4>
                <p className="text-gray-700 mb-4">
                  {selectedProject?.details}
                </p>
                
                <h4 className="font-semibold text-lg mb-2">Technologies Utilisées</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject?.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full transition-all duration-300 hover:bg-blue-200 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end animate-fadeInUp">
                <button 
                  onClick={closeModal}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

       {/* GitHub Repos Section - Minimalist Cards */}
       <div className="repos-section">
        <h2>Mes Projets Récents (depuis GitHub)</h2>
        {loading && <p className="loading-text">Chargement des projets...</p>}
        {error && <p className="error-text">Erreur: {error}</p>}
        
        <div className="repo-cards-container">
          {repos.map(repo => (
            <a 
              key={repo.id} 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="repo-card"
            >
              <h3>{repo.name}</h3>
              <p className="repo-description">
                {repo.description || "Aucune description fournie"}
              </p>
              <div className="repo-footer">
                <span className="repo-language">{repo.language || "Multiple"}</span>
                <div className="repo-stats">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>⎇ {repo.forks_count}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setEnlargedImage(null);
              }}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-4xl"
            >
              &times;
            </button>
            <img 
              src={enlargedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}