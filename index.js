const render = () => {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
};
spinnerPage.render();

let catalog = [];

fetch('https://api.jsonbin.io/b/6018430eabdf9c55679648c8')
  .then((res) => res.json())
  .then((body) => {
    catalog = body;
    spinnerPage.handlerClear();
    render();
  })
  .catch(() => {
    spinnerPage.handlerClear();
    errorPage.render();
  });
