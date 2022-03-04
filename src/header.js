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

  render() {
    return html`
      <a href="index.html"><sl-button variant="primary" >Latest</sl-button></a>
      <a href="submit-page.html"><sl-button variant="primary">Submit a Link</sl-button></a>

      <sl-divider style="--width: 4px;"></sl-divider>
    `;
  }
}

window.customElements.define('ls-header', Header);
