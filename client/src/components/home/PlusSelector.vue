<template>
	<div class="plus-menu-container">
		<div
			class="option-text option option1"
			@mouseover="setDataAttr(menuItems[0].name)"
		>
			<!--			TODO: Add fuzzy effect over mysterious symbols similar to I'm Tyler Douglas text-->
			<img :src="mysteriousSymbol1" alt="Mysterious Symbol 1" />
			<RouterLink class="option option1" :to="menuItems[0].path" />
		</div>
		<div
			class="option-text option option2"
			@mouseover="setDataAttr(menuItems[1].name)"
		>
			<img :src="mysteriousSymbol2" alt="Mysterious Symbol 2" />
			<RouterLink class="option option1" :to="menuItems[1].name" />
		</div>
		<div
			class="option-text option option3"
			@mouseover="setDataAttr(menuItems[2].name)"
		>
			<img :src="mysteriousSymbol3" alt="Mysterious Symbol 3" />
			<RouterLink class="option option1" :to="menuItems[2].path" />
		</div>
		<div
			class="option-text option option4"
			@mouseover="setDataAttr(menuItems[3].name)"
		>
			<img :src="mysteriousSymbol4" alt="Mysterious Symbol 4" />
			<RouterLink class="option option1" :to="menuItems[3].path" />
		</div>
		<div
			class="circle rounded-full border-[3px] border-solid border-black dark:border-white"
			:data-text="dataAttr"
		></div>
		<div
			class="quarter-circle rounded-full border-[3px] border-solid border-white !border-t-green dark:border-black"
			:style="{ '--degree': circleDegrees }"
		></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import type { PropType } from "vue"
import type { NavMenu } from "@/components/helper/customTypes"
import { usePlusMenuStore } from "@/stores/plusMenu"
import { mapStores } from "pinia"
import mysteriousSymbol1 from "@/assets/images/mysterious-symbol-1.svg"
import mysteriousSymbol2 from "@/assets/images/mysterious-symbol-2.svg"
import mysteriousSymbol3 from "@/assets/images/mysterious-symbol-3.svg"
import mysteriousSymbol4 from "@/assets/images/mysterious-symbol-4.svg"

export default defineComponent({
	name: "PlusSelector",
	mounted() {
		let circle = document.querySelector(".quarter-circle")
		if (circle != null) {
			let circleEl = circle as HTMLElement
			this.plusMenuStore.plusTopDistance =
				circle.getBoundingClientRect().top + window.scrollY
			this.plusMenuStore.plusLeftDistance =
				circle.getBoundingClientRect().left + window.scrollX
			this.plusMenuStore.quarterCircleRadius = circleEl.offsetWidth / 2
		} else {
			console.error("Quarter circle element not available on mount")
		}
	},
	computed: {
		...mapStores(usePlusMenuStore),
		circleDegrees(): string {
			return this.plusMenuStore.quarterCircleDegrees
		}
	},
	methods: {
		setDataAttr(value: string) {
			let numberOfWords = 12
			let delayTime = 50
			for (let i = 0; i < numberOfWords; i++) {
				let delay = (i + 1) * delayTime
				setTimeout(this.setDataAttRandom, delay)
			}
			setTimeout(() => {
				this.dataAttr = value
			}, numberOfWords * delayTime)
		},
		setDataAttRandom() {
			let numberOfCharacters = this.getRandomInt(8)
			let sb = ""
			for (let j = 0; j < numberOfCharacters; j++) {
				let nextChar = this.getRandomInt(36).toString(36)
				if (j == 1) {
					nextChar.toUpperCase()
				}
				sb += nextChar
			}
			this.dataAttr = sb
		},
		getRandomInt(max: number): number {
			return Math.floor(Math.random() * max)
		}
	},
	props: {
		menuItems: {
			type: Object as PropType<Array<NavMenu>>,
			required: true,
			validator: (value: PropType<Array<NavMenu>>) => {
				return value.length == 4
			}
		}
	},
	data() {
		return {
			dataAttr: "",
			mysteriousSymbol1: mysteriousSymbol1,
			mysteriousSymbol2: mysteriousSymbol2,
			mysteriousSymbol3: mysteriousSymbol3,
			mysteriousSymbol4: mysteriousSymbol4
		}
	}
})
</script>

<style lang="postcss" scoped>
/*TODO: Clean up CSS to Tailwind format*/
.plus-menu-container {
	position: relative;
	@apply font-mono;
	width: 50vh;
	height: 30vh;
	max-width: 280px;
	max-height: 280px;
}

.option {
	position: absolute;
	width: 40px;
	height: 40px;
}

.option-text {
	text-align: center;
	border-radius: 50%;
	cursor: pointer;
	transition: all 0.3s ease-in;
}

.option1 {
	top: 0;
	left: 50%;
	transform: translateX(-50%);
}

.option2 {
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}

.option3 {
	top: 50%;
	right: 0;
	transform: translateY(-50%);
}

.option4 {
	top: 50%;
	left: 0;
	transform: translateY(-50%);
}

.option:hover {
	width: 50px;
	height: 50px;
}

.circle {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100px;
	height: 100px;
	color: #ffffffe5;
	transition: all 0.7s ease-in-out;
}

.dark .circle {
	color: #181818;
}

.circle::before {
	content: attr(data-text);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: all 0.5s ease-in-out;
}

.option:hover ~ .circle {
	width: 150px;
	height: 150px;
}

.option:hover ~ .circle::before {
	font-weight: bold;
	font-size: 30px;
	color: #181818ff;
}

.dark .option:hover ~ .circle::before {
	color: #ffffffe5;
}

.quarter-circle {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) rotate(var(--degree));
	width: 120px;
	height: 120px;
	transition: height 0.7s ease-in-out, width 0.7s ease-in-out;
}

.option:hover ~ .quarter-circle {
	width: 170px;
	height: 170px;
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
</style>
