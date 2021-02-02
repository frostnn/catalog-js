class Spinner {
  handlerClear() {
    rootSpinner.innerHTML = '';
  }
  render() {
    const html = `
    <div class="spinner_container">
      <img src="components/Spinner/img/spinner.svg" alt="" class="spinner_img">
    </div>
    `;
    rootSpinner.innerHTML = html;
  }
}

const spinnerPage = new Spinner();
