<template>
	<div
		class="hover:lightMain-hover dark:hover:darkMain-hover container mx-auto max-w-screen-lg flex-auto font-body text-lightMain dark:text-darkMain md:px-6"
	>
		<Navbar />
		<RouterView />
		<FooterLayout />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { RouterView } from "vue-router"
import Navbar from "./components/navbar/Navbar.vue"
import FooterLayout from "@/components/footer/FooterLayout.vue"

export default defineComponent({
	components: { Navbar, FooterLayout, RouterView },
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
