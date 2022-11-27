import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import CarouselItem from "../components/CarouselItem.vue";

test("Mount Carousel Item", async () => {
  expect(CarouselItem).toBeTruthy();

  const wrapper = mount(CarouselItem, {
    props: {
      content: {
        title: "test title",
        description: "test description",
        features: ["feature 1", "feature 2"],
        tech: ["tech 1", "tech 2"],
        link: "test link",
      },
    },
  });

  expect(wrapper.text()).toContain("test title");
});
