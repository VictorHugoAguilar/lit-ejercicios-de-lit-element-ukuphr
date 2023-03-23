// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class extraContent1Component extends LitElement {

  static get properties() {
    return {
      active: { type: Boolean }
    };
  }
  createRenderRoot() {
    return this;
  }

  render() {
    if (!this.active) {
      return html``;
    }
    return html`
        <br />
        <h3>Enlaces de interes</h3>

       <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/open-wc-lit-demos"
              target="blank"
            >
            ejemplos en stackblitz

            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://open-wc.org/developing/"
              target="blank"
            >
            recomendaciones para generar apps en lit con entorno de desarrollo open wc

            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://pwa-starter-kit.polymer-project.org/setup"
              target="blank"
            >
            pwa starter kit 

            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://desarrolloweb.com/manuales/manual-litelement.html"
              target="blank"
            >
            curso en español de lit element desarrollo web
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://www.youtube.com/watch?v=mg2s3WwJu2k"
              target="blank"
            >
            Video, Meetup PolymerMadrid - Introducción a lit-html y LitElement

            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://vaadin.com/tutorials/lit-element/starting-a-lit-element-project"
              target="blank"
            >
            Video, hacer proyectos con lit element de Vaadin
            </a>
          </li>
        </ul>
      </div>
       <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://www.youtube.com/watch?v=GM9RSVZZpco"
              target="blank"
            >
           Video, Web Components 101 through LitElement de Sngular
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://lit-html.polymer-project.org/guide/styling-templates"
              target="blank"
            >
            docuemntacion oficial lit html
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://lit-element.polymer-project.org/guide"
              target="blank"
            >
            docuemntacion oficial lit element
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://github.com/LarsDenBakker/lit-html-workshop"
              target="blank"
            >
            (ejercicios)workshop de lit element
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://dev.to/blikblum/from-react-to-web-components-using-mobx-5abm"
              target="blank"
            >
            aplicacion CRUD en lit element 

            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://43081j.com/2018/08/future-of-polymer"
              target="blank"
            >
            ejemplos de como migrar de polymer 2 a lit element
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://github.com/web-padawan/awesome-lit-html"
              target="blank"
            >
            recopilacion de enlaces sobre lit element 

            </a>
          </li>
        </ul>
      </div>
     `
  }
}
// Register the new element with the browser.
customElements.define('extra-content1', extraContent1Component);