<template>
	<div
		class="l-flex l-left-margin l-right-margin l-small-padding-top l-small-padding-bottom c-border-bottom"
	>
		<img
			:src="previewImage"
			:alt="`Blog Post ${id}`"
			width="300"
			height="200"
		/>
		<div class="l-small-padding-left l-detailed-info-column">
			<h1>{{ title }}</h1>
			<p>Some interesting text snipped of this article I like or wrote</p>
			<div>{{ date }}</div>
		</div>
		<div class="l-detailed-info-column">
			<p>
				This is a short description of the article or post that I just
				linked. It should provide the thesis and a tiny bit of true
				clickbait. I&apos;ll probably want to fetch this stuff from the
				db eventually
			</p>
			<button @click="onDelete(id)">Remove from feed</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "BlogPost",
	emits: ["onDelete"],
	props: {
		id: {
			type: Number,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		},
		previewImage: {
			type: String,
			required: true
		}
	},
	methods: {
		onDelete(id: Number) {
			this.$emit("onDelete", id)
		}
	},
	data() {
		return {}
	}
})
</script>
