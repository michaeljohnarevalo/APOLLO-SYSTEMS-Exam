<template>
  <div class="rocket-detail-container">
    <div v-if="pending" class="loading-container">
      <v-progress-circular
        indeterminate
        color="blue"
        size="64"
      ></v-progress-circular>
      <p class="loading-text">Loading rocket details...</p>
    </div>
    
    <div v-else-if="error" class="error-container">
      <v-icon color="red" size="48" class="mb-4">mdi-alert-circle</v-icon>
      <p class="error-text">Error loading rocket: {{ error.message }}</p>
    </div>
    
    <div v-else class="rocket-content">
      <v-card class="rocket-card elevation-8 ">
        <div class="rocket-header">
          <v-card-title class="rocket-title">
            {{ rocket.name }}
          </v-card-title>
        </div>
        
        <v-card-text class="rocket-body">
          <p class="rocket-description">{{ rocket.description }}</p>
          
          <v-divider class="section-divider"></v-divider>
          
          <v-row class="rocket-specs">
            <v-col cols="12" md="6">
              <div class="spec-item">
                <v-icon class="spec-icon">mdi-calendar-clock</v-icon>
                <span class="spec-label">First Flight:</span>
                <span class="spec-value">{{ new Date(rocket.first_flight).toLocaleDateString() }}</span>
              </div>
              
              <div class="spec-item">
                <v-icon class="spec-icon">mdi-rocket-launch</v-icon>
                <span class="spec-label">Stages:</span>
                <span class="spec-value">{{ rocket.stages }}</span>
              </div>
              
              <div class="spec-item">
                <v-icon class="spec-icon">mdi-arrow-expand-vertical</v-icon>
                <span class="spec-label">Height:</span>
                <span class="spec-value">{{ rocket.height?.meters }} meters</span>
              </div>
            </v-col>
            
            <v-col cols="12" md="6">
              <div class="spec-item">
                <v-icon class="spec-icon">mdi-diameter</v-icon>
                <span class="spec-label">Diameter:</span>
                <span class="spec-value">{{ rocket.diameter?.meters }} meters</span>
              </div>
              
              <div class="spec-item">
                <v-icon class="spec-icon">mdi-weight</v-icon>
                <span class="spec-label">Mass:</span>
                <span class="spec-value">{{ rocket.mass?.kg?.toLocaleString() }} kg</span>
              </div>
              
              <div class="spec-item">
                <v-icon class="spec-icon">mdi-chart-line</v-icon>
                <span class="spec-label">Success Rate:</span>
                <span class="spec-value success-rate">{{ rocket.success_rate_pct }}%</span>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const id = route.params.id

const query = gql`
  query GetRocket($id: ID!) {
    rocket(id: $id) {
      id
      name
      description
      first_flight
      stages
      success_rate_pct
      height {
        meters
        feet
      }
      diameter {
        meters
        feet
      }
      mass {
        kg
        lb
      }
    }
  }
`
const { data, pending, error } = await useAsyncQuery(query, { id })
const rocket = data.value?.rocket || {}
</script>

<style scoped>
.rocket-detail-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  padding: 2rem;
}

.loading-container, .error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.loading-text {
  color: #ffffff;
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: 300;
}

.error-text {
  color: #ff4444;
  font-size: 1.1rem;
  text-align: center;
}

.rocket-content {
  max-width: 999px;
  margin: 0 auto;
  align-content: center;
}

.rocket-card {
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px !important;
  margin-bottom: 1rem;
}

.rocket-header {
  background: linear-gradient(45deg, #005288 0%, #0073e6 100%);
  padding: 1rem 0;
}

.rocket-title {
  color: #ffffff !important;
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.rocket-body {
  padding: 2rem !important;
}

.rocket-description {
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
}

.section-divider {
  background-color: rgba(255, 255, 255, 0.2) !important;
  margin: 2rem 0 !important;
}

.rocket-specs {
  margin-top: 1rem;
}

.spec-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border-left: 3px solid #005288;
}

.spec-icon {
  color: #0073e6 !important;
  margin-right: 0.75rem;
  font-size: 1.5rem !important;
}

.spec-label {
  color: #b0b0b0;
  font-weight: 500;
  margin-right: 0.5rem;
  min-width: 100px;
}

.spec-value {
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
}

.success-rate {
  color: #4caf50 !important;
}
</style>