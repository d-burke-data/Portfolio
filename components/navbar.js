class Navbar extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/navbar.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}

customElements.define('navbar-component', Navbar);