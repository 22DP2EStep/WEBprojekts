<script setup>
import { ref, computed, onMounted } from "vue";
import { universities } from "./pages/augstskolas";
export const universities = ref([ 
    {
      name: "Latvijas Universitāte",
      location: "Rīga, Latvija",
      ranking: "#1",
      tuition: "€2,000/gadā",
      image: "https://www.lu.lv/fileadmin/user_upload/lu_portal/projekti/cfi/zinas/2018/csm_J035_6535afd9d9.jpg",
      programs: 150,
      students: "20k",
      acceptance: "30%",
      satisfaction: "85%",
    },
    {
      name: "Rīgas Tehniskā universitāte",
      location: "Rīga, Latvija",
      ranking: "#2",
      tuition: "€2,500/gadā",
      image: "https://www.rtu.lv/writable/public_files/b_RTU_1_rtu_kipsala.jpg",
      programs: 180,
      students: "15k",
      acceptance: "25%",
      satisfaction: "88%",
    },
    {
      name: "Rīgas Stradiņa universitāte",
      location: "Rīga, Latvija",
      ranking: "#3",
      tuition: "€3,000/gadā",
      image: "https://www.researchlatvia.gov.lv/sites/default/files/styles/article_embed_image/public/2024-06/rsu.jpg?itok=O9Pka1Iz",
      programs: 120,
      students: "10k",
      acceptance: "20%",
      satisfaction: "90%",
    },
    {
      name: "Daugavpils Universitāte",
      location: "Daugavpils, Latvija",
      ranking: "#4",
      tuition: "€1,500/gadā",
      image: "https://cdn.statically.io/img/cms.studyinlatvia.lv/q=90,f=auto,w=800/storage/app/uploads/public/648/360/d1e/648360d1ecfa7928954414.jpg",
      programs: 100,
      students: "8k",
      acceptance: "35%",
      satisfaction: "80%",
    },
    {
      name: "Liepājas Universitāte",
      location: "Liepāja, Latvija",
      ranking: "#5",
      tuition: "€1,800/gadā",
      image: "https://enciklopedija.lv/api/image/thumbnail?name=c12cd06b5524-aaa7191d-22fe-4d74-accc-47da3b683825.jpg&size=title",
      programs: 90,
      students: "5k",
      acceptance: "40%",
      satisfaction: "82%",
    },
    {
      name: "Vidzemes Augstskola",
      location: "Valmiera, Latvija",
      ranking: "#6",
      tuition: "€1,600/gadā",
      image: "https://www.latvia.travel/sites/default/files/styles/mobile_promo/public/media_image/terbatas_iela_1.jpg?itok=b63W4sFm",
      programs: 70,
      students: "3k",
      acceptance: "45%",
      satisfaction: "78%",
    },
    {
      name: "Ventspils Augstskola",
      location: "Ventspils, Latvija",
      ranking: "#7",
      tuition: "€1,700/gadā",
      image: "https://www.researchlatvia.gov.lv/sites/default/files/styles/article_embed_image/public/2024-06/vea.PNG?itok=2FEZy82x",
      programs: 60,
      students: "2.5k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Rēzeknes Tehnoloģiju akadēmija",
      location: "Rēzekne, Latvija",
      ranking: "#8",
      tuition: "€1,400/gadā",
      image: "https://enciklopedija.lv/api/image/thumbnail?name=e75195395717-186219e6-4971-43a4-81e3-f690d3b790e2.jpg&size=multimedia",
      programs: 80,
      students: "4k",
      acceptance: "38%",
      satisfaction: "83%",
    },
    {
      name: "Banku Augstskola",
      location: "Rīga, Latvija",
      ranking: "#9",
      tuition: "€2,200/gadā",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Banku_augstskola_-_panoramio.jpg",
      programs: 50,
      students: "2k",
      acceptance: "60%",
      satisfaction: "75%",
    },
    {
      name: "Biznesa augstskola Turība",
      location: "Rīga, Latvija",
      ranking: "#10",
      tuition: "€2,300/gadā",
      image: "https://www.turiba.lv/storage/files/dji-0265-hdr-1-1200x_.jpg?token=48c195e1e850ed3f7c5f3ee60a44bcba",
      programs: 60,
      students: "3k",
      acceptance: "55%",
      satisfaction: "77%",
    },
    {
      name: "Latvijas Lauksaimniecības universitāte",
      location: "Jelgava, Latvija",
      ranking: "#11",
      tuition: "€1,900/gadā",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Biron_Rezidenz.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Rīgas Ekonomikas augstskola",
      location: "Rīga, Latvija",
      ranking: "#12",
      tuition: "€3,500/gadā",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Strelnieku_iela_4a.JPG/640px-Strelnieku_iela_4a.JPG",
      programs: 40,
      students: "1.5k",
      acceptance: "20%",
      satisfaction: "90%",
    },
    {
      name: "Jāzepa Vītola Latvijas Mūzikas akadēmija",
      location: "Rīga, Latvija",
      ranking: "#13",
      tuition: "€1,900/gadā",
      image: "https://lastatic.ams3.cdn.digitaloceanspaces.com/2018/10/Muzikas-akademija_LET_1475472.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Latvijas Kūltūras akadēmija",
      location: "Rīga, Latvija",
      ranking: "#14",
      tuition: "€1,900/gadā",
      image: "https://lka.edu.lv/media/posts/post/image/Ludzas_iela_24_EIYnN5k.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Latvijas Mākslas akadēmija",
      location: "Rīga, Latvija",
      ranking: "#15",
      tuition: "€1,900/gadā",
      image: "https://enciklopedija.lv/api/image/original?name=a3692a10b0e7-6bc8f992-4958-442c-8198-651e616ccb0b.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Latvijas Jūras akadēmija",
      location: "Rīga, Latvija",
      ranking: "#16",
      tuition: "€1,900/gadā",
      image: "https://enciklopedija.lv/api/image/thumbnail?name=285bf258a28a-6bb21177-9980-48e5-8553-cbfaacc4ef37.jpg&size=title",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Latvijas Nacionālā aizsardzības akadēmija",
      location: "Rīga, Latvija",
      ranking: "#17",
      tuition: "€1,900/gadā",
      image: "https://abiem.info/wp-content/uploads/2019/07/3-1.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Latvijas Sporta pedagoģijas akadēmija",
      location: "Rīga, Latvija",
      ranking: "#18",
      tuition: "€1,900/gadā",
      image: "https://www.lspa.lv/files/2020/LSPA4_30.05._sena.png",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Rēzeknes Augstskola",
      location: "Rīga, Latvija",
      ranking: "#19",
      tuition: "€1,900/gadā",
      image: "https://www.ergolain.lv/wp-content/uploads/2017/05/Mokymo-%C4%AFstaigos-1-1024x694.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Baltijas Starptautiskā akadēmija",
      location: "Rīga, Latvija",
      ranking: "#20",
      tuition: "€1,900/gadā",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Baltic_International_Academy_Daugavpils_%282%29.JPG",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Latvijas Kristīgā akadēmija",
      location: "Rīga, Latvija",
      ranking: "#21",
      tuition: "€1,900/gadā",
      image: "https://viss.lv/dati/latvijas_kristiga_akademija/logo_latvijas_kristiga_akademija.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Lutera Akadēmija",
      location: "Rīga, Latvija",
      ranking: "#22",
      tuition: "€1,900/gadā",
      image: "https://www.luteraakademija.lv/adz/im/RARZI.jpeg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Ekonomikas un kultūras augstskola",
      location: "Rīga, Latvija",
      ranking: "#23",
      tuition: "€1,900/gadā",
      image: "https://f8.pmo.ee/iLEhUU7j_n0TLwVLpiOJbtHLlbU=/685x0/filters:format(webp)/nginx/o/2022/12/19/15034961t1h36ed.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Informācijas sistēmu menedžmenta augstskola",
      location: "Rīga, Latvija",
      ranking: "#24",
      tuition: "€1,900/gadā",
      image: "https://lh5.googleusercontent.com/p/AF1QipNUJ-VXNRoHssx_Nz570gU_R5IaBuicz0J-6h39=w408-h306-k-no",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Baltijas Psiholoģijas un menedžmenta augstskola",
      location: "Rīga, Latvija",
      ranking: "#25",
      tuition: "€1,900/gadā",
      image: "https://photos.wikimapia.org/p/00/00/89/92/66_big.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Rīgas Starptautiskā ekonomikas un biznesa administrācijas augstskola",
      location: "Rīga, Latvija",
      ranking: "#26",
      tuition: "€1,900/gadā",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RISEBA%2C_biznesa%2C_m%C4%81kslas_un_tehnolo%C4%A3iju_augstskola%2C_galven%C4%81_%C4%93ka.jpg/220px-RISEBA%2C_biznesa%2C_m%C4%81kslas_un_tehnolo%C4%A3iju_augstskola%2C_galven%C4%81_%C4%93ka.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Rīgas Juridiskā augstskola",
      location: "Rīga, Latvija",
      ranking: "#27",
      tuition: "€1,900/gadā",
      image: "https://www.rgsl.edu.lv/uploads/advanced-pages/lv/1039/header/3dae0a0f25323951a80a33a2c8e458d9.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Transporta un sakaru institūts",
      location: "Rīga, Latvija",
      ranking: "#28",
      tuition: "€1,900/gadā",
      image: "https://www.lk-group.lv/site-files/gallery/2020-06/1591340400_7b8e2c38293a7b22f00afb5a50df09ff.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Rīgas Aeronavigācijas institūts",
      location: "Rīga, Latvija",
      ranking: "#29",
      tuition: "€1,900/gadā",
      image: "https://rai.lv/imgrai/dom_1.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Biznesa vadības koledža",
      location: "Rīga, Latvija",
      ranking: "#30",
      tuition: "€1,900/gadā",
      image: "https://www.bvk.lv/wp-content/uploads/2024/06/bzinesa-vadibas-koledza-alberta-iela-13-riga-latvija.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Kosmetoloģijas koledža",
      location: "Rīga, Latvija",
      ranking: "#31",
      tuition: "€1,900/gadā",
      image: "https://lvportals.lv/wwwraksti//PR/2023/JULIJS/BILDES/765V7E7TA.JPEG",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
    {
      name: "Latvijas Biznesa koledža",
      location: "Rīga, Latvija",
      ranking: "#32",
      tuition: "€1,900/gadā",
      image: "https://pic.la.lv/2015/09/biznesakoledza1.jpg",
      programs: 100,
      students: "7k",
      acceptance: "50%",
      satisfaction: "80%",
    },
  ]);

const searchQuery = ref("");
console.log (universities);
console.log('hello');
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

// Add theme management
const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  // Update the document theme
  document.documentElement.setAttribute(
    "data-theme",
    isDarkMode.value ? "dark" : "light"
  );
};

// Initialize theme based on user preference
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
