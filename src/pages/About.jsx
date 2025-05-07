import "../assets/About.css";

export default function About() {


  return (
    <div className="container about-page">
      {/* Bio Section */}
      <div className="bio-section">
        <img src="tripleh.jpg" alt="Antoine Rousselot" className="bio-pic rounded-xl" />
        <div className="bio-text">
          <h2>Qui suis-je ?</h2>
          <p>
            Antoine, étudiant passionné par le développement web.
          </p>
          <p>
            J'aime concevoir des projets en tout genre que ce soit en HTML/CSS, JavaScript, et j'explore des
            frameworks comme React et Ruby on Rails.
          </p>
          <br></br>
          <p>
            En dehors de tout ça, je suis un grand amoureux de cinéma, de tennis et de cuisine.
          </p>
        </div>
      </div>

      {/* Skills Section */}
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

     
    </div>
  );
}