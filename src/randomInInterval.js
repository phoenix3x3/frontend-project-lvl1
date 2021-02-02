export default (minInterval, maxInterval) => {
  const min = Math.ceil(minInterval);
  const max = Math.floor(maxInterval);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
