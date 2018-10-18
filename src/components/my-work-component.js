import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';
import { setValueToFactor } from '../functions/setValueToFactor.js';

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

  changeAnswer(event) {
	  // alterernative = const target = event.targer
	  const { target } = event
	  // alternative: const options = event.options
	  const { options } = target
	  // gets the Name of the select
	  const { name: inputName } = target
	  // gets the selected value
	  const selectedValue = options[target.selectedIndex].value
	  console.log(selectedValue);
	  setNewLocalStorage(inputName, selectedValue, 'work')


	  if (inputName === "education-k") {
		if (selectedValue === "no-help") { // regulier
			setValueToFactor(inputName, 0)
		} else if (selectedValue === "help") { // niet-regulier
			setValueToFactor(inputName, -0.33030829)
		} else { // unknown
			setValueToFactor(inputName, -0.76956641)
		}
	} else if (inputName === "level-k") {
		if (selectedValue === "basic") {
			setValueToFactor(inputName, 0.25231544)
		} else if (selectedValue === "vmbo1") {
			setValueToFactor(inputName, 0.87841913)
		} else if (selectedValue === "vmbo2") {
			setValueToFactor(inputName, 0.56881862)
		} else if (selectedValue === "havo") {
			setValueToFactor(inputName, 0)
		} else if (selectedValue === "vwo") {
			setValueToFactor(inputName, 0.8356626)
		} else { // unknown
			setValueToFactor(inputName, 0)
		}
	} else if (inputName === "change-k") {
		if (selectedValue === "up") {
			setValueToFactor(inputName, 0)
		} else if (selectedValue === "down") {
			setValueToFactor(inputName, 0.58732282)
		} else { // unknown
			setValueToFactor(inputName, -1.11681655)
		}
	} else if (inputName === "leave") {
		if (selectedValue === "no-leave") {
			setValueToFactor(inputName, 0)
		} else if (selectedValue === "not-applicable") {
			setValueToFactor(inputName, 0.38735846)
		} else if (selectedValue === "start") {
			setValueToFactor(inputName, -13.64192657)
		} else if (selectedValue === "leave") {
			setValueToFactor(inputName, 0.34683899)
		} else { // unknown
			setValueToFactor(inputName, 0.80563824)
		}
	} else if (inputName === "level-d") {
		if (selectedValue === "vmbo1") {
			setValueToFactor(inputName, -0.21629522)
		} else if (selectedValue === "vmbo2") {
			setValueToFactor(inputName, 0.67119088)
		} else if (selectedValue === "havo") {
			setValueToFactor(inputName, 0)
		} else if (selectedValue === "vwo") {
			setValueToFactor(inputName, -12.08994875)
		} else { // unknown
			setValueToFactor(inputName, 0.88463779)
		}
	} else if (inputName === "level-m") {
		if (selectedValue === "vmbo1") {
			setValueToFactor(inputName, 0.15935901)
		} else if (selectedValue === "vmbo2") {
			setValueToFactor(inputName, 0.03334141)
		} else if (selectedValue === "havo") {
			setValueToFactor(inputName, 0)
		} else if (selectedValue === "vwo") {
			setValueToFactor(inputName, -13.03161926)
		} else { // unknown
			setValueToFactor(inputName, 0.03655114)
		}
	}



	try {
		window.localStorage.setItem('factors', JSON.stringify(window.factors))
		// triggers and event, which in this case is fake
		document.dispatchEvent(new Event ('launchEvent'))
	} catch (error) {
		throw new Error (error)
	}
  }


  ready () {
	  super.ready ()

  const selectNames = [
	  'education-k',
	  'level-k',
	  'change-k',
	  'leave',
	  'level-d',
	  'level-m'
  ]

	  // loop over selectNames, get all selectNames
	  // map loop
	  selectNames.map(selectNames => {
		  // acces via shadowroot html elements with selectNames
		  const select = this.shadowRoot.getElementById(selectNames)
		  //  get localStorage
		  const valueLocalStorage = getLocalStorageValue('work', selectNames)
		  console.log(valueLocalStorage)

		  if (valueLocalStorage) {
			  select.value = valueLocalStorage
		  }
	  })

  }
}


window.customElements.define('my-work-component', MyWorkComponent);
