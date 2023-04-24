<template>
	<div id="render-img-here"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"

const props = defineProps({
	imageUrl: {
		type: String,
		required: true
	}
})

const loadImages = async () => {
	return new Promise<HTMLElement>((resolve) => {
		const img = new Image()
		img.src = props.imageUrl
		img.style = "filter: invert(0); clip-path: circle(38%)"
		img.alt = "Profile Photo"
		img.onload = function () {
			console.log("image loaded")
			resolve(img)
		}
	})
}

const newImage = await loadImages()
onMounted(() => {
	let container = document.getElementById("render-img-here")
	if (container) {
		console.log(container)
		container.appendChild(newImage)
	}
})
</script>
