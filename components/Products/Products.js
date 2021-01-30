class Products {
  render() {
    let htmlCatalog = '';
    catalog.forEach(({ id, title, img, price, currency = dollar }) => {
      htmlCatalog += `
        <div class="col-4 mb-5">
          <div class="catalog-item">
            <div class="catalog-item_img">
              <img src="${img}" alt="">   
            </div>
            <div class="catalog-item_title">
              ${title}
            </div>
            <div class="catalog-item_wrapper-price">
              <span class="catalog-item_price">
                ${price} ${currency}
              </span>
              <button class="catalog-item_btn btn draw-border">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      `;
    });
    rootProducts.innerHTML = htmlCatalog;
  }
}

const productsPage = new Products();

productsPage.render();
