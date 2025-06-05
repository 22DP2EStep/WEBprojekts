<template>
  <nav :class="{ 'nav-open': isNavOpen }">
    <div class="burger-menu" @click="toggleNav">
      <span></span><span></span><span></span>
    </div>
    <ul class="nav-links">
      <router-link class="nav-button" to="/home">Sākums</router-link>
      <router-link class="nav-button" to="/compare">Salīdzināt</router-link>
      <router-link class="nav-button" to="/about">Par</router-link>
      <li>
        <a class="nav-button" @click="toggleTheme">
          {{ isDarkMode ? "Gaišs" : "Tumšs" }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isNavOpen = ref(false);
const isDarkMode = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.setAttribute(
    "data-theme",
    isDarkMode.value ? "dark" : "light"
  );
};

onMounted(() => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  isDarkMode.value = prefersDark;
  document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
});
</script>

<style scoped>
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

.nav-button {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  color: #fdbb2d;
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

  .nav-button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
