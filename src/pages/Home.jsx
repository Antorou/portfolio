import "../assets/Home.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  useEffect(() => {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData(form);
  
      try {
        const response = await fetch("https://formsubmit.co/rousselotantoine7@gmail.com", {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        });
  
        if (response.ok) {
          status.textContent = "Message envoyé avec succès !";
          form.reset();
        } else {
          status.textContent = "Une erreur est survenue. Réessayez.";
        }
      } catch (error) {
        status.textContent = "Erreur réseau. Réessayez.";
      }
    };
  
    form.addEventListener("submit", handleSubmit);
  
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  
    return (
      <div className="container">
        <div className="profile-section">
          <img src="tripleh.jpg" alt="Profile Picture" className="profile-pic" />
          <div className="profile-text">
            <h1>Antoine Rousselot</h1>
            <h2>Étudiant en <span class="etudiant">développement web</span></h2>
            <p>En pleine reconversion, j'apprends le métier de développeur web en Master à l'ETNA</p>
          </div>
        </div>
        <div className="content-sections">
        <Link to="/portfolio" className="section">
          <img src="portfolio.png" alt="Portfolio" className="section-pic rounded-xl" />
          <h3>Portfolio</h3>
          <p>Pour voir quelques un de mes projets</p>
          <div className="btn">Voir le portfolio</div>
        </Link>
        <Link to="/about" className="section">
          <img src="bout.png" alt="A propos" className="section-pic rounded-xl" />
          <h3>À propos</h3>
          <p>Pour en savoir plus sur mon profil et mes compétences</p>
          <div className="btn">En savoir plus</div>
        </Link>
        </div>
        <div className="contact-section">
          <h3>Par ici si vous souhaitez me contacter :</h3>
          <form id="contact-form">
            <input type="text" name="name" placeholder="Votre nom" required />
            <input type="email" name="email" placeholder="Votre email" required />
            <textarea name="message" placeholder="Votre message" required></textarea>
            <button type="submit">Envoyer</button>
            <p id="form-status"></p>
          </form>
        </div>

      </div>
    );
  }
  