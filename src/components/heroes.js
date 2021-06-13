class Heroes {
  constructor(hero) {
    this.hero = hero;
  }

  render() {
    this.hero.innerHTML = `
      <h1 tabindex="0">Find your perfect restaurant</h1>
      <a tabindex="0" href="#main-content" class="main-button">
        Let's started
      </a>`;
  }

  hide() {
    this.hero.style.display = 'none';
  }

  show() {
    this.hero.style.display = 'block';
  }
}

export default Heroes;
