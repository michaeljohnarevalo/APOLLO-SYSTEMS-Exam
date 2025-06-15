<template>
  <v-footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-brand">
          <span class="footer-icon">🚀</span>
          <span class="footer-title">SpaceX App</span>
        </div>
        <p class="footer-tagline">Exploring the final frontier, one launch at a time</p>
      </div>

      <div class="footer-right">
        <p class="copyright">© 2025 SpaceX Explorer</p>
      </div>
    </div>

    <div class="footer-border"></div>
  </v-footer>
</template>

<style scoped>
.footer {
  background-color: #0d0d0d;
  border-top: 2px solid #005288;
  position: relative;
  padding: 70px 0;
  overflow: hidden;
}


.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-left {
  flex: 1;
}

.footer-brand {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.footer-icon {
  font-size: 1.5rem;
  margin-right: 0.75rem;
  animation: rotate 10s linear infinite;
}

.footer-title {
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: bold;
}

.footer-tagline {
  color: #b0b0b0;
  font-size: 0.9rem;
  margin: 0;
  font-style: italic;
}

.footer-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

.copyright {
  color: #b0b0b0;
  font-size: 0.85rem;
  margin: 0;
  white-space: nowrap;
}



.footer-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #005288;
}

</style>