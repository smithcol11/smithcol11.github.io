import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Navbar from "../components/Navbar.vue";

test("Mount Navbar", () => {
  expect(Navbar).toBeTruthy();

  const wrapper = mount(Navbar, { props: { intro: "Hello Vitest" } });

  expect(wrapper.text()).toContain("Hello Vitest");
});
