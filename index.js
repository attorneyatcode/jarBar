class Pagebreak extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
        <img alt="jarAvatar" src="images/jarAvatar_darkmode-1.jpg" height="75px">
        <img alt="jarAvatar" src="images/jarAvatar_darkmode-1.jpg" height="75px">
        <img alt="jarAvatar" src="images/jarAvatar_darkmode-1.jpg" height="75px">
      </div>
    `;
  }
}

customElements.define('jar-pagebreak', Pagebreak);

