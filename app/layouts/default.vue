<template>
	<v-app>
		<AppNavbar/>
		<v-main>
			<slot />
		</v-main>
		<v-footer app color="primary" dark>
      		<v-col class="text-center">© 2025 SpaceX Fan App</v-col>
    	</v-footer>
	</v-app>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>
