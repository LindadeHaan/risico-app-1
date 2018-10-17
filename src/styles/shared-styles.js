/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>


      .card {
        margin: 24px;
        padding: 16px;
        color: var(--app-darkgray-color);
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: var(--app-darkgray-color);
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0 16px 13px;
        color: var(--app-darkgray-color);
        font-size: 22px;
      }
	  h1#introductie {
		  margin-left: 0;
	  }

	  /* FORMS */

	  form {
	      /* display: flex;
	      flex -direction: column; */
	  }

	  fieldset {
	      width: 70%;
		  display: flex;
	      flex-direction: column;
		  border: none;
		  margin: 2rem 0;
	  }

	  input, select {

		  height: 1.5rem;
		  font-size: 1rem;
		  /* border-color: var(--app-primary-color); */

	  }

	  input, select, label {
		  width: 14rem;
	  }

	  label {
		  margin-bottom: 0.5rem;
	  }

	  input {
		  border: 2px solid var(--app-primary-color);
		  border-radius: 4px;
		  margin: 8px 0;
	      outline: none;
	      padding: 0.8rem 0.2rem;
		  box-sizing: border-box;
			transition: .3s;
	  }

	  input:focus {
		border-color: var(--app-secondary-color);
   		box-shadow:0 0 8px 0 var(--app-secondary-color);
	  }

	  /* input:valid {
		  border-color: green;
	  }

	  input:invalid {
		  border-color: var(--app-primary-color);
	  } */

	  .form-item-container {
		 margin: 1.5rem 0;
		 width: 80%;
		 display: flex;
		 flex-direction: row;
		 flex-wrap: wrap;
		 justify-content: space-between;
		 align-items:baseline;
		 line-height: 1.2rem;
	  }

	  select {
		  border-style: none;
		  border-bottom: solid var(--app-primary-color) 2px;
		  background-color: transparent;
  		/* -webkit-appearance: none;
  		-webkit-border-radius: 0px;
		background: url("/src/styles/images/down-arrow.png") no-repeat right;
		background-size: contain; */
		padding-left: 2px;
	  }
	  legend {
		  font-weight: bold;
		  color: var(--app-darkgray-color);
	  }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
