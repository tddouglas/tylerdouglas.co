<template>
	<div class="mb-8 flex flex-row">
		<image-generator
			img-alt="Main Image"
			width="100"
			height="100"
			class="mr-4 rounded-full"
		></image-generator>
		<div>
			<h1 class="text-main self-center pt-2 text-4xl">Tyler Douglas</h1>
			<p class="text-secondary">
				Other Thing, Full-stack Developer & Enthusiast
			</p>
			<router-link to="/" class="text-tertiary font-extralight">
				tylerdouglas.co
			</router-link>
		</div>
	</div>
	<h2 class="text-main mb-2">Resume</h2>
	<div class="mb-6 grid grid-cols-3">
		<div class="mb-8">
			<div class="text-tertiary">Dec 2019 - Present</div>
			<div class="text-tertiary">New York, NY</div>
		</div>
		<div class="col-span-2">
			<h3 class="text-md text-main mb-1">Implementation Manager</h3>
			<p class="text-secondary mb-8">
				Architect solutions for perspective and existing merchants.
				Manage integrations via technical consulting, working with Adyen
				and merchant engineers to provide a high quality end product.
			</p>
		</div>
		<div class="mb-8">
			<div class="text-tertiary">Feb 2019 - Dec 2019</div>
			<div class="tex text-tertiary">San Francisco, CA</div>
		</div>
		<div class="col-span-2">
			<h3 class="text-md text-main mb-1">Technical Support Engineer</h3>
			<p class="text-secondary mb-8">
				Provided support and implementation advice to new and
				prospective merchants with a focus on utilizing our checkout
				integrations, conforming to PSD2 regulations, and mobile
				integrations.<br />Wrote Python and Java Adyen example checkout
				integrations to enhanced developer experience.
			</p>
		</div>
		<div class="mb-8">
			<div class="text-tertiary">Nov 2018 - Jan 2019</div>
			<div class="text-tertiary">New York, NY</div>
		</div>
		<div class="col-span-2">
			<h3 class="text-md text-main mb-1">Technical Team Intern</h3>
			<p class="text-secondary mb-8">
				Utilized NMap to test all devices on Marathon’s network for
				access with default credentials.<br />Set up several CentOS
				servers as remote logging and file sharing repositories.
			</p>
		</div>
	</div>
	<h2 class="text-main mb-2">CTFs</h2>
	<div class="mb-6 grid grid-cols-3">
		<div class="mb-8">
			<p class="text-secondary">Google 2022</p>
		</div>
		<div class="col-span-2">
			<a href="https://github.com/tddouglas/googlectf2022"
				><image-generator
					img-alt="Google 2022 CTF Badge"
					width="50"
					class="rounded-full"
				></image-generator
			></a>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { RouterLink } from "vue-router"
import ImageGenerator from "@/components/helper/ImageGenerator.vue"

export default defineComponent({
	name: "AboutMe",
	components: { ImageGenerator, RouterLink },
	props: {},
	methods: {},
	data() {
		return {}
	}
})
</script>

<style></style>
