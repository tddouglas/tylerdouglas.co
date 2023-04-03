<template>
	<div class="l-blog-list">
		<blog-post
			v-for="blogpost in this.blogPosts"
			:id="blogpost.id"
			:title="blogpost.title"
			:date="blogpost.date"
			:preview-image="blogpost.previewImage"
			@onDelete="onBlogItemDelete"
		/>
		))}
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import BlogPost from "@/components/blog/BlogPost.vue"

export default defineComponent({
	name: "BlogList",
	components: { BlogPost },
	props: {},
	methods: {
		onBlogItemDelete(id: number) {
			console.log("OnDelete triggered for id:", id)
			for (let i = 0; i < this.blogPosts.length; i++) {
				if (this.blogPosts[i].id == id) {
					this.blogPosts.splice(i, i) //remove item from array
					break
				}
			}
		}
	},
	data() {
		return {
			blogPosts: [
				{
					id: 1,
					title: "Big Article A",
					date: "Dec 2021",
					previewImage: "https://picsum.photos/seed/randi/300/200"
				},
				{
					id: 2,
					title: "Big Article B",
					date: "Dec 2021",
					previewImage: "https://picsum.photos/seed/other/300/200"
				},
				{
					id: 3,
					title: "Big Article C",
					date: "Dec 2021",
					previewImage: "https://picsum.photos/seed/test/300/200"
				}
			]
		}
	}
})
</script>
