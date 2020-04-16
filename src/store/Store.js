import blogs from './modules/business/Blogs';
import navigation from './modules/ui/Navigation';
import user from './modules/business/User';
import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        blogs,
        user,
        navigation,
    }
});

export default store;