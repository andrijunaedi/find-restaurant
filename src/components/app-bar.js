class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="navbar">
      <div class="container">
        <div class="nav-brand">
          <a href="#/home" alt="Sawala" tabindex="0"
            ><img
              class="lazyload"
              data-src="./images/logo/sawala.png"
              alt="Sawala"
          /></a>
        </div>
        <div class="nav-toggle">
          <button
            id="toggle-menu"
            tabindex="0"
            aria-label="menu mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              width="24px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="container menu">
        <div id="navigationDrawer" class="d-none nav-link">
          <a tabindex="0" href="#/home">Home</a>
          <a tabindex="0" href="#/favorite">Favorite</a>
          <a
            tabindex="0"
            href="https://github.com/andrijunaedi/"
            target="_blank"
            rel="noopener"
            >About</a
          >
        </div>
      </div>
    </nav>`;
  }
}

customElements.define('app-bar', AppBar);
