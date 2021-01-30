class Products {
  render() {
    let htmlCatalog = '';
    catalog.forEach(({ id, title, img, price }) => {
      htmlCatalog += `
        <div class="col-4">
          <div class="catalog-item">
            <div class="catalog-item_img">
            <img src="${img}" alt="">   
            </div>
            <div class="catalog-item_title">${title}</div>
            <div class="catalog-item_price">${price}</div>
            <button lass="catalog-item_btn">Add to cart</button>
          </div>
        </div>
      `;
    });
    rootProducts.innerHTML = htmlCatalog;
  }
}

const productsPage = new Products();

productsPage.render();
