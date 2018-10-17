import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';

class MyHomePage extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
		p {
			max-width: 30rem;
		}
		.flex {
			display: flex;
			flex-wrap: wrap;
			justify-content:flex-start;

		}
		img {
			height: 10rem;
			margin-left: 10rem;
		}
      </style>

      <div class="card">
        <h1 id="introductie">Introductie</h1>

        <p>Welkom op de Risico App.</p>
		<div class="flex">
        	<p>Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen.</p>
			<img src="src/styles/images/jeugdzorg.png" alt="logo">
		</div>
		<button on-click='resetStorage'>Reset Vragenlijst</button>
	  </div>
    `;
  }
  		resetStorage(){
			window.localStorage.clear();
			location.reload();
		}
}

window.customElements.define('my-home-page', MyHomePage);
