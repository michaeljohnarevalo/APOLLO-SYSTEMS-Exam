
<template>
  <v-app-bar class="navbar" elevation="8" height="80">
    <div class="navbar-content">
      <!-- Logo Section -->
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

<style scoped>
.navbar {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%) !important;
  border-bottom: 2px solid #005288 !important;
  backdrop-filter: blur(10px);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.logo-section {
  display: flex;
  align-items: center;
}

.app-title {
  display: flex;
  align-items: center;
  font-size: 1.8rem !important;
  font-weight: 700 !important;
  color: #ffffff !important;
  text-decoration: none;
  transition: all 0.3s ease;
}

.rocket-icon {
  font-size: 2rem;
  margin-right: 0.75rem;
  animation: pulse 2s infinite;
}

.brand-name {
  background: linear-gradient(45deg, #ffffff 0%, #0073e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 115, 230, 0.2), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  color: #ffffff;
  background: rgba(0, 115, 230, 0.1);
  border: 1px solid rgba(0, 115, 230, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 115, 230, 0.2);
}

.nav-link-active {
  color: #ffffff !important;
  background: linear-gradient(45deg, #005288 0%, #0073e6 100%) !important;
  box-shadow: 0 4px 15px rgba(0, 115, 230, 0.3);
}

.nav-link-active .nav-icon {
  color: #ffffff !important;
}

.nav-icon {
  font-size: 1.2rem !important;
  transition: all 0.3s ease;
}

.nav-text {
  font-size: 0.95rem;
  font-weight: 600;
}

.mobile-menu-btn {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

</style>