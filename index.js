const render = () => {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
};
let catalog = [];
render();

fetch('https://api.jsonbin.io/b/6018430eabdf9c55679648c8')
  .then((res) => res.json())
  .then((body) => {
    catalog = body;
    render();
  })
  .catch((err) => {
    console.log(err);
  });
