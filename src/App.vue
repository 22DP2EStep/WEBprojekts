<script setup>
import { ref, computed, onMounted } from "vue";
import { universities } from "./pages/augstskolas";


const searchQuery = ref("");
console.log (universities);

const filteredUniversities = computed(() => {
  const query = searchQuery.value.toLowerCase();
  if (!query) return universities;

  return universities.filter(
    (uni) =>
      uni.name.toLowerCase().includes(query) ||
      uni.location.toLowerCase().includes(query)
  );
});

const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};


const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  
  document.documentElement.setAttribute(
    "data-theme",
    isDarkMode.value ? "dark" : "light"
  );
};


onMounted(() => {
  console.log('log');
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  isDarkMode.value = prefersDark;
  document.documentElement.setAttribute(
    "data-theme",
    prefersDark ? "dark" : "light"
  );
});
</script>

<template>
  <div class="container" :class="{ 'dark-mode': isDarkMode }">
    <header>
      <h1>UniSalīdzināt</h1>
      <p class="tagline">Atrod Savu Ideālo Universitāti</p>

      <div class="search-section">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Meklēt universitātes..."
          class="search-input"
        />
      </div>

      <nav :class="{ 'nav-open': isNavOpen }">
        <div class="burger-menu" @click="toggleNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav-links">
          <li><a href="#home">Sākums</a></li>
          <li><a href="#universities">Universitātes</a></li>
          <li><a href="#compare">Salīdzināt</a></li>
          <li><a href="#about">Par mums</a></li>
          <li><a href="#contact">Kontakti</a></li>
          <li>
            <a class="theme-toggle" @click="toggleTheme">
              {{ isDarkMode ? "Gaišs" : "Tumšs" }}
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="featured-universities">
        <h2>Populārākās Universitātes</h2>
        
        <div class="university-grid">
          <div
            v-for="uni in filteredUniversities"
            :key="uni.name"
            class="university-card"
          >
            <img :src="uni.image" :alt="uni.name" />
            <h3>{{ uni.name }}</h3>
            <p class="location">{{ uni.location }}</p>
            <p class="ranking">Pasaules Reitings: {{ uni.ranking }}</p>
            <p class="tuition">Mācību maksa: {{ uni.tuition }}</p>
            <button class="compare-btn">Salīdzināt</button>
          </div>
        </div>
      </section>
    </main>

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
            <li><a href="#about">Par Mums</a></li>
            <li><a href="#privacy">Privātuma Politika</a></li>
            <li><a href="#terms">Lietošanas Noteikumi</a></li>
            <li><a href="#faq">BUJ</a></li>
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
        <p>
          &copy; {{ new Date().getFullYear() }} UniSalīdzināt. Visas tiesības
          aizsargātas.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Add CSS variables for theming */
:root {
  --bg-color: #ffffff;
  --text-color: #2c3e50;
  --card-bg: #ffffff;
  --card-shadow: rgba(0, 0, 0, 0.08);
  --nav-bg: rgba(33, 33, 33, 0.85);
}

:root[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #e0e0e0;
  --card-bg: #2d2d2d;
  --card-shadow: rgba(0, 0, 0, 0.2);
  --nav-bg: rgba(0, 0, 0, 0.9);
}
</style>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--bg-color);
  color: var(--text-color);
}

header {
  width: 100%;
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  color: white;
  border-radius: 12px;
  margin-bottom: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
}

h1 {
  font-size: 3.5em;
  margin-bottom: 15px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.tagline {
  font-size: 1.3em;
  margin-bottom: 35px;
  font-weight: 300;
}

.search-section {
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 18px 25px;
  border: none;
  border-radius: 30px;
  font-size: 1.1em;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.university-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 35px;
  padding: 20px 0;
}

.university-card {
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 4px 20px var(--card-shadow);
  overflow: hidden;
  transition: all 0.3s ease;
}

.university-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.university-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.university-card:hover img {
  transform: scale(1.05);
}

.university-card h3 {
  padding: 20px 20px 10px;
  margin: 0;
  color: var(--text-color);
  font-size: 1.4em;
}

.university-card p {
  padding: 0 20px;
  margin: 8px 0;
  color: #666;
  font-size: 1.1em;
}

.compare-btn {
  margin: 20px;
  padding: 12px 30px;
  background: linear-gradient(to right, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1em;
  font-weight: 500;
}

.compare-btn:hover {
  background: linear-gradient(to right, #2980b9, #1a5276);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

h2 {
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.2em;
  text-align: center;
  font-weight: 600;
}

nav {
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  z-index: 1000;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  border-radius: 0 0 0 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1.1em;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
}

.nav-links li a:hover {
  color: #fdbb2d;
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  cursor: pointer;
  position: relative;
  z-index: 1001;
  padding: 10px;
  margin: -10px;
}

.burger-menu span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
}

.theme-toggle {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

@media (min-width: 769px) {
  .nav-links {
    display: flex;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .burger-menu {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 250px;
    background: rgba(33, 33, 33, 0.95);
    backdrop-filter: blur(10px);
    padding: 80px 20px 20px;
    transition: right 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
  }

  .nav-links li a {
    display: block;
    text-align: center;
  }

  .nav-open .nav-links {
    right: 0;
  }

  .nav-open .burger-menu span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
  }

  .nav-open .burger-menu span:nth-child(2) {
    opacity: 0;
  }

  .nav-open .burger-menu span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -6px);
  }

  .theme-toggle {
    width: 100%;
    margin-top: 10px;
  }
}

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

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-form button {
    width: 100%;
  }
}
</style>
