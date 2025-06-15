<template>
	<v-app :class="darkMode ? 'dark-theme' : ''" >
		<AppNavbar :darkMode="darkMode" @toggle-theme="toggleTheme" />
		<v-main class="d-flex flex-column fill-height">
			<v-container class="flex-grow-0">
				<slot />
			</v-container>
		</v-main>
		<AppFooter/>
	</v-app>
</template>
<script>
export default {
	name: 'DefaultLayout',
}


const darkMode = ref(false)

const toggleTheme = () => {
  darkMode.value = !darkMode.value
  localStorage.setItem('darkMode', darkMode.value)
}

onMounted(() => {
  if (localStorage.getItem('darkMode') === 'true') {
    darkMode.value = true
  }
})
</script>

