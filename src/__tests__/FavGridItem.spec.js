import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import FavGridItem from "../components/FavGridItem.vue";

test("Mount Fav Grid Item", async () => {
  expect(FavGridItem).toBeTruthy();

  const wrapper = mount(FavGridItem, {
    props: {
      link: "test link",
      imgSrc: "test src",
      altText: "test alt",
    },
  });

  expect(wrapper.vm.link).toBe("test link");
  expect(wrapper.vm.imgSrc).toBe("test src");
  expect(wrapper.vm.altText).toBe("test alt");
});
