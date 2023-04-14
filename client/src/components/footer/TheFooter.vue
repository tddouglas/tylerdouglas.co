<template>
	<footer class="relative bottom-0 pb-4 pt-6">
		<div class="grid grid-cols-3">
			<div class="text-secondary self-center justify-self-start text-xs">
				Copyright © tylerdouglas.co. All rights reserved.
			</div>
			<div class="self-center justify-self-center">
				<RouterLink to="/">
					<img
						:src="mainLogo"
						alt="TylerDouglas.co Logo"
						class="w-8"
					/>
				</RouterLink>
			</div>
			<div class="self-center justify-self-end">
				<ul class="flex list-none flex-row">
					<!--					<li>-->
					<!--						<router-link to="">-->
					<!--							<img :src="instagram" class="h-9" alt="Instagram" />-->
					<!--						</router-link>-->
					<!--					</li>-->
					<!--					<li>-->
					<!--						<router-link to="">-->
					<!--							<img :src="twitter" class="h-9" alt="Twitter" />-->
					<!--						</router-link>-->
					<!--					</li>-->
					<li>
						<a href="https://www.linkedin.com/in/tyler-douglas/">
							<img
								:src="linkedin"
								class="ml-[8px] mt-[7px] h-[23px]"
								alt="LinkedIn"
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { RouterLink } from "vue-router"
import logo from "@/assets/images/tylerdouglas_logo.svg"

export default defineComponent({
	name: "TheFooter",
	components: { RouterLink },
	data() {
		return {
			mainLogo: logo,
			instagram:
				"https://tinyboiz-assets.s3.amazonaws.com/instagram_logo_black.svg",
			twitter:
				"https://tinyboiz-assets.s3.amazonaws.com/twitter_logo_black.svg",
			linkedin:
				"https://tinyboiz-assets.s3.amazonaws.com/linkedin_logo_black.svg"
		}
	}
})
</script>
