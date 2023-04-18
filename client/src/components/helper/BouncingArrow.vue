<template>
	<div>
		<span class="text-secondary">See more about me here</span>
		<router-link to="/about">
			<img
				:src="rightArrow"
				alt="right arrow"
				class="bounce-right ml-4 inline-block"
			/>
		</router-link>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import rightArrow from "@/assets/images/right_arrow.svg"

export default defineComponent({
	name: "BouncingArrow",
	methods: {},
	data() {
		return {
			rightArrow: rightArrow
		}
	}
})
</script>

<style scoped>
/*Animate item moving right and then back to original position*/
@keyframes bounce-right {
	0% {
		margin-left: 1rem;
	}
	100% {
		margin-left: 2rem;
	}
}
.bounce-right {
	margin-left: 1rem;
	animation-name: bounce-right;
	animation-duration: 0.5s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}
</style>
