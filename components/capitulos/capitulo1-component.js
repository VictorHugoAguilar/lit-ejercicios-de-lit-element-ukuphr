import { LitElement, html } from "lit-element";

class Capitulo1Component extends LitElement {
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
      <h3>Ejercicio 1. Basicos</h3>
      <br />
      <h4>Introduccion</h4>
      <p>
        El objetivo de este ejercicio es que seas capaz de usar las cosas mas
        sencillas de LitElement.
      </p>
      <p>
        Para ello modificaras un componente que ya existe, para incluir
        propiedades en el js, pintarlas en el html y pasarselas al componente
        como atributos.
      </p>
      <br />
      <h4>Explicaciones</h4>
      <p>abre el siguiente componente en stackblizt:</p>
      <br />
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/002-lit-element-basic-component-bootstrap?file=basic-element.js"
              target="blank"
            >
              https://stackblitz.com/edit/002-lit-element-basic-component-bootstrap
            </a>
          </li>
        </ul>
      </div>
      <br />
      <p>
        Es un componente de lit muy basico, pero en vez de usar los estilos
        hardcodeados en el componente, utilizamos una libreria como bootstrap
        para no tener que preocuparnos del look and feel.
      </p>

      <p>Fijate que en el index.html hemos puesto bootstrap desde un cdn.</p>
      <pre><code>
          &lt;link rel=&quot;stylesheet&quot; href=&quot;https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css&quot;&gt;
        </code></pre>

      <p>En el componente hemos puesto la funcion de lit element que indica que
        no vamos a usar shadowdom, por lo que podremos usar css standard en
        nuestro componente.
      </p>

      <pre><code>
          createRenderRoot() {
            return this;
          }
        </code></pre>
      <br />
      <p>
        En lit element puedes pasar valor por defecto a las propiedades desde
        atributos en la etiqueta html del componete, fijate en el index.html que
        hemos definido el valor de nombre.
      </p>

      <pre><code>
          &lt;basic-element name=&quot;Guzman&quot;&gt;&lt;/basic-element&gt;
        </code></pre>
      <br />
      <p>
        En lit element tambien es imprescindible definir las propiedades, en el
        js del componete dentro de la propeidad estatica "properties", si no lo
        haces a diferencia de polymer, no te pintara nada en el html.
      </p>

      <pre><code>
          static get properties() {
            return {
              name: { type: String }
            };
          }
        </code></pre>
      <br />
      <p>
        En lit element puedes hacer que te pinte el valor de una propiedad en el
        html usando la sintaxis de las javascript templates
        \${nombreDePropiedad}.
      </p>

      <pre><code>
          render(){
            return html\`
                ...
                    &lt;ul class=&quot;list-group list-group-flush&quot;&gt;
                      &lt;li class=&quot;list-group-item&quot;&gt;name: \${this.name}&lt;/li&gt;
                    &lt;/ul&gt;
                ...
            \`;
          }
        </code></pre>
      <br />
      <h4>El ejercicio</h4>
      <p>
        Modifica el componente para que tenga varias lineas con diferentes
        propiedades.
      </p>
      <br />
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">First name: Guzmán</li>
          <li class="list-group-item">Age: 42</li>
          <li class="list-group-item">Salary: not enougth</li>
          <li class="list-group-item">Country: Spain</li>
          <li class="list-group-item">Employee: true</li>
          <li class="list-group-item">
            Description:Guzmán is a good, strong, tall, smart and modest person
          </li>
        </ul>
      </div>
      <br />
      <h4>Pasos</h4>
      <p>Pulsa el boton de fork para tener tu propia copia del componente.</p>

      <p>
        Modifica el componente para que tenga varias propiedades mas como
        "firstName" o "Age" y estableze el tipo a String, Number o Boolean.
      </p>

      <p>
        Modifica el index.html para que desde los atributos del componete se
        pase un valor por defecto a las propiedades para que pinte unos valores
        parecidos a.
      </p>

      <br />
      <p>tiempo estimado: 5 minutos.</p>

      <h4>resultado:</h4>

      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/003-lit-element-basic-component-exercise-1-finished?file=basic-element.js"
              target="blank"
            >
              https://stackblitz.com/edit/003-lit-element-basic-component-exercise-1-finished</a
            >
          </li>
        </ul>
      </div>
      <br />
      <h4>Extras:</h4>
      <p>
        Crea una segunda copia del componete con los datos de diferentes personas
      </p>
      <p>
        Utiliza el constructor de lit element para poner unos valores por defecto y crea una copia mas del componente sin pasar valores desde el html
      </p>
      <p>
        Crea una propiedad title y haz que se pueda configurar desde el html el encabezado del panel
      </p>
      <p>
        Crea una propiedad panelType y has que se pueda configurar desde el html la clase que que se utiliza en el header del panel por defecto primary para que se ponga la clase bg-primary, y modifica los tres paneles para que tengan diferentes colores de encabezado de panel.
        <br />
        bootstrap tiene como clases validas primary, secondary, success, warning, danger, info,light y dark
      </p>
      <br />
      <h4>Documentacion de LitElement para consultar como referencias</h4>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://lit-element.polymer-project.org/guide/templates"
              target="blank"
            >
              Documentacion oficial lit element
            </a>
          </li>
        </ul>
      </div>
      <br />
      <h4>Ejemplos de open wc para consultar como referencias</h4>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/open-wc-lit-demos-kudos-to-pascal-schilp?file=01-basic%2F01-basic-setup.js"
              target="blank"
            >
              Basic setup lit element open-wc
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/open-wc-lit-demos-kudos-to-pascal-schilp?file=01-basic%2F02-manage-properties.js"
              target="blank"
            >
              Manage properties lit element open-wc
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/open-wc-lit-demos-kudos-to-pascal-schilp?file=01-basic%2F03-property-changes.js"
              target="blank"
            >
              Properties changes lit element open-wc
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/open-wc-lit-demos-kudos-to-pascal-schilp?file=01-basic%2F04-properties-and-attributes.js"
              target="blank"
            >
              Properties and attributes lit element open-wc
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/open-wc-lit-demos-kudos-to-pascal-schilp?file=01-basic%2F05-passing-properties.js"
              target="blank"
            >
              Properties and attributes lit element open-wc
            </a>
          </li>
        </ul>
      </div>
      <br />
        <br />

    `;
  }
}
customElements.define("capitulo1-component", Capitulo1Component);
