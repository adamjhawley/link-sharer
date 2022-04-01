/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * The small box containing a link and a title.
 */
export class LinkBox extends LitElement {

  static get properties() {
    return {
      /**
       * The title of the link.
       * @type {string}
       */
      title: {type: String},

      /**
       * The link itself.
       * @type {string}
       */
      link: {type: String},
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <a href=${this.link}><sl-button>${this.title}</sl-button></a>
    `;
  }
}

window.customElements.define('ls-link-box', LinkBox);
