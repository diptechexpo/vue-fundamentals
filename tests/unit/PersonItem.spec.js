import { mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import PersonItem from "@/components/PersonItem.vue";
import Vue from "vue";

describe('PersonItem', () => {

  beforeEach(()=>{
    Vue.use(Vuetify);
  });

  test('it shoulddisplay a person', () => {
    const wrapper = mount(PersonItem, {
      propsData: {
        friend: {
          id: 1,
          firstName: "Dip",
          lastName: "S",
          fav: true
        },
        last: true
      }
    });
    expect(wrapper.text()).toContain("Dip S");
  });

  test('should display a divider if its the last friend', () => {
    const wrapper = mount(PersonItem, {
      propsData: {
        friend: {
          id: 1,
          firstName: "Dip",
          lastName: "S",
          fav: true
        },
        last: false
      }
    });
    expect(wrapper.find(".v-divider").exists()).toBe(true);
  });

});
