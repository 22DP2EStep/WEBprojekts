<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Kontakti</h4>
          <p>Izglītības iela 123</p>
          <p>info@unisalidzinat.lv</p>
          <p>+371 67123456</p>
        </div>
        <div class="footer-section">
          <h4>Ātrās Saites</h4>
          <ul>
            <div>
              <div></div>
              <router-link to="/about" class="link">Par mums</router-link>
              <div></div>
              <router-link to="/privacy-policy" class="link">Privātuma Politika</router-link>
              <div></div>
              <router-link to="/Terms" class="link">Lietošanas Noteikumi</router-link>
              </div>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Jaunumu Vēstkopa</h4>
          <p>Saņem jaunākos universitāšu reitingus un ziņas.</p>
          <div class="newsletter-form">
            <input type="email" placeholder="Ievadi savu e-pastu" />
            <button>Abonēt</button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} UniSalīdzināt. Visas tiesības aizsargātas.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Move your footer CSS here from the original file */
  .footer {
  background: var(--card-bg);
  color: var(--text-color);
  padding: 60px 20px 20px;
  margin-top: 60px;
  box-shadow: 0 -4px 20px var(--card-shadow);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-section h4 {
  color: var(--text-color);
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: 600;
}

.footer-section p {
  margin: 10px 0;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 10px 0;
}

.footer-section a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #3498db;
}

.social-icon {
  width: 24px;
  height: 24px;
  fill: var(--text-color);
  transition: all 0.3s ease;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.2);
}

.social-links a:hover .social-icon {
  fill: #3498db;
}

.newsletter-form {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.newsletter-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-color);
}

.newsletter-form button {
  padding: 10px 20px;
  background: linear-gradient(to right, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-form button:hover {
  background: linear-gradient(to right, #2980b9, #1a5276);
  transform: translateY(-2px);
}

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

</style>
  