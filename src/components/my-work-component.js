import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';

class MyWorkComponent extends PolymerElement {
  static get template() {
    return html`

	<style include="shared-styles">
	</style>
	<fieldset>
		<div class="form-item-container">
			<label for="education-k">Soort onderwijs van het kind</label>
			<select id="education-k" on-change="changeAnswer" name="education-k">
					<option value="no-help">Regulier onderwijs</option>
					<option value="help">Niet-regulier onderwijs</option>
					<option value="unknown">Onbekend</option>
				</select>
		</div>
		<div class="form-item-container">
			<label for="level-k">Huidig onderwijsniveau van het kind</label>
			<select id="level-k" on-change="changeAnswer" name="level-k">
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
			<select id="change-k" on-change="changeAnswer" name="change-k">
					<option value="up">Opschalen of gelijk blijvend</option>
					<option value="down">Afschalen</option>
					<option value="unknown">Onbekend</option>
			</select>
		</div>
		<div class="form-item-container">
			<label for="leave">Voortijdig schoolverlater</label>
			<select id="leave" on-change="changeAnswer" name="leave">
					<option value="no-leave">Door in onderwijs</option>
					<option value="unknown">Onbekend</option>
					<option value="not-applicable">Niet van toepassing</option>
					<option value="start">Uit onderwijs met startkwalificatie</option>
					<option value="leave">Voortijdig schoolverlaten</option>
				</select>
		</div>
		<div class="form-item-container">
			<label for="level-d">Hoogst behaalde onderwijsniveau vader</label>
			<select id="level-d" on-change="changeAnswer" name="level-d">
					<option value="vmbo1">Vmbo b/k, mbo 1 of mbo 2</option>
					<option value="vmbo2">Vmbo g/t, mbo 3 of mbo 4</option>
					<option value="havo">Havo onderbouw, Havo bovenbouw of Hbo bachelor</option>
					<option value="vwo">Vwo of Wo bachelor</option>
					<option value="unknown">Onderwijs onbekend</option>
			</select>
		</div>
		<div class="form-item-container">
			<label for="level-m">Hoogst behaalde onderwijsniveau moeder</label>
			<select id="level-m" on-change="changeAnswer" name="level-m">
					<option value="vmbo1">Vmbo b/k, mbo 1 of mbo 2</option>
					<option value="vmbo2">Vmbo g/t, mbo 3 of mbo 4</option>
					<option value="havo">Havo onderbouw, Havo bovenbouw of Hbo bachelor</option>
					<option value="vwo">Vwo of Wo bachelor</option>
					<option value="unknown">Onderwijs onbekend</option>
			</select>
		</div>
	</fieldset>

    `;
  }
}


window.customElements.define('my-work-component', MyWorkComponent);
