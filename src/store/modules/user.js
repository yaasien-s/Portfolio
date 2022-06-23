export default {
    state: () => ({
        name: 'Yaasien',
        name2: 'Salaam'
    }),
    getters: {},
    mutations: {
        SET_NAME(state, payload) {
            state.name = payload
        },
        SET_NAME2(state, payload) {
            state.name2 = payload
        }
    },
    actions:{
        saveName({ commit }, data){
            commit('SET_NAME', data)
        }
    },
}