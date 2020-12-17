import delay from '@/utils/delay';

export default async ({ $axios }) => {
  console.log(`middleware ${Date.now()} start`);
  // await delay();
  console.log(`middleware ${Date.now()} finish`);
};
