class Head extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/head.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('head-component', Head);

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

class Footer extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/footer.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('footer-component', Footer);

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

class Home extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/home.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('home-component', Home);

class AssignmentsOverview extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/assignments-overview.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('assignments-overview-component', AssignmentsOverview);

class Assignment1 extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/assignment1.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('assignment1-component', Assignment1);

class Assignment2 extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/assignment2.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('assignment2-component', Assignment2);

class Assignment3 extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/assignment3.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('assignment3-component', Assignment3);

class Assignment4 extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/assignment4.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('assignment4-component', Assignment4);

class ProjectsOverview extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/projects-overview.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('projects-overview-component', ProjectsOverview);

class Project1 extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/project1.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('project1-component', Project1);

class Project2 extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/project2.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('project2-component', Project2);

class Project3 extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/project3.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('project3-component', Project3);

class Project4 extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/project4.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('project4-component', Project4);

class Certificates extends HTMLElement {
    constructor() {
      super();
    }

    // Retrieves html for this component from the designated file
    connectedCallback() {
      fetch("components/certificates.html")
        .then(response => response.text())
        .then(text => this.innerHTML = text);
    }
}
customElements.define('certificates-component', Certificates);