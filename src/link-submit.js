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
export class LinkSubmit extends LitElement {
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
    <sl-input label="Title" placeholder="Enter title here" clearable></sl-input>
    <sl-input label="Link" placeholder="Enter link here" clearable></sl-input>
    <br>
    <sl-button>Submit</sl-button>
    `;
  }
}

window.customElements.define('ls-link-submit', LinkSubmit);
