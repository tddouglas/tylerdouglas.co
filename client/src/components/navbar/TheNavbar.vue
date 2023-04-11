<template>
	<nav class="mt-8 grid h-10 grid-cols-2 items-center">
		<div class="">
			<RouterLink to="/">
				<img :src="websiteLogo" alt="Website Logo" class="w-8" />
			</RouterLink>
		</div>
		<MobileMenu
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
		<MenuList
			:menuItems="menuItems"
			listId="mobile-menu"
			class="mb-4 md:hidden"
			@update="toggleMobileMenu"
		></MenuList>
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
import MobileMenu from "@/components/navbar/NavbarMobileMenu.vue"
import MenuList from "@/components/navbar/NavbarMenuList.vue"
import websiteLogo from "@/assets/images/tylerdouglas_logo.svg"

export default defineComponent({
	name: "TheNavbar",
	components: { MobileMenu, MenuList, RouterLink },
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
				{ name: "Projects", path: "/projects" },
				{ name: "Contact Me", path: "/contact" }
			]
		}
	}
})
</script>
