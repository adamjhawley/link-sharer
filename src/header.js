/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';

/**
 * The header containing links to different pages.
 */
export class Header extends LitElement {

  static get properties() {
    return {
      signedIn: {type: Boolean},
    }
  }

  render() {
    return html`
      <sl-button @click=${(e) => this.buttonPressed('browse')} variant="primary" >Latest</sl-button>
      <sl-button @click=${(e) => this.buttonPressed('submit')} variant="primary">Submit a Link</sl-button>
      ${this.signedIn
        ? html``
        : html`<sl-button @click=${(e) => this.buttonPressed('signup')} variant="primary">Sign Up</sl-button>`
      }

      <sl-divider style="--width: 4px;"></sl-divider>
    `;
  }

  buttonPressed (browse) {
    const event = new CustomEvent('page-changed', {
      detail: { browse },
    });
    this.dispatchEvent(event);
    console.log('dispatched', browse)
  }
}

window.customElements.define('ls-header', Header);
