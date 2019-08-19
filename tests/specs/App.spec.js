import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue';

it('works', () => {
    expect(true).toBe(true);
});

it('is a Vue instance', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.isVueInstance()).toBeTruthy()
});