import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';
import { setValueToFactor } from '../functions/setValueToFactor.js';

class MyHealthComponent extends PolymerElement {
  static get template() {
    return html`

	<style include="shared-styles">
	</style>

	<fieldset>

		<div class="form-item-container">
			<label for="victim">Als slachtoffer bekend bij slachtofferhulp</label>
			<select id="victim" on-change="changeAnswer" name="victim">
				<option disabled="disabled" selected="selected">Selecteer</option>
				<option value="no">Nee</option>
				<option value="yes">Ja</option>
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
	  setNewLocalStorage(inputName, selectedValue, 'health')

	  if (inputName === "victim") {
		  if (selectedValue === "yes") {
			  console.log(setValueToFactor(inputName, 0.23639124))
			  setValueToFactor(inputName, 0.23639124)
		  } else {
		  	setValueToFactor(inputName, 0)
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
	  "victim"
  ]

	  // loop over selectNames, get all selectNames
	  // map loop
	  selectNames.map(selectNames => {
		  // acces via shadowroot html elements with selectNames
		  const select = this.shadowRoot.getElementById(selectNames)
		  //  get localStorage
		  const valueLocalStorage = getLocalStorageValue('health', selectNames)
		  console.log(valueLocalStorage)

		  if (valueLocalStorage) {
			  select.value = valueLocalStorage
		  }
	  })

  }
}


window.customElements.define('my-health-component', MyHealthComponent);
