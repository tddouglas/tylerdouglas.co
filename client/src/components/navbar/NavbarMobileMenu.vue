<template>
	<div class="justify-self-end">
		<button
			id="mobile-menu-button"
			class="ml-4 block md:hidden"
			@click="toggleMobileMenu"
		>
			<span class="mobile-button" />
		</button>
		<MenuList
			:menuItems="menuItems"
			listId="desktop-menu"
			class="hidden md:block md:justify-self-start"
			@update="toggleMobileMenu"
		></MenuList>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import type { PropType } from "vue"
import type { NavMenu } from "@/components/helper/customTypes"
import MenuList from "@/components/navbar/NavbarMenuList.vue"

export default defineComponent({
	name: "MobileMenu",
	components: { MenuList },
	props: {
		menuItems: {
			type: Object as PropType<Array<NavMenu>>,
			required: true
		}
	},
	emits: ["update"],
	methods: {
		toggleMobileMenu() {
			this.$emit("update")
		}
	},
	data() {
		return {}
	}
})
</script>

<style scoped>
.mobile-button {
	display: inline-block;
	border: none;
	cursor: pointer;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxNnYxNkgweiIvPjxwYXRoIGQ9Ik0wIDE0di0xaDE2djFIMHptMC02VjdoMTZ2MUgwem0wLTd2MWgxNlYxSDB6Ii8+PC9zdmc+);
	min-height: 16px;
	min-width: 16px;
	margin-right: 24px;
	padding: 8px;
}
</style>
