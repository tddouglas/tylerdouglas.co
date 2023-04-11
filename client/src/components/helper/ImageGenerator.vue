<template>
	<img
		:src="picImage.toString()"
		:width="width"
		:height="!height ? width : height"
		:alt="imgAlt"
	/>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "ImageGenerator",
	props: {
		width: {
			required: true,
			type: String
		},
		height: {
			required: false, //defaults to square if not provided
			type: String
		},
		imgAlt: {
			required: true,
			type: String
		}
	},
	computed: {
		picImage(): String {
			if (!this.height) {
				return this.picUrl + this.width
			} else {
				return this.picUrl + this.width + "/" + this.height
			}
		}
	},
	data() {
		return { picUrl: "https://picsum.photos/" }
	}
})
</script>
