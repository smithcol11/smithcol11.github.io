import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Navbar from "../components/Navbar.vue";

describe("Navbar", () => {
  it("renders properly", () => {
    const wrapper = mount(Navbar, { props: { intro: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
