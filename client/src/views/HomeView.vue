<template>
	<main class="mb-10">
		<about-me />
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AboutMe from "@/components/home/AboutMe.vue"

export default defineComponent({
	name: "HomeView",
	components: { AboutMe },
	props: {},
	methods: {},
	data() {
		return {}
	}
})
</script>
