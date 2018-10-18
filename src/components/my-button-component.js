import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class MyNextButton extends PolymerElement {
    static get template() {
        return html `

		<button type="submit">Volgende Pagina</button>

		<style>
				button {
				    font-size: 16px;
				    color: white;
				    width: 10rem;
				    height: 2.2rem;
				    /* padding: 0.5rem 0.8rem; */
				    font-family: "Roboto", "Noto", sans-serif;
				    background-color: var(--app-primary-color);
				    border-style: none;
				}

				button:hover {
				    background-color: var(--app-secondary-color);
				}

				button:active {
				    width: 9.9rem;
				    height: 2.1rem;
				    margin-left: 0.05rem;
				    margin-top: 0.05rem;
				    font-size: 15px;
}
		</style>
    `;
    }
}


window.customElements.define('my-next-button', MyNextButton);

// NEXT COMPONENT
class MyPrevButton extends PolymerElement {
    static get template() {
        return html `

		<button>Vorige Pagina</button>

		<style>
		button {
			font-size: 16px;
			color: white;
			width: 10rem;
			height: 2.2rem;
			/* padding: 0.5rem 0.8rem; */
			font-family: "Roboto", "Noto", sans-serif;
			background-color: var(--app-primary-color);
			border-style: none;
		}
		button:hover {
			background-color: var(--app-secondary-color);
		}
		button:active {
			width: 9.9rem;
			height: 2.1rem;
			margin-left: 0.05rem;
			margin-top: 0.05rem;
			font-size: 15px;
		}

		</style>
    `;
    }
}

window.customElements.define('my-prev-button', MyPrevButton);
