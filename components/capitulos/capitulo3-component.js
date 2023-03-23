// Import the LitElement base class and html helper function
import { LitElement, html } from "lit-element";

// Extend the LitElement base class
class Capitulo3Component extends LitElement {
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
      <h3>Ejercicio 3</h3>
      <br />
      <h4>Introduccion</h4>
      <p>
        El objetivo de este ejercicio es que seas capaz de generar un componente
        completo con funcionalidad del que solamente se te entrega el ux
      </p>
      <br />
      <h4>Explicaciones</h4>
      <p>abre el siguiente componente en stackblizt:</p>
      <br />
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/006-lit-element-filter-list-component?file=basic-element.js"
              target="blank"
            >
              Entregable del maquetador
            </a>
          </li>
        </ul>
      </div>
      <br />
      <p>
        Es un componente de lit desarrollado por un maquetador, tienes que
        convertirlo en varios componentes para:
      </p>

      <div class="card">
        <div class="card-header bg-primary text-white">
          Requisitos
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            tener un componente que te devuelva una lista de eventos
          </li>
          <li class="list-group-item">
            pintar solo los tres primeros, pero si se pulsa en el enlace de See
            more.. se cargan 5 eventos mas
          </li>
          <li class="list-group-item">
            si ya no hay mas eventos se oculta el enlace de ver mas
          </li>
          <li class="list-group-item">
            si el usuario escribe en el input de buscar, la lista se filtra
            sobre la totalidad de los registros buscando en el usuario y en la
            descripcion sin importar mayusclas o acentos
          </li>
          <li class="list-group-item">
            si el usuario borra el input, se vuelve al estado inicial
          </li>
          <li class="list-group-item">
            si el usuario pulsa en el enlace All updates, se mostrara la lista
            completa
          </li>
          <li class="list-group-item">
            si el usuario pulsa en el enlace Most recents, la lista mostrara los
            tres mas recientes y el boton See more.. respetara el orden
            establecido
          </li>
          <li class="list-group-item">
            si el usuario pulsa en el enlace Old ones, la lista mostrara los
            tres mas antiguos y el boton See more... respetara el orden
            establecido
          </li>
          <li class="list-group-item">
            si el usuario pulsa en el enlace Hightligted, se mostraran solamente
            los que tienen el svg rosa
          </li>
        </ul>
      </div>
      <br />
      <h4>Ejemplos de open wc para consultar como referencias</h4>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/open-wc-lit-demos-kudos-to-pascal-schilp?file=01-basic%2F07-conditional-rendering.js"
              target="blank"
            >
              Conditional rendering
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/open-wc-lit-demos-kudos-to-pascal-schilp?file=01-basic%2F06-handle-events.js"
              target="blank"
            >
              Handle events
            </a>
          </li>
        </ul>
      </div>
      <br />
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/open-wc-lit-demos-kudos-to-pascal-schilp?file=01-basic%2F08-repeated-templates.js"
              target="blank"
            >
              Repeated templates
            </a>
          </li>
        </ul>
      </div>

      <h4>Ejemplos de como se puede escuchar los cambios de un input</h4>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/lit-element-two-way-data-binding"
              target="blank"
            >
              Two way databinding en lit element
            </a>
          </li>
        </ul>
      </div>
      <br />
      <br />
    `;
  }
}
// Register the new element with the browser.
customElements.define("capitulo3-component", Capitulo3Component);
