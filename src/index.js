import './link-list'
import './link-submit'
import './sign-up'
import './sign-in'
import './header'
import { LitElement, html } from 'lit';
import { initializeApp } from "firebase/app";

// Initialize Firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbaEVsEjVD8F_xVLbwyJ4TZy6zXKHemZ4",
  authDomain: "linksharer-bac2a.firebaseapp.com",
  projectId: "linksharer-bac2a",
  storageBucket: "linksharer-bac2a.appspot.com",
  messagingSenderId: "648781224381",
  appId: "1:648781224381:web:2c51beb6759e4c9ab59ad4",
  measurementId: "G-YQCP9GC0RV"
};

const app = initializeApp(firebaseConfig);

/**
 * The main app component
 */
export class LinkSharer extends LitElement {

  static get properties() {
    return {
      activePage: {type: Boolean},
      user: {type: Object, attribute: false}
    }
  }

  constructor () {
    super()
    this.activePage = 'browse'
  }

  updatePage (e) {
    this.activePage = e.detail.browse
  }

  handleSignIn (e) {
    this.user = e.detail.user
    this.activePage = 'browse'
  }

  render() {
    let page = html``
    switch (this.activePage) {
      case 'signup':
        page = html`<ls-signup @signed-in=${this.handleSignIn}></ls-signup>`
        break;
      case 'signin':
        page = html`<ls-signin @signed-in=${this.handleSignIn}></ls-signin>`
        break;
      case 'browse':
        page = html`<ls-link-list .app=${app}></ls-link-list>`
        break;
      case 'submit':
        page = html`<ls-link-submit @submitted-link=${(e) => this.activePage = 'browse'} .user=${this.user} .app=${app}></ls-link-submit>`
        break;
      default:
        break;
    }
    return html`
        <ls-header .signedIn=${this.user} @page-changed=${this.updatePage}></ls-header>
        ${page}
    `;
  }
}

window.customElements.define('link-sharer', LinkSharer);
