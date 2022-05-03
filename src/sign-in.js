/**
 * @license
 * Copyright 2022 Adam Hawley
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html } from 'lit';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/**
 * Sign in page
 */
export class SignIn extends LitElement {
  static get properties() {
    return {
        user: {type: Object, attribute: false}
    };
  }

  get _form () {
    return this.renderRoot.querySelector('#signinform')
  }

  signIn (email, password) {
    return new Promise ((resolve, reject) => {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        this.user = userCredential.user
        resolve()
      })
      .catch((error) => {
        console.log(error)
        reject()
      });
    })
  }

  async handleSubmit (e) {
    let email = this._form.querySelector('#email').value
    let password = this._form.querySelector('#password').value
    await this.signIn(email, password)

    const event = new CustomEvent('signed-in', {
      detail: { user: this.user },
    });
    this.dispatchEvent(event);
    console.log('dispatched sign-in event')
  }

  render() {
    return html`
        <div id="signinform">
            <sl-input id="email" label="Email" type="email" placeholder="Enter email here" clearable></sl-input>
            <sl-input id="password" label="Password" type="password" toggle-password placeholder="Enter password here"></sl-input>
            <br>
            <sl-button @click=${this.handleSubmit}>Submit</sl-button>
        </div>
    `;
  }
}

window.customElements.define('ls-signin', SignIn);
