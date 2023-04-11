<template>
	<div class="grid grid-cols-4">
		<div>Notification Listener</div>
		<div class="col-span-2">
			Notification listener which listens and accepts incoming Adyen
			notifications. The notifications are then parsed and stored in my
			backend postgres db.
		</div>
		<div>
			<router-link to="/projects/listener"> see more here. </router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { RouterLink } from "vue-router"

export default defineComponent({
	name: "ProjectsView",
	components: { RouterLink },
	props: {},
	methods: {},
	data() {
		return {}
	}
})
</script>
