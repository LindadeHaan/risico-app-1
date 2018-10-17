/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/my-button.js';

class MyParticipationPage extends PolymerElement {
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
		  <div class="flex">
			  <!-- <div class="circle">2</div> -->
			  <h1>Geestelijke gezondheid</h1>
		  </div>

		  <form>
			<fieldset>
				  <div class="form-item-container">
					  <label for="participation-d">Maatschappelijke participatie van vader</label>
					  <select id="participation-d">
						  <option value="work">Werkend of overig actief</option>
						  <option value="no-work">Geen werk en niet actief</option>
						  <option value="unknown">Onbekend</option>
					  </select>
				  </div>
				  <div class="form-item-container">
					  <label for="participation-m">Maatschappelijke participatie van moeder</label>
					  <select id="participation-m">
						  <option value="work">Werkend of overig actief</option>
						  <option value="no-work">Geen werk en niet actief</option>
						  <option value="unknown">Onbekend</option>
					  </select>
				  </div>
				  <div class="form-item-container">
						<label for="eco-d">Socio economische status van vader</label>
						<select id="eco-d">
							<option value="receiver">Bijstandsontvanger</option>
		                  	<option value="unsuitable">Arbeidsongeschikte</option>
		                  	<option value="social">Ontvanger overige sociale voorzieningen</option>
		                  	<option value="unemployed">Ontvanger werkloosheidsuitkering</option>
		                  	<option value="amb">Ambtenaar</option>
		                  	<option value="direct">Directeur groot aandeelhouder</option>
		                  	<option value="employee">Werknemer particulier bedrijf</option>
		                  	<option value="independent">Zelfstandige</option>
		                  	<option value="student">Student</option>
		                  	<option value="active">Overig actief</option>
		                  	<option value="not-active">Overig niet actief</option>
		                  	<option value="pension">Pensioen</option>
		                  	<option value="dad-unknown">Vader onbekend</option>
		                  	<option value="no-income">Zonder inkomen</option>
		                  	<option value="unknown">Onbekend</option>
						</select>
					</div>
 					<div class="form-item-container">
						<label for="eco-m">Socio economische status van moeder</label>
						<select id="eco-m">
							<option value="receiver">Bijstandsontvanger</option>
							<option value="unsuitable">Arbeidsongeschikte</option>
							<option value="social">Ontvanger overige sociale voorzieningen</option>
							<option value="unemployed">Ontvanger werkloosheidsuitkering</option>
							<option value="amb">Ambtenaar</option>
							<option value="direct">Directeur groot aandeelhouder</option>
							<option value="employee">Werknemer particulier bedrijf</option>
							<option value="independent">Zelfstandige</option>
							<option value="student">Student</option>
							<option value="active">Overig actief</option>
							<option value="not-active">Overig niet actief</option>
							<option value="pension">Pensioen</option>
							<option value="dad-unknown">Vader onbekend</option>
							<option value="no-income">Zonder inkomen</option>
							<option value="unknown">Onbekend</option>
						</select>
					</div>

			</fieldset>

			  <my-prev-button></my-prev-button>
			  <my-next-button></my-next-button>
		  </form>
	  </div>
    `;
  }
}

window.customElements.define('my-participation-page', MyParticipationPage);
