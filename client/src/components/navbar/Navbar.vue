<template>
	<nav class="mt-8 grid h-10 grid-cols-2 items-center">
		<div class="">
			<router-link to="/">
				<img :src="websiteLogo" alt="Website Logo" class="w-8" />
			</router-link>
		</div>
		<mobile-menu
			:menu-items="menuItems"
			@update="toggleMobileMenu"
			class="items-center"
		/>
	</nav>
	<div
		id="collapsable-navbar"
		v-if="showMobileMenu"
		v-click-away="toggleMobileMenu"
	>
		<menu-list
			:menuItems="menuItems"
			listId="mobile-menu"
			class="mb-4 md:hidden"
		></menu-list>
	</div>
	<div
		class="absolute left-0 -z-10 w-screen border-[0.5px] border-underline"
	></div>
	<div class="mb-20"></div>
</template>
f
<script lang="ts">
import { defineComponent } from "vue"
import { RouterLink } from "vue-router"
import MobileMenu from "@/components/navbar/MobileMenu.vue"
import MenuList from "@/components/navbar/MenuList.vue"
import websiteLogo from "@/assets/images/tylerdouglas_logo.svg"

export default defineComponent({
	name: "Navbar",
	components: { MobileMenu, MenuList },
	props: {},
	methods: {
		toggleMobileMenu() {
			this.showMobileMenu = !this.showMobileMenu
		}
	},
	data() {
		return {
			websiteLogo: websiteLogo,
			showMobileMenu: false,
			menuItems: [
				{ name: "About", path: "/about" },
				{ name: "Resume", path: "/resume" },
				{ name: "Contact", path: "/contact" }
			]
		}
	}
})
</script>
