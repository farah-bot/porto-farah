function importAll(r) {
  const images = {};
  r.keys().forEach((key) => {
    images[key.replace('./', '')] = r(key);
  });
  return images;
}

export default importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));