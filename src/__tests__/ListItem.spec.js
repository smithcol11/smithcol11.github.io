import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import ListItem from "../components/ListItem.vue";

test("Mount Work Item", async () => {
  expect(ListItem).toBeTruthy();

  const wrapper = mount(ListItem, {
    props: {
      content: {
        title: "test position",
        subtitle: "test company",
        date: "test date",
        location: "test location",
        details: ["test tast 1", "test task 2"],
      },
    },
  });

  expect(wrapper.text()).toContain("test position");
});
