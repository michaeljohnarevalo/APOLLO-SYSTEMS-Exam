<template>
  <v-app-bar class="navbar" elevation="8" height="80">
    <div class="navbar-content">
      <div class="logo-section">
        <v-toolbar-title class="app-title">
          <span class="rocket-icon">🚀</span>
          <span class="brand-name">SpaceX</span>
          <span class="app-suffix">App</span>
        </v-toolbar-title>
      </div>

      <div class="nav-links">
        <NuxtLink to="/" class="nav-link" active-class="nav-link-active">
          <v-icon class="nav-icon">mdi-rocket-launch</v-icon>
          <span class="nav-text">Launches</span>
        </NuxtLink>
        
        <NuxtLink to="/favorites" class="nav-link" active-class="nav-link-active">
          <v-icon class="nav-icon">mdi-star</v-icon>
          <span class="nav-text">Favorites</span>
        </NuxtLink>

        <v-btn icon @click="toggleTheme">
          <v-icon :color="theme.global.name.value === 'dark' ? 'blue' : 'white'">
            {{ theme.global.name.value === 'light' ? 'mdi-weather-night' : 'mdi-weather-night' }}
          </v-icon>
        </v-btn>
      </div>

      <v-btn
        class="mobile-menu-btn d-md-none"
        icon
        variant="text"
        size="large"
      >
        <v-icon color="white">mdi-menu</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
}
</script>
<style scoped>
.navbar {
  background-color: #0d0d0d !important;
  border-bottom: 2px solid #005288;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  flex-wrap: wrap;
}

.logo-section {
  display: flex;
  align-items: center;
}

.app-title {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
}

.rocket-icon {
  font-size: 2rem;
  margin-right: 0.75rem;
  animation: pulse 2s infinite;
}

.brand-name {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.app-suffix {
  color: #b0b0b0;
  font-weight: 400;
  margin-left: 0.5rem;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  color: #b0b0b0;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #ffffff;
  background-color: rgba(0, 115, 230, 0.1);
  transform: translateY(-2px);
}

.nav-link-active {
  color: #ffffff;
  background-color: #0073e6;
}

.nav-icon {
  font-size: 1.2rem;
}

.nav-text {
  font-size: 0.95rem;
  font-weight: 600;
}

.mobile-menu-btn {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>