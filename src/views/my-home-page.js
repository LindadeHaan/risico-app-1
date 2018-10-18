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
      </style>

      <div class="card extra-padding">
        <h1 id="introductie">Introductie</h1>

        <p>Welkom op de Risico App.</p>
		<div class="flex">
        	<p>Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen.</p>
			<p>Vul de vragen in door de juiste opties te selecteren en druk vervolgens rechts bovenin om een risico indicatie te krijgen.</p>
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
