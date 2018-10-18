import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import '../components/my-button-component.js';
import '../components/my-justice-component.js';


class MyJusticePage extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
		.flex {
			display: flex;
			flex-wrap: wrap;
			justify-content:flex-start;

		}
      </style>
	  <div class="card">
		<h1>Justitie</h1>
		  <form>
		  	<my-justice-component></my-justice-component>
			<my-prev-button></my-prev-button>
			<my-next-button></my-next-button>
		  </form>

	  </div>
    `;
  }



}

window.customElements.define('my-justice-page', MyJusticePage);
