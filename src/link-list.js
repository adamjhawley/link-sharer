/**
 * @license
 * Copyright 2022 Adam Hawley
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import './link-box'
import {
  getFirestore,
  collection,
  getDocs
} from 'firebase/firestore/lite'

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
      /**
       * Firebase App Object
       * @type {Object}
       */
      app: {type: Object}
    };
  }

  constructor() {
    super()
    this.linkBoxes = []
  }

  async connectedCallback() {
    const db = getFirestore(this.app)
    let col = collection(db, 'links')
    const querySnapshot = await getDocs(col)
    querySnapshot.forEach((doc) => {
      this.linkBoxes.push(doc.data())
    })
    super.connectedCallback()
  }

  render() {
    return html`
      ${this.linkBoxes.map(lb =>
        html`<br><ls-link-box .link=${lb.link} .title=${lb.title}></ls-link-box><br>`
      )}
    `;
  }
}

window.customElements.define('ls-link-list', LinkList);
