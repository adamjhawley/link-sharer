import './link-list'
import './link-submit'
import './sign-up'
import './header'
import { LitElement, html } from 'lit';


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
      case 'browse':
        page = html`<ls-link-list></ls-link-list>`
        break;
      case 'submit':
        page = html`<ls-link-submit></ls-link-submit>`
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
