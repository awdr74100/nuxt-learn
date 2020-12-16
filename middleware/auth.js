export default async ({ $axios }) => {
  // const { data } = await $axios.post('/api/test');
  // console.log(data);
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 3000);
  });
  console.log('auth');
};
