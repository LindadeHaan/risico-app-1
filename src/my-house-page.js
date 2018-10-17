/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {
    PolymerElement,
    html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/my-button.js';
// import './components/vaadin-form-layout.js';
// import './components/vaadin-form-item.js';
// import './styles/vaadin-form-layout-styles.js';
// import './styles/vaadin-form-item-styles.js';

// const fatherCrime = document.getElementById("crime-d");
// const crimeParents = document.getElementById("crime-p")
// console.log(crimeParents);
// const crimeParentsValue = crimeParents.options[crimeParents.selectedIndex].value


class MyHousePage extends PolymerElement {
    static get template() {
        return html `
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
		.flex {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
		}
      </style>

		<div class="card">
			<div class="flex">
				<div class="circle">2</div>
				<h1>Tweede Pagina</h1>
			</div>

			<form>

				<fieldset>
					<legend>Huisvesting</legend>
					<div class="form-item-container">
						<label for="living">Soort woning</label>
						<select id="living">
								<option value="own">Eigen woning</option>
								<option value="hire">Huurwoning met huurtoeslag</option>
								<option value="no-hire">Huurwoning zonder huurtoeslag</option>
								<option value="unknown">Onbekend</option>
						</select>
					</div>
					<div class="form-item-container">
						<label for="household">Type huishouden</label>
						<select id="household">
								<option value="oneparent">Eenouderhuishouden</option>
								<option value="married-kids">Gehuwd paar met kinderen</option>
								<option value="not-married-kids">Niet-gehuwd paar met kinderen</option>
								<option value="married-no-kids">Gehuwd paar zonder kinderen</option>
								<option value="institutional">Institutioneel huishouden</option>
								<option value="not-married-no-kids">Niet-gehuwd paar zonder kinderen</option>
								<option value="other">Overig huishouden</option>
								<option value="unknown">Onbekend huishouden</option>
						</select>
					</div>
					</fieldset>
					<fieldset>
					<div class="form-item-container">
						<label for="divorce">Ouders gescheiden</label>
						<select id="divorce">
							<option value="no">Nee</option>
							<option value="yes">Ja</option>
						</select>
					</div>
					</fieldset>
				<my-prev-button></my-prev-button>
				<my-next-button></my-next-button>
			</form>
		</div>
    `;
    }
	changeCrime() {
		console.log('voert changecrime uit')
		console.log(document.getElementById("crime-p"))
	}
}


window.customElements.define('my-house-page', MyHousePage);
