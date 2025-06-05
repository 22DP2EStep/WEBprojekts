<template>
  <div class="container">
    <!-- Login Form -->
    <div v-if="!isAuthenticated" class="login-form">
      <h2>Admin Login</h2>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
      <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    </div>

    <!-- Authenticated View -->
    <div v-else class="admin-content">
      <h1>Welcome, {{ isAdmin ? 'Admin' : 'User' }}</h1>
      <button @click="logout">Logout</button>

      <div v-if="isAdmin" class="admin-controls">
        <h2>Admin Controls</h2>
        <button @click="goToDashboard" class="dashboard-btn">Go to Dashboard</button>
      </div>

      <div v-else>
        <p>You are not an admin. Limited access.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const isAuthenticated = ref(false)
const isAdmin = ref(false)
const errorMsg = ref('')

async function login() {
  errorMsg.value = ''
  try {
    const res = await fetch('http://localhost/auth/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value })
    })

    const data = await res.json()
    if (data.success) {
      isAuthenticated.value = true
      isAdmin.value = data.isAdmin
    } else {
      errorMsg.value = data.error || 'Login failed'
    }
  } catch (err) {
    errorMsg.value = 'Error connecting to server'
  }
}

function logout() {
  isAuthenticated.value = false
  isAdmin.value = false
  username.value = ''
  password.value = ''
}

function goToDashboard() {
  window.location.href = 'http://localhost/admindashboard/admin-dashboard.php'
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

.login-form, .admin-content {
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 0.9rem;
}

.admin-controls {
  margin-top: 1rem;
}

.dashboard-btn {
  background-color: #28a745;
}

.dashboard-btn:hover {
  background-color: #218838;
}
</style>