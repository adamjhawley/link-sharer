import {LitElement, html, css} from 'lit';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

/**
 * The small box containing a link and a title.
 */
export class SignUp extends LitElement {
  static get styles() {
    return css`
    `;
  }

  static get properties() {
    return {
        form: {type: Object, attribute: false},
        user: {type: Object, attribute: false}
    };
  }

  createAccount(email, password) {
    return new Promise ((resolve, reject) => {
      console.log('creating account')
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          this.user = userCredential.user;
          resolve()
      })
    })
  }

  get _form () {
    return this.renderRoot.querySelector('#signupform')
  }

  signIn (email, password) {
    const auth = getAuth();
    var user;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
    return user
  }

  async handleSubmit (e) {
    let email = this._form.querySelector('#email').value
    let password = this._form.querySelector('#password').value
    await this.createAccount(email, password)

    const event = new CustomEvent('signed-in', {
      detail: { user: this.user },
    });
    this.dispatchEvent(event);
    console.log('dispatched sign-in event')
  }

  render() {
    return html`
        <div id="signupform">
            <sl-input id="email" label="Email" type="email" placeholder="Enter email here" clearable></sl-input>
            <sl-input id="password" label="Password" type="password" toggle-password placeholder="Enter password here"></sl-input>
            <br>
            <sl-button @click=${this.handleSubmit}>Submit</sl-button>
        </div>
    `;
  }
}

window.customElements.define('ls-signup', SignUp);
