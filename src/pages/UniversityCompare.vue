<template>
    <div class="container">
      <!-- LOGIN / REGISTER PAGE -->
      <div v-if="!isAuthenticated" class="login">
        <h2>{{ registerMode ? 'Register' : 'Login' }}</h2>
        <input v-model="username" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button @click="registerMode ? register() : login()">
          {{ registerMode ? 'Register' : 'Login' }}
        </button>
        <p v-if="loginError" class="error">{{ loginError }}</p>
        <p>
          <a href="#" @click.prevent="registerMode = !registerMode">
            {{ registerMode ? 'Already have an account? Login' : "Don't have an account? Register" }}
          </a>
        </p>
      </div>
  
      <!-- UNIVERSITY COMPARISON PAGE -->
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
            <p><strong>Location:</strong> {{ selectedUniversity1.location }}</p>
            <p><strong>Ranking:</strong> {{ selectedUniversity1.ranking }}</p>
            <p><strong>Students:</strong> {{ selectedUniversity1.students }}</p>
          </div>
  
          <div class="card">
            <h2>{{ selectedUniversity2.name }}</h2>
            <p><strong>Location:</strong> {{ selectedUniversity2.location }}</p>
            <p><strong>Ranking:</strong> {{ selectedUniversity2.ranking }}</p>
            <p><strong>Students:</strong> {{ selectedUniversity2.students }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { universities } from './augstskolas'
  import { ref } from 'vue'
  
  // Auth state
  const username = ref('')
  const password = ref('')
  const loginError = ref('')
  const isAuthenticated = ref(false)
  const registerMode = ref(false)
  
  // In-memory user store
  const users = ref([
    { username: 'admin', password: 'admin123' }
  ])
  
  function login() {
    const user = users.value.find(
      (u) => u.username === username.value && u.password === password.value
    )
    if (user) {
      isAuthenticated.value = true
      loginError.value = ''
    } else {
      loginError.value = 'Incorrect username or password.'
    }
  }
  
  function register() {
    const existingUser = users.value.find((u) => u.username === username.value)
    if (existingUser) {
      loginError.value = 'Username already taken.'
    } else if (username.value.trim() === '' || password.value.length < 4) {
      loginError.value = 'Username required and password must be at least 4 characters.'
    } else {
      users.value.push({ username: username.value, password: password.value })
      loginError.value = ''
      registerMode.value = false
    }
  }
  
  function logout() {
    isAuthenticated.value = false
    username.value = ''
    password.value = ''
    selectedUniversity1.value = null
    selectedUniversity2.value = null
  }
  
  // University data
  
  
  const selectedUniversity1 = ref(null)
  const selectedUniversity2 = ref(null)
  </script>
  
  <style scoped>
  h2{
    color: var(--text-color)
  }
  .container {
    padding: 2rem;
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: auto;
  }
  
  .login, .compare {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  input {
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  button {
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .error {
    color: red;
  }
  
  .logout-btn {
    align-self: flex-start;
    background-color: var(--text-color);
    border: none;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
  }
  
  .selectors {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  select {
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  .comparison {
    display: flex;
    gap: 2rem;
  }
  
  .card {
    flex: 1;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: var(--bg-color);
  }
  </style>
  