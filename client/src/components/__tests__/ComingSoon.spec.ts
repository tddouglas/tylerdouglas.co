import { describe, it, expect } from "vitest"

import { mount } from "@vue/test-utils"
import ComingSoon from "@/components/helper/ComingSoon.vue"

describe("ComingSoon", () => {
	it("renders properly", () => {
		const wrapper = mount(ComingSoon)
		expect(wrapper.text()).toContain("Coming Soon")
	})
})
