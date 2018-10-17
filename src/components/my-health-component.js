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
}


window.customElements.define('my-health-component', MyHealthComponent);
