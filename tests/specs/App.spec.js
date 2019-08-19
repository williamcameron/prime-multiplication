import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue';

it('works', () => {
    expect(true).toBe(true);
});



it('is a Vue instance', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.isVueInstance()).toBeTruthy()
});

it('has label asking for input of a number', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.text()).toContain("Please enter a number to generate multiplication table.");
});

it('has input called inputNumber', () => {
    const wrapper = shallowMount(App);
    const p = wrapper.find('input')
    expect(p.attributes('name')).toBe('inputNumber');
});

it.skip('has button called Generate', () => {

});

it.skip('preloads 5 into the input number as a starting point', () => {

});

it.skip('loads the 5x5 on init', () => {

});