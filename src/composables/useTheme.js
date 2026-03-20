import { ref } from "vue";

const STORAGE_KEY = "theme";
const isDarkMode = ref(false);

function applyTheme(isDark) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
}

function initTheme() {
  if (typeof window === "undefined") return;

  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    isDarkMode.value = savedTheme === "dark";
  } else {
    isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  applyTheme(isDarkMode.value);
}

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;
  applyTheme(isDarkMode.value);
  localStorage.setItem(STORAGE_KEY, isDarkMode.value ? "dark" : "light");
}

export function useTheme() {
  return {
    isDarkMode,
    initTheme,
    toggleTheme,
  };
}