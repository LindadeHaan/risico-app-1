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

// const fatherCrime = document.getElementById("father-crime");
// const crimeParents = document.getElementById("crime-p")
// console.log(crimeParents);
// const crimeParentsValue = crimeParents.options[crimeParents.selectedIndex].value


class MySecondPage extends PolymerElement {
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
					<fieldset>
						<legend>Justitie</legend>

						<div class="form-item-container">
							<label for="crime">Kind in het verleden verdacht geweest van een delict</label>
							<select id="crime">
								<option value="no">Nee</option>
								<option value="yes">Ja</option>
							</select>
						</div>

						<div class="form-item-container">
							<label for="crime-k">Kind in het verleden verdacht geweest van een delict</label>
							<select id="crime-k">
								<option value="no">Nee</option>
								<option value="yes">Ja</option>
							</select>
						</div>

						<div class="form-item-container">
							<label for="crime-halt">Kind in aanraking geweest met bureau HALT voor een delict</label>
							<select id="crime-halt">
								<option value="no">Nee</option>
								<option value="yes">Ja</option>
							</select>
						</div>

						<div class="form-item-container">
							<label for="parents-crime">Vader of moeder verdacht van delict in het verleden</label>
							<select id="parents-crime" on-change="changeCrime">
								<option selected="selected" value="no">Nee</option>
								<option value="yes">Ja</option>
							</select>
						</div>

						<div class="form-item-container" id="father-crime">
							<label for="father-crime">Vader verdacht van delict in het verleden</label>
							<select id="father-crime">
								<option value="no">Nee</option>
								<option value="yes">Ja</option>
							</select>
						</div>

						<div class="form-item-container" id="father-crime">
							<label for="mother-crime">Moeder verdacht van delict in het verleden</label>
							<select id="mother-crime">
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
		console.log(document.getElementById("parents-crime"))
	}
}


window.customElements.define('my-secondpage', MySecondPage);
