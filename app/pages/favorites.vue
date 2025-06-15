<template>
  <div class="container">
    <h1>My Favorite Rockets</h1>
    
    <v-btn 
      v-if="favoritesStore.favoriteRockets.length > 0"
      @click="clearFavorites"
      color="error"
      prepend-icon="mdi-delete"
      class="mb-4"
    >
      Clear All Favorites
    </v-btn>
    <v-card v-for="rocket in favoritesStore.favoriteRockets" :key="rocket.id" class="my-2">
      <v-card-title>{{ rocket.name }}</v-card-title>
      <v-card-actions>
        <v-btn 
          :to="`/rockets/${rocket.id}`"
          color="primary"
          prepend-icon="mdi-rocket"
        >
          View Details
        </v-btn>
        <v-btn 
          @click="removeFavorite(rocket.id)"
          color="error"
          prepend-icon="mdi-star-off"
        >
          Remove
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script setup>
import { useFavoritesStore } from '~/stores/useFavorites'
const favoritesStore = useFavoritesStore()

const removeFavorite = (rocketId) => {
  favoritesStore.removeFavorite(rocketId)
}

const clearFavorites = () => {
  if (confirm('Are you sure you want to clear all favorites?')) {
    favoritesStore.clearFavorites()
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>