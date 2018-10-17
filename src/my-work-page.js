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


class myWorkPage extends PolymerElement {
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
					<legend>Werk en opleiding</legend>
					<div class="form-item-container">
						<label for="education-k">Soort onderwijs van het kind</label>
						<select id="education-k">
								<option value="no-help">Regulier onderwijs</option>
								<option value="help">Niet-regulier onderwijs</option>
								<option value="unknown">Onbekend</option>
							</select>
					</div>
					<div class="form-item-container">
						<label for="level-k">Huidig onderwijsniveau van het kind</label>
						<select id="level-k">
								<option value="basic">Basisonderwijs</option>
								<option value="vmbo1">Vmbo b/k, mbo 1 of mbo 2</option>
								<option value="vmbo2">Vmbo g/t, mbo 3 of mbo 4</option>
								<option value="havo">Havo onderbouw, Havo bovenbouw of Hbo bachelor</option>
								<option value="vwo">Vwo of Wo bachelor</option>
								<option value="unknown">Onderwijs onbekend</option>
							</select>
					</div>
					<div class="form-item-container">
						<label for="change-k">Verandering in het voortgezet onderwijsniveau</label>
						<select id="change-k">
								<option value="up">Opschalen of gelijk blijvend</option>
								<option value="down">Afschalen</option>
								<option value="unknown">Onbekend</option>
							</select>
					</div>
					<div class="form-item-container">
						<label for="leave">Voortijdig schoolverlater</label>
						<select id="leave">
								<option value="no-leave">Door in onderwijs</option>
								<option value="unknown">Onbekend</option>
								<option value="not-applicable">Niet van toepassing</option>
								<option value="start">Uit onderwijs met startkwalificatie</option>
								<option value="leave">Voortijdig schoolverlaten</option>
							</select>
					</div>
					<div class="form-item-container">
						<label for="level-d">Hoogst behaalde onderwijsniveau vader</label>
						<select id="level-d">
								<option value="vmbo1">Vmbo b/k, mbo 1 of mbo 2</option>
								<option value="vmbo2">Vmbo g/t, mbo 3 of mbo 4</option>
								<option value="havo">Havo onderbouw, Havo bovenbouw of Hbo bachelor</option>
								<option value="vwo">Vwo of Wo bachelor</option>
								<option value="unknown">Onderwijs onbekend</option>
						</select>
					</div>
					<div class="form-item-container">
						<label for="level-m">Hoogst behaalde onderwijsniveau moeder</label>
						<select id="level-m">
								<option value="vmbo1">Vmbo b/k, mbo 1 of mbo 2</option>
								<option value="vmbo2">Vmbo g/t, mbo 3 of mbo 4</option>
								<option value="havo">Havo onderbouw, Havo bovenbouw of Hbo bachelor</option>
								<option value="vwo">Vwo of Wo bachelor</option>
								<option value="unknown">Onderwijs onbekend</option>
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


window.customElements.define('my-work-page', myWorkPage);
