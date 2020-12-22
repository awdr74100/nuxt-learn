// import delay from '@/utils/delay';

export default {
  // state: () => ({
  //   counter: 0,
  // }),
  actions: {
    async nuxtServerInit({ commit }, { res }) {
      // await delay();
      // res.cookie('token', 'aaaaa', { maxAge: 1000 * 30, httpOnly: true });
      // console.log('nuxtServerInit');
      // app.$cookies.set('token', 'aaaaaa', {
      //   httpOnly: true,
      //   sameSite: 'strict',
      //   maxAge: 20,
      // });
      // console.log(req);
      // console.log('nuxtServerInit');
      // console.log(context);
    },
  },
  mutations: {
    // INCREASE(state, num) {
    //   state.counter += num;
    // },
    // DECREASE(state, num) {
    //   state.counter -= num;
    // },
  },
  getters: {
    // powCounter(state) {
    //   return state.counter ** 10;
    // },
  },
};
