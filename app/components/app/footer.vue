<template>
  <v-footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-brand">
          <span class="footer-icon">🚀</span>
          <span class="footer-title">SpaceX Explorer</span>
        </div>
        <p class="footer-tagline">Exploring the final frontier, one launch at a time</p>
      </div>

      <div class="footer-right">
        <p class="copyright">© 2025 SpaceX Explorer</p>
        <v-btn 
          variant="outlined" 
          color="primary"
          size="small"
          class="contact-btn"
          prepend-icon="mdi-email"
        >
          Contact Us
        </v-btn>
      </div>
    </div>

    <div class="footer-border"></div>
  </v-footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%) !important;
  border-top: 2px solid #005288 !important;
  position: relative;
  overflow: hidden;
  padding-top: 70px;
  padding-bottom: 70px; 
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #0073e6, transparent);
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;
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
  font-weight: 700;
  background: linear-gradient(45deg, #ffffff 0%, #0073e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  color: #b0b0b0;
  font-size: 0.9rem;
  margin: 0;
  font-style: italic;
}

.footer-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.footer-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #b0b0b0;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
}

.footer-link:hover {
  color: #ffffff;
  background: rgba(0, 115, 230, 0.1);
  transform: translateY(-2px);
}

.footer-link.router-link-active {
  color: #0073e6;
  background: rgba(0, 115, 230, 0.1);
}

.footer-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.copyright {
  color: #b0b0b0;
  font-size: 0.85rem;
  margin: 0;
  white-space: nowrap;
}

.contact-btn {
  border-color: #0073e6 !important;
  color: #0073e6 !important;
  font-weight: 600 !important;
  text-transform: none !important;
  transition: all 0.3s ease !important;
}

.contact-btn:hover {
  background: rgba(0, 115, 230, 0.1) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 115, 230, 0.2) !important;
}

.footer-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #005288 0%, #0073e6 50%, #005288 100%);
}

</style>