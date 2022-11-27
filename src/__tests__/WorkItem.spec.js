import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import WorkItem from "../components/WorkItem.vue";

test("Mount Work Item", async () => {
  expect(WorkItem).toBeTruthy();

  const wrapper = mount(WorkItem, {
    props: {
      content: {
        position: "test position",
        company: "test company",
        date: "test date",
        location: "test location",
        tasks: ["test tast 1", "test task 2"],
      },
    },
  });

  expect(wrapper.text()).toContain("test position");
});
