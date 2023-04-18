import { defineStore } from "pinia"
import type { CircleCenter } from "@/components/helper/customTypes"

export const usePlusMenuStore = defineStore("plusMenu", {
	state: () => {
		return {
			mousePosX: 0,
			mousePosY: 0,
			plusTopDistance: 0,
			plusLeftDistance: 0,
			quarterCircleRadius: 0
		}
	},
	actions: {},
	getters: {
		getQuarterCircleCenter(): CircleCenter {
			return {
				x: this.plusLeftDistance + this.quarterCircleRadius,
				y: this.plusTopDistance + this.quarterCircleRadius
			}
		},
		quarterCircleDegrees(): string {
			const circleCenter = this.getQuarterCircleCenter
			const radianAngle = Math.atan2(
				this.mousePosY - circleCenter.y,
				this.mousePosX - circleCenter.x
			)
			return radianAngle * (180 / Math.PI) + 90 + "deg"
		}
	}
})
