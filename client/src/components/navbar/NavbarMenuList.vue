<template>
	<ul :id="listId" class="list-none md:flex">
		<li
			v-for="item in menuItems"
			:key="item.name"
			class="expand-button mx-auto my-8 w-fit text-center md:m-2 md:inline-block"
			@click="toggleMobileMenu"
		>
			<RouterLink class="mx-2" :to="item.path"
				>{{ item.name }}
			</RouterLink>
		</li>
		<li
			class="hover:cursor-pointer md:m-2 md:inline-block"
			@click="changeColorMode"
		>
			<!-- TODO: bug- DarkLight toggle taking 2 clicks instead of 1 on first toggle -->
			<img
				:src="lightDarkIcon"
				alt="light dark toggle"
				class="mx-auto w-6"
			/>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import type { PropType } from "vue"
import type { NavMenu } from "@/components/helper/customTypes"
import { RouterLink } from "vue-router"
import lightDarkIcon from "@/assets/images/light_dark.svg"

export default defineComponent({
	name: "MenuList",
	components: { RouterLink },
	props: {
		menuItems: {
			type: Object as PropType<Array<NavMenu>>,
			required: true
		},
		listId: {
			type: String,
			required: true
		}
	},
	emits: ["update"],
	methods: {
		changeColorMode() {
			console.log("Changing color mode")
			if (!this.darkMode) {
				document.documentElement.classList.add("dark")
				localStorage.setItem("colorPreference", "dark")
				this.darkMode = true
			} else {
				document.documentElement.classList.remove("dark")
				localStorage.setItem("colorPreference", "light")
				this.darkMode = false
			}
		},
		toggleMobileMenu() {
			this.$emit("update")
		}
	},
	data() {
		return {
			lightDarkIcon: lightDarkIcon,
			darkMode: false
		}
	}
})
</script>
