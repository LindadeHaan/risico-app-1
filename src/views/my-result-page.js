import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';

import { calculateRiskAssessment } from '../functions/calculateRiskAssessment.js'

// components
import '../components/my-button-component.js';


class myResultPage extends PolymerElement {
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
		   		justify-content: flex-start;
		   }
		</style>
		<div class="card extra-padding">
		<h1 id="resultaten">Resultaten</h1>
			<h3 class="percentage">[[calculateRiskPercentage()]]%</h3>
			<p> 0 - 2%: Laag risico</p>
			<p>2 - 5%: Middelmatig risico</p>
			<p>5% en hoger: Hoog risico</p>
		</div>
    `;
    }

    calculateRiskPercentage() {
        try {
            // return the function you wrote in calculateRiskAssessment.js
            // uitkomst van de formule schrijf je naar de local storage in json
            return calculateRiskAssessment(JSON.parse(window.localStorage.getItem('factors')))
        } catch (error) {
            throw new Error(error)
        }
    }

    ready() {
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
                throw new Error(error)
            }
        })
    }

}


window.customElements.define('my-result-page', myResultPage);
