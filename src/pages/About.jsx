import "../assets/About.css";

export default function About() {
  return (
    <div className="container about-page">
      {/* Bio Section - Version originale */}
      <div className="bio-section">
        <img src="tripleh.jpg" alt="Antoine Rousselot" className="bio-pic rounded-xl" />
        <div className="bio-text">
          <h2>Qui suis-je ?</h2>
          <p>
          Salut ! Je suis Antoine, étudiant passionné par le développement web 💻.</p>
          <p>J'adore donner vie à des projets créatifs en utilisant HTML/CSS, JavaScript, 
            et en explorant des frameworks comme React et Ruby on Rails 🚀.</p>
            <p>Mon objectif ? Transformer des idées en expériences numériques captivantes, 
              en alliant créativité et technicité pour des résultats époustouflants ✨.</p>
               <p>Je suis toujours à la recherche de nouveaux défis et opportunités pour grandir et apprendre
                 dans ce domaine en constante évolution 🌱.
          </p>
        </div>
      </div>

      {/* Nouvelle section Parcours */}
      <div className="journey-section">
        <h2>Mon parcours</h2>
        <div className="journey-container">
          <div className="journey-item">
            <div className="journey-icon">🍽️</div>
            <div className="journey-content">
              <h3>Restauration</h3>
              <p>J'ai commencé ma carrière dans le domaine de la restauration à Londres dès mes 18 ans en m'y expatriant seul et où j'ai développé mon sens du service et du travail d'équipe.</p>
            </div>
          </div>
          <div className="journey-item">
            <div className="journey-icon">💻</div>
            <div className="journey-content">
              <h3>Reconversion</h3>
              <p>Passionné par la technologie, j’ai décidé de me reconvertir dans le développement web pour allier créativité et logique, transformer des lignes de code en expériences utilisateur captivantes, et contribuer à façonner le numérique de demain. .</p>
            </div>
          </div>
          <div className="journey-item">
            <div className="journey-icon">🚀</div>
            <div className="journey-content">
              <h3>Bootcamp</h3>
              <p>J'ai suivi un bootcamp intensif et très intéressant au Wagon qui m'a permis d'acquérir les bases du développement et de confirmer ma passion pour ce domaine.</p>
            </div>
          </div>
          <div className="journey-item">
            <div className="journey-icon">🎓</div>
            <div className="journey-content">
              <h3>Master à l'ETNA</h3>
              <p>Aujourd'hui, je poursuis mes études en master à l'ETNA et en al pour approfondir mes connaissances et me spécialiser.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section - Version originale */}
      <div className="skills-section">
        <h2>Mes skills</h2>
        <div className="skills-list">
          {[
            { name: 'HTML & CSS', level: 90, logo: 'html.png' },
            { name: 'JavaScript', level: 80, logo: 'js.png' },
            { name: 'TypeScript', level: 80, logo: 'ts.png' },
            { name: 'React', level: 75, logo: 'react.png' },
            { name: 'Ruby', level: 70, logo: 'ruby.png' },
            { name: 'Rails', level: 70, logo: 'rails.png' },
            { name: 'Python', level: 60, logo: 'python.png' },
            { name: 'NodeJS', level: 70, logo: 'node.png' },
            { name: 'PostgreSQL', level: 70, logo: 'psql.png' },
            { name: 'Docker', level: 50, logo: 'docker.png' },
          ].map(skill => (
            <div key={skill.name} className="skill-bar">
              <div className="skill-header">
                <div className="skill-info">
                  <img src={skill.logo} alt={skill.name} className="skill-logo" />
                  <span>{skill.name}</span>
                </div>
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nouvelle section Passions */}
      <div className="hobbies-section">
        <h2>Mes passions</h2>
        <div className="hobbies-grid">
          <div className="hobby-card">
            <div className="hobby-icon">🎾</div>
            <h3>Tennis</h3>
            <p>Un sport dont je suis fan et que je pratique régulièrement pour le challenge et le dépassement de soi.</p>
          </div>
          <div className="hobby-card">
            <div className="hobby-icon">🎬</div>
            <h3>Cinéma</h3>
            <p>Grand amateur de films, particulièrement de dramas. Si je devais en citer trois, je dirais Interstellar, There will be blood & Poor things !</p>
          </div>
          <div className="hobby-card">
            <div className="hobby-icon">🍳</div>
            <h3>Cuisine</h3>
            <p>Une passion héritée de mon papa qui est chef et de mon passé dans la restauration, que j'aime partager.</p>
          </div>
          <div className="hobby-card">
            <div className="hobby-icon">✈️</div>
            <h3>Voyages</h3>
            <p>Découvrir de nouvelles cultures et paysages est une source constante d'inspiration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}