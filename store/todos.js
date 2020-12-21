export default {
  namespaced: true,
  state: () => ({
    lists: [],
  }),
  actions: {
    async addTodo({ commit }, { todo }) {
      await new Promise((resolve) => setTimeout(() => resolve(), 2000));
      commit('ADDTODO', todo);
    },
  },
  mutations: {
    ADDTODO(state, todo) {
      state.lists.push(todo);
    },
  },
  getters: {
    filterLists(state) {
      return state.lists[state.lists.length - 1] ?? [];
    },
  },
};
