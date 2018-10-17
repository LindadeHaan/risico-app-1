import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';

class MyJusticeComponent extends PolymerElement {
  static get template() {
    return html`

	<style include="shared-styles">
	</style>

	<fieldset>
		<div class="form-item-container">
			<label for="crime-k">Kind in het verleden verdacht geweest van een delict</label>
			<select id="crime-k" on-change="changeAnswer" name="crime-k">
				<option value="no">Nee</option>
				<option value="yes">Ja</option>
			</select>
		</div>
		<div class="form-item-container">
			<label for="crime-halt">Kind in aanraking geweest met bureau HALT voor een delict</label>
			<select id="crime-halt" on-change="changeAnswer" name="crime-halt">
				<option value="no">Nee</option>
						<option value="yes">Ja</option>
					</select>
				</div>
				<div class="form-item-container">
					<label for="crime-p">Vader of moeder verdacht van delict in het verleden</label>
					<select id="crime-p" on-change="changeAnswer" name="crime-p">
						<option selected="selected" value="no">Nee</option>
						<option value="yes">Ja</option>
					</select>
				</div>
				<div class="form-item-container" id="crime-d">
					<label for="crime-d">Vader verdacht van delict in het verleden</label>
					<select id="crime-d" on-change="changeAnswer" name="crime-d">>
						<option value="no">Nee</option>
						<option value="yes">Ja</option>
					</select>
				</div>
				<div class="form-item-container" id="crime-m">
					<label for="crime-m">Moeder verdacht van delict in het verleden</label>
					<select id="crime-m" on-change="changeAnswer" name="crime-m">
						<option value="no">Nee</option>
						<option value="yes">Ja</option>
					</select>
				</div>

	</fieldset>


    `;
  }
}


window.customElements.define('my-justice-component', MyJusticeComponent);
