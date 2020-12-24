export default ({ $axios, redirect }) => {
  $axios.onRequest((config) => {
    console.log('nuxtAxios：', config);
    // config.withCredentials = true;
    // console.log(config);
  });

  $axios.onError((error) => {
    const code = parseInt(error?.response?.status, 10);
    // if (code === 400) {
    //   redirect('/400');
    // }
    console.log(error);
  });
};
