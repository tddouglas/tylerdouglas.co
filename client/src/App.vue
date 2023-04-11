<template>
	<div
		class="hover:lightMain-hover dark:hover:darkMain-hover container mx-auto max-w-screen-lg flex-auto font-body text-lightMain dark:text-darkMain md:px-6"
	>
		<TheNavbar />
		<main class="flex min-h-[50vh] flex-col items-center">
			<div class="mb-10 w-3/4">
				<router-view />
			</div>
		</main>
		<TheFooter />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { RouterView } from "vue-router"
import TheNavbar from "@/components/navbar/TheNavbar.vue"
import TheFooter from "@/components/footer/TheFooter.vue"

export default defineComponent({
	components: { TheNavbar, TheFooter, RouterView },
	mounted() {
		console.log("Setting initial color mode")
		let colorPreference = localStorage.getItem("colorPreference")
		if (colorPreference) {
			if (colorPreference === "dark") {
				document.documentElement.classList.add("dark")
			}
		}
		// If set in local storage, use that mode
		// El if browser has defined color mode, use that one
		// else, default to something
	},
	data() {
		return {}
	}
})
</script>
