import './link-list'
import './link-submit'
import './header'
import { LitElement, html } from 'lit';


/**
 * The main app component
 */
export class LinkSharer extends LitElement {

  static get properties() {
    return {
      activePage: {type: Boolean},
    }
  }

  constructor () {
    super()
    this.activePage = 'browse'
  }

  updatePage (e) {
    this.activePage = e.detail.browse

  }

  render() {
    let page = html``
    switch (this.activePage) {
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
        <ls-header @page-changed=${this.updatePage}></ls-header>
        ${page}
    `;
  }
}

window.customElements.define('link-sharer', LinkSharer);
