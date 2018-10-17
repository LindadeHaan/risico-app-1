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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
// import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';
import './styles/app-drawer.js';


// window.addEventListener("load", function(event) {
//   console.log("All resources finished loading!");
//
//   const data = window.localStorage.getItem('data') || []
//
//   if (!data.length > 0) {
// 	  const startData = [
// 		  {
// 			  'id' = '1',
// 			  'my-general-page' : {
// 				 'firstname-k': '',
// 				 'lastname-k': '',
// 				 'gender': '',
// 				 'age-k': '',
// 				 'firstname-m': '',
// 				 'lastname-m': '',
// 				 'age-m': '',
// 				 'firstname-d': '',
// 				 'lastname-d': '',
// 				 'origin': '',
// 				 'track': '',
// 			  }
// 			  'my-work-page' : {
// 				 'education-k': '',
// 				 'level-k': '',
// 				 'change-k': '',
// 				 'leave': '',
// 				 'level-d': '',
// 				 'level-m': '',
// 				 'living': '',
// 				 'household': '',
// 				 'divorce': '',
//				 'victim': '',
// 				 'participation-d': '',
// 				 'participation-m': '',
// 				 'eco-d': '',
// 				 'eco-m': '',
// 				 'crime': '',
// 				 'crime-k': '',
// 				 'crime-halt': '',
// 				 'crime-p': '',
// 				 'crime-d': '',
// 				 'crime-m': '',
// 			  }
// 		  }
// 	  ]
//   }
//
// });

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #AF030C;
          --app-secondary-color: #6d020c;
		  --app-darkgray-color: #434343;
		  --app-lightgray-color: #d3d3d3;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
		 background: #6d0007;
		 background: -moz-linear-gradient(left, #6d0007 0%, #af030c 94%, #a90329 100%);
		 background: -webkit-linear-gradient(left, #6d0007 0%,#af030c 94%,#a90329 100%);
		 background: linear-gradient(to right, #6d0007 0%,#af030c 94%,#a90329 100%);
		 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d0007', endColorstr='#a90329',GradientType=1 );
        }


        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          margin: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
		  border-bottom-style: solid;
		  border-width: 1px;
		  border-color: #d3d3d3;
		  width: 13.5rem;
        }

		.drawer-list a:hover {
         	background-color: #eeeeee;
			/* border-left-style: solid;
			border-right-style: solid; */
			width: auto;
			margin: 0;
			padding: 0 16px;
        }

		.drawer-list a:first-of-type {
			border-top-style: solid;
		}


        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }

		#main-title {
			color: white;
		}
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="homepage" href="[[rootPath]]homepage">Home</a>
			<a name="generalpage" href="[[rootPath]]generalpage">Algemeen</a>
            <a name="workpage" href="[[rootPath]]workpage">Werk & opleiding</a>
            <a name="housepage" href="[[rootPath]]housepage">Huisvesting & relaties</a>
			<a name="healthpage" href="[[rootPath]]healthpage">Geestelijke gezondheid</a>
			<a name="participationpage" href="[[rootPath]]participationpage">Maatschappelijke participatie</a>
			<a name="justicepage" href="[[rootPath]]justicepage">Justitie</a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div id="main-title" main-title="">Risico App</div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-home-page name="homepage"></my-home-page>
            <my-general-page name="generalpage"></my-general-page>
            <my-work-page name="workpage"></my-work-page>
			<my-house-page name="housepage"></my-house-page>
			<my-health-page name="healthpage"></my-health-page>
			<my-participation-page name="participationpage"></my-participation-page>
			<my-justice-page name="justicepage"></my-justice-page>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'home';
  } else if (['homepage', 'generalpage', 'workpage', 'housepage', 'healthpage', 'participationpage', 'justicepage'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
    	case 'homepage':
        	import('./my-home-page.js');
        	break;
      	case 'generalpage':
        	import('./my-general-page.js');
        	break;
      	case 'workpage':
        	import('./my-work-page.js');
        	break;
		case 'housepage':
			import('./my-house-page.js');
			break;
		case 'healthpage':
			import('./my-health-page.js');
			break;
		case 'participationpage':
			import('./my-participation-page.js');
			break;
		case 'justicepage':
			import('./my-justice-page.js');
			break;
     	case 'view404':
        	import('./my-view404.js');
        	break;
    }
  }
}

window.customElements.define('my-app', MyApp);
