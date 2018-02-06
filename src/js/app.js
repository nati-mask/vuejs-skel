import Vue from 'vue';
import Root from '../components/Root.vue';

const app = new Vue({ el: '#root', render(createElement) { return createElement(Root) } });
