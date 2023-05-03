<template>
	<div class="">
		<div
			class="about-header text-main mb-2 flex flex-row font-mono text-2xl after:bg-underline"
		>
			{{ headerText }}
		</div>
		<div class="align-center flex">
			<div class="mr-6 mb-10 h-auto w-0 border border-underline"></div>
			<div class="text">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "AboutContent",
	props: {
		headerText: {
			type: String,
			required: true
		}
	}
})
</script>
<style scoped>
.about-header::after {
	content: "";
	display: block;
	position: relative;
	top: 15px;
	width: 300px;
	height: 1px;
	margin-left: 20px;
}

.text {
	flex: 1;
}
</style>
