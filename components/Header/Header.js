class Header {
  render(count) {
    const htmlHeader = `
    <div class="container">
      <div class="row justify-content-space-between">
        <div class="col-6">
          <div class="header_left">
          </div>
        </div>
        <div class="col-6">
          <div class="header_right">
            <div class="header_right-basket">
              <i class="fas fa-shopping-cart"><span>${count}</span></i>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    rootHeader.innerHTML = htmlHeader;
  }
}

const headerPage = new Header();
