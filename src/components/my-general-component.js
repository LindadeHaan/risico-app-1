import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';


class MyChildComponent extends PolymerElement {
  static get template() {
    return html`


	<style include="shared-styles">
	</style>

	<fieldset>
	   <!-- KIND -->
	   <legend>Kind</legend>
	   <div class="form-item-container">
		  <label for="gender">Geslacht kind</label>
		  <select id="gender" on-change="changeAnswer" name="gender">
			 <option value="female">Meisje</option>
			 <option value="male">Jongen</option>
		  </select>
	   </div>
	   <div class="form-item-container">
		  <label for="age-k">Leeftijd kind</label>
		  <select id="age-k" on-change="changeAnswer" name="age-k">
			 <option value="0-4">0 tot 4 jaar</option>
			 <option value="4-8">4 tot 8 jaar</option>
			 <option value="8-12">8 tot 12 jaar</option>
			 <option value="12-16">12 tot 16 jaar</option>
			 <option value="16-18">16 tot 18 jaar</option>
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
	  setNewLocalStorage(inputName, selectedValue, 'general')
  }

  ready () {
  	super.ready ()

	const selectNames = [
		'gender',
	  	'age-k'
	]

	  // loop over selectNames, get all selectNames
	  // map loop
	  selectNames.map(selectNames => {
		  // acces via shadowroot html elements with selectNames
		  const select = this.shadowRoot.getElementById(selectNames)
		  //  get localStorage
		  const valueLocalStorage = getLocalStorageValue('general', selectNames)
		  console.log(valueLocalStorage)

		  if (valueLocalStorage) {
			  select.value = valueLocalStorage
		  }
	  })

  }

}


window.customElements.define('my-child-component', MyChildComponent);

// NEXT COMPONENT


class MyMotherComponent extends PolymerElement {
  static get template() {
    return html`


	<style include="shared-styles">
	</style>

	<fieldset>
	   <!-- MOEDER -->
	   <legend>Moeder</legend>
	   <div>
		  <label for="age-m">Leeftijd moeder bij geboorte</label>
		  <select id="age-m" name="age-m" on-change="changeAnswer">
			 <option value="20">Jonger dan 20 jaar</option>
			 <option value="20-25">20 tot 25 jaar</option>
			 <option value="25-30">25 tot 30 jaar</option>
			 <option value="30-35">30 tot 35 jaar</option>
			 <option value="35-40">35 tot 40 jaar</option>
			 <option value="40">40 jaar en ouder</option>
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
	setNewLocalStorage(inputName, selectedValue, 'general')
  }

  ready () {
	super.ready ()

  const selectNames = [
	'age-m'
  ]

	// loop over selectNames, get all selectNames
	// map loop
	selectNames.map(selectNames => {
		// acces via shadowroot html elements with selectNames
		const select = this.shadowRoot.getElementById(selectNames)
		//  get localStorage
		const valueLocalStorage = getLocalStorageValue('general', selectNames)
		console.log(valueLocalStorage)

		if (valueLocalStorage) {
			select.value = valueLocalStorage
		}
	})

  }

}


window.customElements.define('my-mother-component', MyMotherComponent);

class MyFatherComponent extends PolymerElement {
  static get template() {
    return html`


	<style include="shared-styles">
	</style>

	<fieldset>
	   <!-- VADER -->
	   <legend>Vader</legend>
	   <div class="form-item-container">
	    <label for="age-d">Leeftijd vader bij geboorte</label>
		  <select id="age-d" on-change="changeAnswer" name="age-d">
			 <option value="20">Jonger dan 20 jaar</option>
			 <option value="20-25">20 tot 25 jaar</option>
			 <option value="25-30">25 tot 30 jaar</option>
			 <option value="30-35">30 tot 35 jaar</option>
			 <option value="35-40">35 tot 40 jaar</option>
			 <option value="40">40 jaar en ouder</option>
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
	  setNewLocalStorage(inputName, selectedValue, 'general')
  }

  ready () {
	  super.ready ()

  const selectNames = [
	  'age-d'
  ]

	  // loop over selectNames, get all selectNames
	  // map loop
	  selectNames.map(selectNames => {
		  // acces via shadowroot html elements with selectNames
		  const select = this.shadowRoot.getElementById(selectNames)
		  //  get localStorage
		  const valueLocalStorage = getLocalStorageValue('general', selectNames)
		  console.log(valueLocalStorage)

		  if (valueLocalStorage) {
			  select.value = valueLocalStorage
		  }
	  })

  }

}


window.customElements.define('my-father-component', MyFatherComponent);

class MyBothComponent extends PolymerElement {
  static get template() {
    return html`


	<style include="shared-styles">
	</style>

	<fieldset>
	<legend>Beide</legend>
	   <div class="form-item-container">
		  <label for="origin">Herkomst ouders</label>
		  <select name='origin' id="origin" on-change="changeAnswer">
			 <option value="nl">Beide ouders Nederlands</option>
			 <option value="not-nl">Beide ouders niet Nederlands</option>
			 <option value="not-and-nl">Een van de ouders Nederlands en de andere niet Nederlands</option>
		  </select>
	   </div>
	   <div class="form-item-container">
		  <label for="track">Hulptraject</label>
		  <select id="track" on-change="changeAnswer" name="track" on-change="changeAnswer">
			 <option value="no-help">Geen jeugdhulp zonder verblijf gehad</option>
			 <option value="help">Jeugdhulp zonder verblijf gehad</option>
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
		setNewLocalStorage(inputName, selectedValue, 'general')
	}

	ready () {
		super.ready ()

	const selectNames = [
		'origin',
		'track'
	]

		// loop over selectNames, get all selectNames
		// map loop
		selectNames.map(selectNames => {
			// acces via shadowroot html elements with selectNames
			const select = this.shadowRoot.getElementById(selectNames)
			//  get localStorage
			const valueLocalStorage = getLocalStorageValue('general', selectNames)
			console.log(valueLocalStorage)

			if (valueLocalStorage) {
				select.value = valueLocalStorage
			}
		})

	}

}


window.customElements.define('my-both-component', MyBothComponent);
