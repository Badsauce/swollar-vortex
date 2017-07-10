import EmailInput from 'components/EmailInput'
import React from 'react'

import { submitPartnerEmails } from 'api'

export default class AppView extends React.Component {
  state = {
      theirEmail: '',
      yourEmail: '',
  }

  updateYourEmail = newEmail => this.setState({ yourEmail: newEmail })

  updateThierEmail = newEmail => this.setState({ theirEmail: newEmail })
  
  render() {
    const { yourEmail, theirEmail } = this.state

    return (
      <div>
        <h1>Match your kinks</h1>
        <EmailInput onChange={this.updateYourEmail} value={yourEmail} label="Yours" />
        <EmailInput onChange={this.updateThierEmail} value={theirEmail} label="Theirs" />
        <button onClick={() => submitPartnerEmails(yourEmail, theirEmail)} >Submit</button>
      </div>
    );
  }
}
