/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import './link-box'

/**
 * The small box containing a link and a title.
 */
export class LinkList extends LitElement {
  static get styles() {
    return css`
    `;
  }

  static get properties() {
    return {
      /**
       * Container of link boxes
       * @type {array}
       */
      linkBoxes: {type: Array},
    };
  }

  constructor() {
    super();
    this.linkBoxes = [
      {'name': 'Creating a Link-Sharing Site Part 0',
       'link': 'https://adamjhawley.com/post/2022-02-16-creating-a-link-sharing-site-part-0/'},
      {'name': 'Creating a Link-Sharing Site Part 1',
       'link': 'https://adamjhawley.com/post/2022-03-04-creating-a-link-sharing-site-part-1/'},

    ]
  }

  render() {
    return html`
      ${this.linkBoxes.map(lb =>
        html`<br><ls-link-box .link=${lb.link} .name=${lb.name}></ls-link-box><br>`
      )}
    `;
  }
}

window.customElements.define('ls-link-list', LinkList);
