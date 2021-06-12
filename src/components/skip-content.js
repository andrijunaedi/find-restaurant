class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<a href="#main-content" class="skip-link">Go to content</a>`;
  }
}

customElements.define('skip-content', SkipContent);
