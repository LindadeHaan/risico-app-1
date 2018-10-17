import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';

class MyHealthComponent extends PolymerElement {
  static get template() {
    return html`

	<style include="shared-styles">
	</style>

	<fieldset>

		<div class="form-item-container">
			<label for="victim">Als slachtoffer bekend bij slachtofferhulp</label>
			<select id="victim" on-change="changeAnswer" name="victim">
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
  }

  ready () {
	  super.ready ()

  const selectNames = [
	  'victim'
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
