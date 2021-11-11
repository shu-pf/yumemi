import { mount } from "@vue/test-utils";
import CheckBoxes from "./CheckBoxes.vue";

describe("HelloWorld", () => {
  it("should display header text", () => {
    const msg = "都道府県";
    const wrapper = mount(CheckBoxes, {
      props: {
        prefectures: [],
      },
    });

    expect(wrapper.find("h2").text()).toEqual(msg);
  });
});
