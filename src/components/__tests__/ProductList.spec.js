import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import ProductList from '../ProductList.vue'


describe("Productlist component unit test: ", ()=>{
    it("renders props when passed", () => {
        const message = "new message";
        const wrapper = mount(ProductList, {
            props: {message},
        });
        expect(wrapper.text()).toMatch(message);
    });
    test("Renders the list", () => {
        const wrapper = mount(ProductList);
        const name = "Penn Squadron II";
        const product = wrapper.get('[data-product="product"]');
        expect(wrapper.findAll('[data-product="product"]')).toHaveLength(2);
      });
    
    test("creates a product", async () => {
        const wrapper = mount(ProductList);
        const newName = "John Doe";
        await wrapper.get('[id="new-product"]').setValue(newName);
        await wrapper.get('[id="form"]').trigger("submit");
        expect(wrapper.findAll('[data-product="product"]')).toHaveLength(3);
      });
      test("calculate wat", () => {
        const wrapper = mount(ProductList);
        expect(wrapper.vm.calculateWat(399)).toBe(99.75);
      });
})