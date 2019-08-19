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
    const input = wrapper.find('input')
    expect(input.attributes('name')).toBe('inputNumber');
});

it('has button called Generate', () => {
    const wrapper = shallowMount(App);
    const button = wrapper.find('button')
    expect(button.text()).toBe('Generate');
});

it('preloads 5 into the input number as a starting point', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.vm.inputNumber).toEqual(5);
});

it.skip('loads the 5x5 on init', () => {

});