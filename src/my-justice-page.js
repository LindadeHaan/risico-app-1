/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/my-button.js';

class MyJusticePage extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
		.flex {
			display: flex;
			flex-wrap: wrap;
			justify-content:flex-start;

		}
      </style>
	  <div class="card">
		  <div class="flex">
			  <!-- <div class="circle">2</div> -->
			  <h1>Geestelijke gezondheid</h1>
		  </div>

		  <form>
			<fieldset>
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
}

window.customElements.define('my-justice-page', MyJusticePage);
