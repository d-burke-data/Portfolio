class Header extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/header.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}

customElements.define('header-component', Header);