<template>
	<div
		:class="[
			bgClass,
			loaderShape,
			'relative animate-pulse overflow-hidden'
		]"
	>
		<div
			class="shimmer absolute top-0 right-0 bottom-0 left-0"
			:style="shimmerStyle"
		></div>
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { RouterLink } from "vue-router"

const LOADER_SHAPES = { rectangle: "rectangle", circle: "circle" }
const LOADER_CSS_MAPPING = {
	[LOADER_SHAPES.rectangle]: "rounded",
	[LOADER_SHAPES.circle]: "rounded-full"
}

export default defineComponent({
	name: "SkeletonLoader",
	components: {},
	props: {
		shape: {
			type: String,
			required: true,
			validator(value: string) {
				return Object.keys(LOADER_CSS_MAPPING).includes(value)
			}
		},
		bgClass: {
			type: String,
			default: "bg-loader"
		},
		shimmerColor: {
			type: String,
			default: "#ffffff"
		}
	},
	computed: {
		loaderShape() {
			return LOADER_CSS_MAPPING[this.shape]
		},
		shimmerStyle() {
			const rgb = this.isHexColor(this.shimmerColor)
				? this.hexToRgb(this.shimmerColor)
				: "#ffffff"

			return {
				backgroundImage: `linear-gradient(90deg, rgba(${rgb}, 0) 0%, rgba(${rgb}, 0.2) 20%, rgba(${rgb}, 0.5) 60%, rgba(${rgb}, 0))`
			}
		}
	},
	methods: {
		isHexColor(hexColor: string) {
			const hex = hexColor.replace("#", "")

			return (
				typeof hexColor === "string" &&
				hexColor.startsWith("#") &&
				hex.length === 6 &&
				!isNaN(Number("0x" + hex))
			)
		},
		hexToRgb(hex: string) {
			return `${hex.match(/\w\w/g)?.map((x) => +`0x${x}`)}`
		}
	}
})
</script>

<style scoped>
.shimmer {
	transform: translateX(-100%);
	animation: shimmer 1.4s infinite;
}

@keyframes shimmer {
	100% {
		transform: translateX(100%);
	}
}
</style>
