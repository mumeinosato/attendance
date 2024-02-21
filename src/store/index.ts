import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { reactive } from 'vue'; 
import { login, getAccountInfo } from "../script/api";

const getDefaultUserData = () => ({
    id: null,
    user: "null",
    name: "null",
    password: "null",
    admin: 0,
    group: "fffff"
});

const state = reactive({
    isLoggedIN: false,
    userData:  getDefaultUserData(),
});

const actions = {
    async loginUser({commit}: any, {user, password}: any) {
        try {
            console.log(user);
            const success = await login(user, password);
            if (success) {
                commit('setIsLoggedIn', true);
                commit('setUserData', await getAccountInfo(user));
            }
            return success;
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    },
    logoutUser({commit}: any) {
        commit('setIsLoggedIn', false);
        commit('setUserData', getDefaultUserData());
    },
};

const mutations = {
    setIsLoggedIn(state: any, value: boolean) {
        state.isLoggedIN = value;
    },
    setUserData(state: any, value: any) {
        state.userData = value;
    },
};

const getters = {
    isAdmin(state: any) {
        return state.userData && state.userData.admin === 1;
    },
    userGroup(state: any) {
        return state.userData ? state.userData.group : null;
    },
};

// Vuexストアを作成
const store = createStore({
    state,
    actions,
    mutations,
    getters,
    plugins: [createPersistedState()],
});

store.subscribe(() => {
    store.commit('rehydrated');
});

export default store;
