import { mount } from "@vue/test-utils";
import CheckBoxes from "./CheckBoxes.vue";
import { Prefecture } from "../services/RESAS-API";

describe("CheckBoxes", () => {
  it("propsに何もない場合", () => {
    const msg = "都道府県";
    const wrapper = mount(CheckBoxes, {
      props: {
        prefectures: [] as Prefecture[],
      },
    });

    expect(wrapper.find("h2").text()).toEqual(msg);
  });
  it("propsに都道府県データが入っている場合、チェックボックスを表示する", () => {
    const wrapper = mount(CheckBoxes, {
      props: {
        prefectures: [{ prefCode: 0, prefName: "北海道" }] as Prefecture[],
      },
    });

    expect(wrapper.text()).toContain("北海道");
  });
  it("チェックボックスをクリックした際にイベントが発行される", () => {
    const wrapper = mount(CheckBoxes, {
      props: {
        prefectures: [{ prefCode: 0, prefName: "北海道" }] as Prefecture[],
      },
    });

    wrapper.find("input").trigger("change");

    expect(wrapper.emitted("changed")).toEqual([
      [{ prefCode: "0", prefName: "北海道", status: false }],
    ]);
  });
});
