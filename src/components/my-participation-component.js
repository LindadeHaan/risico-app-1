import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';

class MyParticipationComponent extends PolymerElement {
  static get template() {
    return html`

	<style include="shared-styles">
	</style>
	<fieldset>
	   	<div class="form-item-container">
	      	<label for="participation-d">Maatschappelijke participatie van vader</label>
	      	<select id="participation-d" on-change="changeAnswer" name="participation-d">
	    		<option value="work">Werkend of overig actief</option>
	         	<option value="no-work">Geen werk en niet actief</option>
	         	<option value="unknown">Onbekend</option>
	      </select>
	   	</div>
	   	<div class="form-item-container">
	      	<label for="participation-m">Maatschappelijke participatie van moeder</label>
	      	<select id="participation-m" on-change="changeAnswer" name="participation-m">
	         	<option value="work">Werkend of overig actief</option>
	         	<option value="no-work">Geen werk en niet actief</option>
	         	<option value="unknown">Onbekend</option>
	      	</select>
	   	</div>
		   <div class="form-item-container">
		      <label for="eco-d">Socio economische status van vader</label>
		      <select id="eco-d" on-change="changeAnswer" name="eco-d">
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
}


window.customElements.define('my-participation-component', MyParticipationComponent);