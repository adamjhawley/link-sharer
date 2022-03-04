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
      {'name': 'The best article ever.',
       'link': 'https://adamjhawley.github.io/post/2022-02-07-using-git-rebase-to-perfect-commits/'},
      {'name': 'Another great article.',
       'link': 'https://adamjhawley.github.io/post/2022-02-04-mastering-git-with-git-rebase/'},

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
