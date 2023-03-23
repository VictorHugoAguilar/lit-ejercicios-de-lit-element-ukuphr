import { LitElement, html } from 'lit-element';

class Capitulo2Component extends LitElement {

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
      <h3>Ejercicio 2. Eventos</h3>
      <br />
      <h4>Introduccion</h4>
      <p>
        El objetivo de este ejercicio es que seas capaz de utilizar eventos de lit element
      </p>
      <p>
        Para ello modificaras un componente que ya existe, para escuchar eventos de click o de pulsacion de teclas para gestionar un formulario de login.
      </p>
      <br />
      <h4>Explicaciones</h4>
      <p>abre el siguiente componente en stackblizt:</p>
      <br />
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/004-lit-events-basic-component?file=basic-element.js"
              target="blank"
            >
              https://stackblitz.com/edit/004-lit-events-basic-component?file=basic-element.js
            </a>
          </li>
        </ul>
      </div>
       <p>
        Es un componente de lit muy basico, en el que para ahorrar tiempo hemos puesto el html y css para un formulario de login, y el html y css para dos mensajes.
      </p>
      <p>Fijate que el metodo render es muy largo, para estos casos se utilizamos funciones get que devuelven partes de la template para que el metodo render sea mas simple .</p>
      <pre><code>
        get successMessage() {
          return html\`
            &lt;div class=&quot;alert alert-success&quot; role=&quot;alert&quot;&gt;
            ...
            &lt;/div&gt;
          \`;
        }
        </code></pre>
        <p>En el metodo render se pueden usar if normales o ternarios para devolver el contenido cuando lo necesitemos.
      </p>

      <pre><code>
        if(this.logged) {
          return this.successMessage;
        }

         return html\`
          &lt;div&gt;
            \${this.showMessage
              ? html\`The message is: \${this.message}\`
              : ''}
          &lt;/div&gt;
        \`;
        </code></pre>
      <br />
      <p>Para escuchar un evento en lit element se pone una arroba y a continuacion el nombre de una funcion .</p>
      <pre><code>
        return html\`&lt;button @click=&quot;\${this.handleClick}&quot;&gt;\`;
      </code></pre>
            <br />
      <p>En el caso de los inputs, podemos escuchar el evento de keyup para ecuchar el cambio del input y setear el value a la propiedad podemos usar binding de una direccion.</p>
      <pre><code>
         &lt;input .value=&quot;\${this.email}&quot; 
                @keyup=&quot;\${
                  (e) =&gt; {
                    this.handleEmail(e.target.value)
                  }
                }&quot;
            /&gt;
      </code></pre>
      <br />
      <h4>El ejercicio</h4>
      <p>
        Modifica el componente para que cuando introzucas el email y el password correcto, se oculte el formulario y vea el mensaje de exito, si se introduzen datos incorrectos, se oculta el formulario y se muestra el mensaje de exito.
      </p>
      <br />
      <h4>Pasos</h4>
      <p>Pulsa el boton de fork para tener tu propia copia del componente.</p>

      <p>
        Modifica el componente para que tenga las propiedades email, password, en el constructor inicilizalos en el constructor como cadena vacia
      </p>
      
      <p>
        Modifica el input de email y el de password para que escuchen el evento de @keyup para que llamen a dos funciones que seteen las propiedades email y password, tambien utiliza binding para setear los valores en los inputs de vuelta
      </p>

      <p>
        Crea una propiedad logged y otra llamada error, booleanas y en el constructor inicializalas a false. Incluye un evento de click en el boton de submit que llame a una metodo handleSubmit
      </p>

      <p>
        Separa la template del render en tres funciones get loginForm, get successMessage y get errorMessage, y modifica el motodo render para que si la propiedad logged esta a true, se muestre el template de exito, si la propiedad error esta a true muestra el template de error y por defecto muestre el formulario.
      </p>

      <p>
        Crea dos propiedades nuevas correctEmail y correctPassword, inicializala a dos valores que te gusten y modifica el metodo handleSubmit para que si el usuario y el password es igual al valor que has puesto en esas propiedades, la variable logged se ponga a true, si no, la variable error a false
      </p>
      <p>
        Por ultimo, pon dos eventos de click en los botones de los mensajes para que se vuelva a mostrar el formulario al pulsar en los botones despues del exito o el error y remplaza xxx por el email del usuario por binding
      </p>
            <br />
      <p>tiempo estimado: 15 minutos.</p>

      <h4>resultado:</h4>

      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://stackblitz.com/edit/005-lit-events-basic-component-finished?file=basic-element.js"
              target="blank"
            >
              https://stackblitz.com/edit/005-lit-events-basic-component-finished?file=basic-element.js</a
            >
          </li>
        </ul>
      </div>
      <br />
      <br />
      <h4>Extras:</h4>
      <p>
        Crea una funcion que compruebe si el email introducido es un email, mientras no lo sea, deshabilita el boton de submit, haz que el boton de sumbit este deshabilitado por defecto
      </p>
      <p>
        Crea una funcion que compruebe si el password es de al menos 8 caracteres, si no lo es, el boton de sumbit debe de estar deshabilitado
      </p>
      <p>
        Pon un evento, de forma que al perderse el foco desde el campo password, si la longitud no es suficiente, se muestre un mensjae que lo indique debajo del input, el mensaje, debe de desaparecer si el password pasa a tener 8 caracteres.
      </p>
      <p>
        Crea un componente basic-messaje en la carpeta src que reciba un texto, un nombre de evento y un tipo y remplaza las funciones get de los mensajes por este compoennte nuevo
      </p>
      <p>
        Crea un componente login-service que reciba un email y un password, y despues de dos segundos devuelva true o false, extrae la comprobacion del componente basico y usa ese "servicio"
      </p>
      <p>
        Separa el formulario a un componente separado y haz que cuando se pulse el boton de submit emita un evento que escuche el basic-element
      </p>
      <p>
        Pon un componente de loading que se muestre mientras se comprueba el login 
        https://getbootstrap.com/docs/4.0/components/progress/
      </p>
       <br />
      <h4>Documentacion de LitElement para consultar como referencias</h4>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              href="https://lit-element.polymer-project.org/guide/events"
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
      <h4>Ejemplos de como se puede escuchar los cambios de un input </h4>
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
    `
  }
}

customElements.define('capitulo2-component', Capitulo2Component);