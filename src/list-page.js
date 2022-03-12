/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import './link-list'

/**
 * The small box containing a link and a title.
 */
export class ListPage extends LitElement {
  static get styles() {
    return css`
    `;
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <ls-link-list></ls-link-list>
    `;
  }
}

window.customElements.define('ls-list-page', ListPage);
