/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {
    PolymerElement,
    html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/my-button.js';

class myGeneralPage extends PolymerElement {
    static get template() {
        return html `
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
	        <div class="circle">1</div>
	        <h1>Eerste Pagina</h1>
	     </div>
	     <h2>Algemene informatie</h2>
	     <form>
	        <fieldset>
	           <!-- KIND -->
	           <legend>Kind</legend>
	           <div class="form-item-container">
	              <label for="firstname-k">Voornaam kind</label>
	              <input type="text" name="first-name-k" id="firstname-k"></input>
	           </div>
	           <div class="form-item-container">
	              <label for="lastname-k">Achternaam kind</label>
	              <input type="text" name="last-name-k" id="lastname-k"></input>
	           </div>
	           <div class="form-item-container">
	              <label for="gender">Geslacht</label>
	              <select id="gender">
	                 <option value="female">Meisje</option>
	                 <option value="male">Jongen</option>
	              </select>
	           </div>
	           <div class="form-item-container">
	              <label for="age-k">Leeftijd kind</label>
	              <select id="age-k">
	                 <option value="0-4">0 tot 4 jaar</option>
	                 <option value="4-8">4 tot 8 jaar</option>
	                 <option value="8-12">8 tot 12 jaar</option>
	                 <option value="12-16">12 tot 16 jaar</option>
	                 <option value="16-18">16 tot 18 jaar</option>
	              </select>
	           </div>
	        </fieldset>
	        <fieldset>
	           <!-- MOEDER -->
	           <legend>Moeder</legend>
	           <div class="form-item-container">
	              <label for="firstname-m">Voornaam moeder</label>
	              <input type="text" name="first-name-m" id="firstname-m"></input>
	           </div>
	           <div class="form-item-container">
	              <label for="lastname-m">Achternaam moeder</label>
	              <input type="text" name="last-name-m" id="lastname-m"></input>
	           </div>
	           <div>
	              <label for="age-m">Leeftijd moeder bij geboorte</label>
	              <select id="age-m">
	                 <option value="20">Jonger dan 20 jaar</option>
	                 <option value="20-25">20 tot 25 jaar</option>
	                 <option value="25-30">25 tot 30 jaar</option>
	                 <option value="30-35">30 tot 35 jaar</option>
	                 <option value="35-40">35 tot 40 jaar</option>
	                 <option value="40">40 jaar en ouder</option>
	              </select>
	           </div>
	        </fieldset>
	        <fieldset>
	           <!-- VADER -->
	           <legend>Vader</legend>
	           <div class="form-item-container">
	              <label for="firstname-d">Voornaam vader</label>
	              <input type="text" name="first-name-d" id="firstname-d"></input>
	           </div>
	           <div class="form-item-container">
	              <label for="lastname-d">Achternaam vader</label>
	              <input type="text" name="last-name-d" id="lastname-d"></input>
	           </div>
	           <label for="age-d">Leeftijd vader bij geboorte</label>
	           <div class="form-item-container">
	              <select id="age-d">
	                 <option value="20">Jonger dan 20 jaar</option>
	                 <option value="20-25">20 tot 25 jaar</option>
	                 <option value="25-30">25 tot 30 jaar</option>
	                 <option value="30-35">30 tot 35 jaar</option>
	                 <option value="35-40">35 tot 40 jaar</option>
	                 <option value="40">40 jaar en ouder</option>
	              </select>
	           </div>
	           <div class="form-item-container">
	              <label for="origin">Herkomst ouders</label>
	              <select id="origin">
	                 <option value="nl">Beide ouders Nederlands</option>
	                 <option value="not-nl">Beide ouders niet Nederlands</option>
	                 <option value="not-and-nl">Een van de ouders Nederlands en de andere niet Nederlands</option>
	              </select>
	           </div>
	           <div class="form-item-container">
	              <label for="track">Hulptraject</label>
	              <select id="track">
	                 <option value="no-help">Geen jeugdhulp zonder verblijf gehad</option>
	                 <option value="help">Jeugdhulp zonder verblijf gehad</option>
	              </select>
	           </div>
	        </fieldset>
	        <div>
	           <my-prev-button></my-prev-button>
	           <my-next-button></my-next-button>
	        </div>
	     </form>
	  </div>

    `;
    }
}

window.customElements.define('my-general-page', myGeneralPage);
