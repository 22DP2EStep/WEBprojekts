<template>
  <div class="container">
    <!-- LOGIN / REGISTER FORM -->
    <div v-if="!isAuthenticated" class="login">
      <h2>{{ registerMode ? 'Register' : 'Login' }}</h2>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      
      <div class="button-wrapper">
        <button @click="registerMode ? register() : login()">
          {{ registerMode ? 'Register' : 'Login' }}
        </button>
      </div>

      <p v-if="loginError" class="error">{{ loginError }}</p>
      <p>
        <a href="#" @click.prevent="registerMode = !registerMode">
          {{ registerMode ? 'Already have an account? Login' : "Don't have an account? Register" }}
        </a>
      </p>
    </div>

    <!-- UNIVERSITY COMPARISON -->
    <div v-else class="compare">
      <h1>Compare Universities</h1>
      <button @click="logout" class="logout-btn">Logout</button>

      <div class="selectors">
        <select v-model="selectedUniversity1">
          <option disabled value="">Select University 1</option>
          <option v-for="uni in universities" :key="uni.id" :value="uni">
            {{ uni.name }}
          </option>
        </select>

        <select v-model="selectedUniversity2">
          <option disabled value="">Select University 2</option>
          <option v-for="uni in universities" :key="uni.id" :value="uni">
            {{ uni.name }}
          </option>
        </select>
      </div>

      <div v-if="selectedUniversity1 && selectedUniversity2" class="comparison">
        <div class="card">
          <h2>{{ selectedUniversity1.name }}</h2>
          <p><strong>Location:</strong> {{ selectedUniversity1.location || 'N/A' }}</p>
          <p>
            <strong>Ranking:</strong>
            <span :class="rankingClass(selectedUniversity1.ranking, selectedUniversity2.ranking)">
              {{ selectedUniversity1.ranking }}
            </span>
          </p>
          
          <p>
            <strong>Tuition:</strong>
            <span :class="tuitionClass(selectedUniversity1.tuition, selectedUniversity2.tuition)">
              {{ selectedUniversity1.tuition }} €
            </span>
          </p>
          <p>
            <strong>Website:</strong>
            <a :href="'https://' + selectedUniversity1.website" target="_blank" rel="noopener">
              {{ selectedUniversity1.website }}
            </a>
          </p>
          <img v-if="selectedUniversity1.image" :src="selectedUniversity1.image" alt="University Image" class="university-image" />
        </div>

        <div class="card">
          <h2>{{ selectedUniversity2.name }}</h2>
          <p><strong>Location:</strong> {{ selectedUniversity2.location || 'N/A' }}</p>
          <p>
            <strong>Ranking:</strong>
            <span :class="rankingClass(selectedUniversity2.ranking, selectedUniversity1.ranking)">
              {{ selectedUniversity2.ranking }}
            </span>
          </p>
          
          <p>
            <strong>Tuition:</strong>
            <span :class="tuitionClass(selectedUniversity2.tuition, selectedUniversity1.tuition)">
              {{ selectedUniversity2.tuition }} €
            </span>
          </p>
          <p>
            <strong>Website:</strong>
            <a :href="'https://' + selectedUniversity2.website" target="_blank" rel="noopener">
              {{ selectedUniversity2.website }}
            </a>
          </p>
          <img v-if="selectedUniversity2.image" :src="selectedUniversity2.image" alt="University Image" class="university-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const loginError = ref('')
const isAuthenticated = ref(false)
const registerMode = ref(false)

const universities = ref([])
const selectedUniversity1 = ref(null)
const selectedUniversity2 = ref(null)

async function fetchUniversities() {
  try {
    const res = await fetch('http://localhost/universities/universities.php')
    if (!res.ok) throw new Error('Failed to fetch universities')
    universities.value = await res.json()
  } catch (err) {
    console.error('Error fetching universities:', err)
  }
}

async function login() {
  loginError.value = ''
  try {
    const res = await fetch('http://localhost/auth/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value }),
    })
    const result = await res.json()
    if (result.success) {
      if (result.isAdmin) {
        window.location.href = 'http://localhost/admindashboard/admin-dashboard.php'
      } else {
        isAuthenticated.value = true
        await fetchUniversities()
      }
    } else {
      loginError.value = result.error || 'Login failed'
    }
  } catch {
    loginError.value = 'Error connecting to server'
  }
}

async function register() {
  loginError.value = ''
  if (username.value.trim() === '' || password.value.length < 4) {
    loginError.value = 'Username required and password must be at least 4 characters.'
    return
  }
  try {
    const res = await fetch('http://localhost/auth/register.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value, isAdmin: false }),
    })
    const result = await res.json()
    if (result.success) {
      registerMode.value = false
    } else {
      loginError.value = result.error || 'Registration failed'
    }
  } catch {
    loginError.value = 'Error connecting to server'
  }
}

function logout() {
  isAuthenticated.value = false
  username.value = ''
  password.value = ''
  selectedUniversity1.value = null
  selectedUniversity2.value = null
  universities.value = []
}

function tuitionClass(tuitionA, tuitionB) {
  if (!tuitionA || !tuitionB) return ''
  return tuitionA < tuitionB ? 'green' : tuitionA > tuitionB ? 'red' : ''
}

// New function for ranking coloring: smaller ranking = better (green), bigger = worse (red)
function rankingClass(rankingA, rankingB) {
  if (!rankingA || !rankingB) return ''
  return rankingA < rankingB ? 'green' : rankingA > rankingB ? 'red' : ''
}
</script>

<style scoped>
.container {
  padding: 2rem;
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: auto;
  color: var(--text-color);
}

/* LOGIN FORM */
.login {
  max-width: 350px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: var(--bg-color, #fff);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login input {
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.button-wrapper {
  display: flex;
  justify-content: center;
}

.login button {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: var(--bg-color, #f0f0f0);
  color: var(--text-color, #333);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.login button:hover {
  background-color: #e0e0e0;
}

/* ERROR */
.error {
  color: red;
  text-align: center;
}

/* COMPARISON SECTION */
.compare {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.logout-btn {
  align-self: flex-start;
  background-color: var(--bg-color, #eee);
  color: var(--text-color, #000);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.selectors {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

input, select {
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
}

.comparison {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.card {
  flex: 1;
  min-width: 300px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: var(--bg-color, #fafafa);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.university-image {
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
  border-radius: 6px;
}

/* Tuition & Ranking coloring */
.green {
  color: green;
  font-weight: bold;
}
.red {
  color: red;
  font-weight: bold;
}
</style>
