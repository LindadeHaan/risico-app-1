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
import '../styles/shared-styles.js';
import '../components/my-button-component.js';
import '../components/my-justice-component.js';
import { calculateRiskAssessment } from '../functions/calculateRiskAssessment.js'

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
		<h1>Justitie</h1>
		  <form>
		  	<my-justice-component></my-justice-component>
			<my-prev-button></my-prev-button>
			<my-next-button></my-next-button>
		  </form>

		  <h3 class="percentage">[[calculateRiskPercentage()]]%</h3

	  </div>
    `;
  }

		  calculateRiskPercentage() {
		   try {
			   // return the function you wrote in calculateRiskAssessment.js
			   // uitkomst van de formule schrijf je naar de local storage in json
			   return calculateRiskAssessment(JSON.parse(window.localStorage.getItem('factors')))
		   } catch (error) {
			   throw new Error (error)
		   }
		}

		ready () {
		   super.ready()
		   // launch fake event
		   document.addEventListener('launchEvent', () => {
			   	// door polymer zit t in de shadow root
				// dus je kan niet direct ophalen
				 const shadowDomNode = this.shadowRoot.querySelector('.percentage')
				 console.log(shadowDomNode)
					 try {
						 // retrigger calculation when another option is clicked
						 // bereken het percentage
						 const calculatePercentage = calculateRiskAssessment(JSON.parse(window.localStorage.getItem('factors')))
						 // add to h3
						 shadowDomNode.textContent = `${calculatePercentage}%`
					 } catch (error) {
						 throw new Error (error)
					 }
		   })
}

}

window.customElements.define('my-justice-page', MyJusticePage);
