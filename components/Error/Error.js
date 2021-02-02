class Error {
  render() {
    const html = `
    <div class="error-message">
      <h2>Нет доступа!</h2>
    </div>

    `;
    rootError.innerHTML = html;
  }
}

const errorPage = new Error();
