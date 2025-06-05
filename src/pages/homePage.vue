<script setup>
import { ref, computed, onMounted } from "vue";

const searchQuery = ref("");
const universities = ref([]);
const errorMsg = ref("");
const isDarkMode = ref(false);

// Normalize URL to include protocol if missing
function normalizeUrl(url) {
  if (!url) return "#";
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `https://${url}`;
}

onMounted(async () => {
  try {
    const res = await fetch("http://localhost/universities/universities.php");
    if (!res.ok) throw new Error("Failed to fetch universities");
    universities.value = await res.json();
  } catch (error) {
    console.error(error);
    errorMsg.value = "Failed to load universities.";
  }
});

const filteredUniversities = computed(() => {
  const query = searchQuery.value.toLowerCase();
  if (!query) return universities.value;

  return universities.value.filter(
    (uni) =>
      uni.name.toLowerCase().includes(query) ||
      uni.location.toLowerCase().includes(query)
  );
});
</script>

<template>
  <div class="container" :class="{ 'dark-mode': isDarkMode }">
    <header>
      <h1>UniSalīdzināt</h1>
      <p class="tagline">Atrodi savu ideālo augstskolu</p>

      <div class="search-section">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Meklēt universitātes..."
          class="search-input"
        />
      </div>
    </header>

    <main>
      <section class="featured-universities">
        <div>
          <h2>Populārākās Universitātes</h2>
        </div>
        <div v-if="errorMsg" class="error-message">{{ errorMsg }}</div>

        <div class="university-grid" v-else>
          <div
            v-for="uni in filteredUniversities"
            :key="uni.id"
            class="university-card"
          >
            <img :src="uni.image" :alt="uni.name" />
            <h3>{{ uni.name }}</h3>
            <p class="location">{{ uni.location }}</p>
            <p class="ranking">Pasaules Reitings: {{ uni.ranking }}</p>
            <p class="tuition">Mācību maksa: {{ uni.tuition }}</p>

            <router-link to="/compare" class="compare-btn">Salīdzināt</router-link>

            <!-- Normalized website link styled as button -->
            <a
              :href="normalizeUrl(uni.website)"
              target="_blank"
              rel="noopener noreferrer"
              class="compare-btn"
            >
              Apmeklēt mājaslapu
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
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

body {
  background-color: var(--bg-color);
}

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
  text-align: center;
  display: inline-block;
  text-decoration: none;
}

.compare-btn:hover {
  background: linear-gradient(to right, #2980b9, #1a5276);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

h2 {
  color: var(--text-color);
  margin-bottom: 30px;
  font-size: 2.2em;
  text-align: center;
  font-weight: 600;
}
</style>
