export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favoriteRockets: []
  }),
  actions: {
    addFavorite(rocket) {
      if (!this.favoriteRockets.some(fav => fav.id === rocket.id)) {
        this.favoriteRockets.push(rocket)
      }
    },
    removeFavorite(rocketId) {
      this.favoriteRockets = this.favoriteRockets.filter(rocket => rocket.id !== rocketId)
    },
    clearFavorites() {
      this.favoriteRockets = []
    }
  }
})