<template>
  <div v-if="loading" class="text-center py-8 launches-container">
      <div class="text-lg text-gray-600">Loading launches...</div>
      </div>

    <div v-else-if="error" class="text-center py-8">
      <div class="text-red-600">Error: {{ error }}</div>
    </div>

    <div v-else class="launches-content">
      <div class="page-header">
        <h1 class="page-title">SpaceX Launches</h1>
        <p class="page-subtitle">Explore the history of SpaceX missions</p>
      </div>

      <div class=" controls-section" >
        <v-select 
          label="Filter by Year"
          :items="years"
          v-model="year"
          class="year-filter"
          clearable
          color="primary"
        />
        <v-btn
          class="mb-4 sort-button"
          color="primary"
          @click="sortOldestFirst = !sortOldestFirst"
          size="large"
          >
          <v-icon class="mr-2">{{ sortOldestFirst ? 'mdi-sort-calendar-ascending' : 'mdi-sort-calendar-descending' }}</v-icon>
          {{ sortOldestFirst ? 'Oldest First' : 'Newest First' }}
        </v-btn>
      </div> 
      <div class=" launches-grid" style="gap: 14px;" > 
          <v-card 
            v-for="launch in sortedLaunches" 
            :key="launch.id"
            class=" launch-card"
            hover
> 
            <div> 
              <v-card-title class="text-h5 font-weight-bold primary--text px-4 pt-4 card-header">
                {{ launch.mission_name }}
              </v-card-title>
              
              <v-card-subtitle class="py-2 text-caption px-4 launch-date">
                <v-icon small class="mr-1">mdi-calendar</v-icon>
                {{ new Date(launch.launch_date_local).toLocaleDateString() }}
              </v-card-subtitle>
              
              <v-divider class="mx-4 card-divider"></v-divider>
              
              <v-card-text class="py-6 px-3 card-content" >
                <div class="mb-3 info-item">
                  <v-icon small class="mr-1 info-icon">mdi-map-marker</v-icon>
                  <div class="info-content">
                    <span class="info-label">Site:</span>
                    <span class="info-value">{{ launch.launch_site?.site_name || "Unknown launch site" }}</span> 
                  </div>
                </div>

                <div class="mb-3 info-item">
                  <v-icon small class="mr-1 info-icon">mdi-rocket</v-icon>
                  <div class="info-content">
                    <span class="info-label">Rocket:</span>
                    <span class="info-value">{{ launch.rocket.rocket_name }}</span> 
                  </div>
                </div>
                
                <div v-if="launch.details" class="mt-4 details-section">
                  <v-icon small class="mr-1 info-icon ">mdi-information</v-icon>
                  <div class="info-content">
                    <span class="info-label">Details:</span>
                    <p class="details-text">{{ launch.details }}</p> 
                  </div>
                </div>
              </v-card-text>
            </div>

            <v-card-actions class="px-4 pb-3 mt-auto card-actions">
              <v-btn
                color="primary"
                variant="elevated"
                :to="`/rockets/${launch.rocket.rocket.id}`"
            text 
            class="text-caption pl-0 action-button"
              >
                View Rocket
              </v-btn>
          <v-btn
            color="secondary"
            variant="outlined"
           @click="toggleFavorite(launch.rocket)"
            :prepend-icon="isFavorite(launch.rocket.rocket.id) ? 'mdi-star' : 'mdi-star-outline'"
            class="text-caption action-button favorite-btn"
            prepend-icon="mdi-star"
          >
            Favorite
          </v-btn>
            </v-card-actions>
          </v-card>
      </div>
    </div>
</template>
<script lang="ts" setup>
const query = gql`
query Launches {
  launches {
    id
    launch_site {
      site_name
       site_name_long
    }
    launch_date_local
    mission_name
    rocket {
      rocket_name
	  rocket {
        id
      }
    }
    details
  } 
 }`
const { data,loading,error } = await useAsyncQuery(query)
const allLaunches = data.value?.launches || [];
const { year, filtered,years } = useLaunchFilter(allLaunches)
const { sortOldestFirst, sortedLaunches } = useLaunchSort(filtered)


const favoritesStore = useFavoritesStore()

// Check if a rocket is favorited
const isFavorite = (rocketId) => {
  return favoritesStore.favoriteRockets.some(rocket => rocket.id === rocketId)
}

// Toggle favorite status
const toggleFavorite = (rocket) => {
  if (isFavorite(rocket.rocket.id)) {
    favoritesStore.removeFavorite(rocket.rocket.id)
  } else {
    favoritesStore.addFavorite({
      id: rocket.rocket.id,
      name: rocket.rocket_name
    })
  }
}

</script>
<style scoped>
.launches-content {
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  color: #3864f7;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  background-clip: text;
}

.page-subtitle {
  color: #b0b0b0;
  font-size: 1.2rem;
  font-weight: 300;
}

.controls-section {
 display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.year-filter {
  max-width: 200px;
}

.sort-button {
  background: linear-gradient(45deg, #005288 0%, #0073e6 100%) !important;
  color: #ffffff !important;
  font-weight: 600 !important;
  text-transform: none !important;
}

.sort-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 115, 230, 0.3) !important;
}

.launches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.launch-card {
  background: rgba(0, 0, 0, 0.8) !important;
  backdrop-filter: blur(10px);
 /*border: 1px solid rgba(255, 255, 255, 0.1) !important;*/
  border-radius: 16px !important;
  transition: all 0.3s ease !important;
  display: flex;
  flex-direction: column;
  min-height: 250px;
}

.card-header {
  background: linear-gradient(45deg, #005288 0%, #0073e6 100%);
  padding: 1.5rem;
  border-radius: 16px 16px 0 0;
}

.mission-title {
  color: #ffffff !important;
  font-size: 1.4rem !important;
  font-weight: 700 !important;
  margin-bottom: 0.5rem !important;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.launch-date {
  color: rgba(255, 255, 255, 0.8) !important;
  display: flex;
  align-items: center;
  font-size: 0.9rem !important;
}

.date-icon {
  margin-right: 0.5rem;
  color: rgba(255, 255, 255, 0.8) !important;
}



.card-content {
  padding: 1.5rem !important;
  flex-grow: 1;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.25rem;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.8) !important;
  border-radius: 8px;
  border-left: 3px solid #005288;
}

.info-icon {
  color: #0073e6 !important;
  margin-right: 0.75rem;
  margin-top: 0.125rem;
  font-size: 1.2rem !important;
}

.info-content {
  flex: 1;
}

.info-label {
  display: block;
  color: #b0b0b0;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.info-value {
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
}

.details-section {
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8) !important;
  border-radius: 8px;
  border-left: 3px solid #005288;
}

.details-text {
  color: #e0e0e0;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
  margin-top: 0.25rem;
}

.card-actions {
  padding: 1.5rem !important;
  gap: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.action-button {
  flex: 1;
  font-weight: 600 !important;
  text-transform: none !important;
  border-radius: 8px !important;
  transition: all 0.3s ease !important;
}
.favorite-btn {
  border-color: #0073e6 !important;
  color: #0073e6 !important;
}

</style>
