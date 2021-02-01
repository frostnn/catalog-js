class Products {
  constructor() {
    this.classNameActive = 'active_btn';
    this.labelAdd = 'Add to cart';
    this.labelRemove = 'Remove from cart';
  }
  handleSetLocationStorage(element, id) {
    const { pushProducts, products } = localStorageUtil.putProducts(id);
    if (pushProducts) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
    headerPage.render(products.length);
  }
  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    catalog.forEach(({ id, title, img, price }) => {
      let activeClass = '';
      let activeText = '';

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
        <div class="col-xl-4 col-lg-4 col-md-6 col-ms-6  mb-5">
          <div class="catalog-item">
            <div class="catalog-item_img">
              <img src="${img}" alt="">   
            </div>
            <div class="catalog-item_title">
              ${title}
            </div>
            <div class="catalog-item_wrapper-price">
              <span class="catalog-item_price">
                ${price} 
              </span>
              <button class="catalog-item_btn btn draw-border ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, ${id})">
              ${activeText}
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
