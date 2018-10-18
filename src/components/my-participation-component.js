import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';
import { setValueToFactor } from '../functions/setValueToFactor.js';


class MyParticipationComponent extends PolymerElement {
  static get template() {
    return html`

	<style include="shared-styles">
	</style>
	<fieldset>
	   	<div class="form-item-container">
	      	<label for="participation-d">Maatschappelijke participatie van vader</label>
	      	<select id="participation-d" on-change="changeAnswer" name="participation-d">
				<option disabled="disabled" selected="selected">Selecteer</option>
	    		<option value="work">Werkend of overig actief</option>
	         	<option value="no-work">Geen werk en niet actief</option>
	         	<option value="unknown">Onbekend</option>
	      </select>
	   	</div>
	   	<div class="form-item-container">
	      	<label for="participation-m">Maatschappelijke participatie van moeder</label>
	      	<select id="participation-m" on-change="changeAnswer" name="participation-m">
			<option disabled="disabled" selected="selected">Selecteer</option>
	         	<option value="work">Werkend of overig actief</option>
	         	<option value="no-work">Geen werk en niet actief</option>
	         	<option value="unknown">Onbekend</option>
	      	</select>
	   	</div>
		   <div class="form-item-container">
		      <label for="eco-d">Socio economische status van vader</label>
		      <select id="eco-d" on-change="changeAnswer" name="eco-d">
			  <option disabled="disabled" selected="selected">Selecteer</option>
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
		      <select id="eco-m"on-change="changeAnswer" name="eco-m">
			  <option disabled="disabled" selected="selected">Selecteer</option>
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
	  setNewLocalStorage(inputName, selectedValue, 'participation')

	  if (inputName === "participation-d") {
		if (selectedValue === "work") {
			setValueToFactor(inputName, 0)
		} else if (selectedValue === "no-work") {
			setValueToFactor(inputName, 0.33771646)
		} else { // unknown
			setValueToFactor(inputName, 0.23485558)
		}
	} else if (inputName === "participation-m") {
		if (selectedValue === "work") {
			setValueToFactor(inputName, 0)
		} else if (selectedValue === "no-work") {
			setValueToFactor(inputName, 0.36957624)
		} else { // unknown
			setValueToFactor(inputName, -0.95012155)
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
	 'participation-d',
 	 'participation-m',
 	 'eco-d',
 	 'eco-m'
  ]

	  // loop over selectNames, get all selectNames
	  // map loop
	  selectNames.map(selectNames => {
		  // acces via shadowroot html elements with selectNames
		  const select = this.shadowRoot.getElementById(selectNames)
		  //  get localStorage
		  const valueLocalStorage = getLocalStorageValue('participation', selectNames)
		  console.log(valueLocalStorage)

		  if (valueLocalStorage) {
			  select.value = valueLocalStorage
		  }
	  })

  }


}


window.customElements.define('my-participation-component', MyParticipationComponent);
