/**
 * @license
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html } from 'lit';
import './link-list'
import {
  getFirestore,
  collection,
  addDoc,
} from 'firebase/firestore/lite';

/**
 * The small box containing a link and a title.
 */
export class LinkSubmit extends LitElement {
  static get properties() {
    return {
      user: {type: Object},
      app: {type: Object}
    };
  }

  get _form () {
    return this.renderRoot.querySelector('#submit-form')
  }

  async submitLink (e) {
    let userTitle = this._form.querySelector('#title-input').value
    let userLink = this._form.querySelector('#link-input').value
    const db = getFirestore(this.app);
    let col = collection(db, 'links')
    await addDoc(col, {
      link: userLink,
      title: userTitle
    })

    const event = new CustomEvent('submitted-link')
    this.dispatchEvent(event)
  }

  render() {
    return html`
    <div id='submit-form'>
      <sl-input id="title-input" label="Title" placeholder="Enter title here" clearable></sl-input>
      <sl-input id="link-input" type="url" label="Link" placeholder="Enter link here" clearable></sl-input>
      <br>
      <sl-button @click=${this.submitLink}>Submit</sl-button>
    </div>
    `;
  }
}

window.customElements.define('ls-link-submit', LinkSubmit);
