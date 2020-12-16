export default (bool = true) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (bool) return resolve();
    return reject();
  }, 1000);
});
