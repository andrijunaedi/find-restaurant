class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<footer>Copyright © 2021 - SAWALA Restaurant</footer>`;
  }
}

customElements.define('app-footer', Footer);
