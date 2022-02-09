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
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The title of the link.
       * @type {string}
       */
      name: {type: String},

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
      <p><a href=${this.link}>${this.name}</a></p>
    `;
  }
}

window.customElements.define('ls-link-box', LinkBox);
