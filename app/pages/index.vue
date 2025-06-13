<template>
<v-row>
	<v-col>
		<v-card v-for="launch in allLaunches" :key="launch.id">
			<v-card-title>
			 {{ launch.mission_name }}
			</v-card-title>
			<v-card-subtitle>
				{{ new Date(launch.launch_date_local).toLocaleDateString() }}
			</v-card-subtitle>
			<v-card-text>
				<div>
					<strong>Site:</strong> {{ launch.launch_site?.site_name || " Unknown launch site " }} 
				</div>
				<div>
					<strong>Rocket Name:</strong> {{ launch.rocket.rocket_name }}
				</div>
				<div>
					<strong>Details:</strong> {{ launch.details || " No details " }}
				</div>
			</v-card-text>
			<v-card-actions>
				<v-btn
  color="primary"
  :to="`/rockets/${launch.rocket.rocket.id}`"
>
  View Rocket Details
</v-btn>
			</v-card-actions>
		</v-card>
	</v-col>
</v-row>
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
const { data } = useAsyncQuery(query)
const allLaunches = data.value?.launches || [];

</script>
