class Heroes extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<section id="hero" class="heroes">
      <h1 tabindex="0">Find your perfect restaurant</h1>
      <a tabindex="0" href="#main-content" class="main-button">
        Let's started
      </a>
    </section>`;
  }
}

customElements.define('hero-app', Heroes);
