import './list-page'
import './link-submit'
import './header'
import { LitElement, html } from 'lit';


/**
 * The main app component
 */
export class LinkSharer extends LitElement {

  static get properties() {
    return {
      browse: {type: Boolean}
    }
  }

  constructor () {
    super()
    this.browse = true
  }

  updatePage (e) {
    this.browse = e.detail.browse
    console.log(e)
  }

  render() {
    return html`
        <ls-header @page-changed=${this.updatePage}></ls-header>
        ${this.browse
          ? html`<ls-list-page></ls-list-page>`
          : html`<ls-link-submit></ls-link-submit>`
        }
    `;
  }
}

window.customElements.define('link-sharer', LinkSharer);
