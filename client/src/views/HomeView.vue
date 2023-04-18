<template>
	<h1
		class="text-main main-header mb-10 font-mono text-4xl"
		data-text="I'm Tyler Douglas"
	>
		<mark class="mark-accent">I'm Tyler Douglas</mark>
	</h1>
	<div>
		<p class="text-secondary mb-6">
			An Adyen engineer who loves working with tech and people! Film
			enthusiast, cyber security dabbler, tinkerer and creator. I'm
			interested in the inner workings of most things - I design and code
			beautifully simple projects, and I love what I do.
		</p>
		<p class="text-secondary mb-6">
			Thanks for checking out my website! Come here to learn about me, see
			some of the things I've been working on, or just hear my thoughts.
		</p>
	</div>
	<div
		class="relative mt-8 mb-32 flex justify-start md:mt-20 md:justify-center"
	>
		<PlusSelector :menu-items="menuItems" class="hidden md:block" />
		<BouncingArrow class="block md:hidden" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PlusSelector from "@/components/home/PlusSelector.vue"
import BouncingArrow from "@/components/helper/BouncingArrow.vue"
import rightArrow from "@/assets/images/right_arrow.svg"

export default defineComponent({
	name: "HomeView",
	components: { PlusSelector, BouncingArrow },
	methods: {},
	data() {
		return {
			rightArrow: rightArrow,
			menuItems: [
				{ name: "About", path: "/about" },
				{ name: "Projects", path: "/projects" },
				{ name: "Contact", path: "/contact" },
				{ name: "Random", path: "/projects/listener" }
			]
		}
	}
})
</script>

<style scoped>
/*Thanks to https://www.codewonders.dev/#0 for this wonderful animation!*/
/*Main header static animation*/
h1.main-header::before {
	left: 2px;
	text-shadow: blue -1px 0;
	animation: 15s linear 0s infinite alternate-reverse none running noise-anim;
}

h1.main-header::after {
	left: -2px;
	text-shadow: red 3px 0;
	animation: 2s linear 0s infinite alternate-reverse none running noise-anim;
}

.main-header::before,
.main-header::after {
	content: attr(data-text);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.main-header {
	line-height: 1.2;
	font-size: calc(3.275rem + 9px);
	font-weight: 900;
	margin: 2rem 0 1.5rem;
	position: relative;
	letter-spacing: -1.1px;
}

.mark-accent {
	color: inherit;
	padding: 0;
	background-color: rgba(0, 0, 0, 0);
	background-attachment: scroll;
	background-origin: padding-box;
	background-clip: border-box;
	background-repeat: no-repeat;
	background-position: 0 80%;
	position: relative;
	background-size: 100% 0.3em;
}

@keyframes noise-anim {
	0% {
		clip-path: inset(76% 0px 21%);
	}
	5% {
		clip-path: inset(54% 0px 7%);
	}
	10% {
		clip-path: inset(55% 0px 29%);
	}
	15% {
		clip-path: inset(89% 0px 3%);
	}
	20% {
		clip-path: inset(33% 0px 40%);
	}
	25% {
		clip-path: inset(17% 0px 56%);
	}
	30% {
		clip-path: inset(37% 0px 51%);
	}
	35% {
		clip-path: inset(38% 0px 19%);
	}
	40% {
		clip-path: inset(93% 0px 4%);
	}
	45% {
		clip-path: inset(44% 0px 14%);
	}
	50% {
		clip-path: inset(53% 0px 26%);
	}
	55% {
		clip-path: inset(67% 0px 11%);
	}
	60% {
		clip-path: inset(85% 0px 13%);
	}
	65% {
		clip-path: inset(27% 0px 37%);
	}
	70% {
		clip-path: inset(87% 0px 4%);
	}
	75% {
		clip-path: inset(10% 0px 8%);
	}
	80% {
		clip-path: inset(51% 0px 27%);
	}
	85% {
		clip-path: inset(10% 0px 60%);
	}
	90% {
		clip-path: inset(83% 0px 3%);
	}
	95% {
		clip-path: inset(23% 0px 55%);
	}
	100% {
		clip-path: inset(1% 0px 81%);
	}
}

/*Animate item moving right and then back to original position*/
@keyframes bounce-right {
	0% {
		margin-left: 1rem;
	}
	100% {
		margin-left: 2rem;
	}
}
</style>
