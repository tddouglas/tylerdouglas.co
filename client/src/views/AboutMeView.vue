<template>
	<div class="">
		<div class="mb-8 flex flex-row">
			<div class="w-40">
				<!-- TODO: Would be nice to switch to composition API and use Suspense tag for skeleton loader. Investigate using
Composition & Options components together -->
				<img
					:src="profilePhoto"
					alt="Profile Photo"
					class=""
					style="filter: invert(0); clip-path: circle(38%)"
					@load="imageLoaded"
				/>
				<SkeletonLoader
					v-if="!profilePhotoLoaded"
					shape="circle"
					class="mx-7 h-[106px]"
				/>
			</div>
			<div>
				<h1 class="text-main self-center pt-2 text-4xl">
					Tyler Douglas
				</h1>
				<p class="text-secondary">
					Tinkerer, Full-stack Developer & Enthusiast
				</p>
				<router-link to="/" class="text-tertiary font-extralight">
					tylerdouglas.co
				</router-link>
			</div>
		</div>
		<AboutContent class="mt-4" header-text="Resume">
			<AboutResume />
		</AboutContent>
		<AboutContent class="mt-4" header-text="CTFs">
			<div class="mb-6 grid grid-cols-3">
				<div class="mb-8">
					<p class="text-secondary">Hacker101 CTF</p>
				</div>
				<div class="col-span-2">
					<a href="https://ctf.hacker101.com/ctf">
						<img
							src="https://www.hacker101.com/assets/images/favicon.png"
							alt="Hacker101 CTF"
							width="50"
							class="rounded-full"
							style="filter: invert(0)"
						/>
					</a>
				</div>
			</div>
		</AboutContent>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { RouterLink } from "vue-router"
import SkeletonLoader from "@/components/helper/SkeletonLoader.vue"
import AboutResume from "@/components/about/AboutResume.vue"
import AboutContent from "@/components/about/AboutContent.vue"

export default defineComponent({
	name: "AboutMe",
	components: { AboutResume, AboutContent, RouterLink, SkeletonLoader },
	props: {},
	methods: {
		imageLoaded() {
			console.log("Image loaded")
			this.profilePhotoLoaded = true
		}
	},
	data() {
		return {
			profilePhoto:
				"https://tylerdouglas-assets.s3.amazonaws.com/TylerDouglas_photo.avif",
			profilePhotoLoaded: false
		}
	}
})
</script>

<style></style>
