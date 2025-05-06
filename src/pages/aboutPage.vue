<template>
  <div class="about-page">
    <h1>Par mums</h1>
    <p class="intro">
      Laipni lūdzam mūsu vietnē. Mēs esam apņēmušies nodrošināt vislabāko iespējamo apkalpošanu.
    </p>

    <section class="team">
      <h2>Mūsu komanda</h2>
      <div class="team-grid">
        <div 
          v-for="member in teamMembers" 
          :key="member.id" 
          class="team-card"
        >
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const teamMembers = ref([
  { id: 1, name: 'Alise Smīte', role: 'Izpilddirektore' },
  { id: 2, name: 'Bobs Džonsons', role: 'Tehniskais direktors' },
  { id: 3, name: 'Klēra Lī', role: 'Vadošā izstrādātāja' }
])
</script>

<style scoped>

.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-color);
}

.about-page h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.team h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.team-card {
  background-color: var(--bg-color);
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.team-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.team-card p {
  color: --text-color;
  font-size: 0.95rem;
}
</style>
