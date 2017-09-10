import EmailInput from 'components/EmailInput'
import React from 'react'
import { Redirect } from 'react-router-dom'

import { submitPartnerEmails } from 'api'

export default class AppView extends React.Component {
  state = {
      theirEmail: '',
      yourEmail: '',
      listUrl: '',
  }

  updateYourEmail = newEmail => this.setState({ yourEmail: newEmail })

  updateThierEmail = newEmail => this.setState({ theirEmail: newEmail })

  handleSubmitEmails = ( yourEmail, theirEmail ) => {
    submitPartnerEmails(yourEmail, theirEmail)
      .then(response => {
        const { coupleId, partnerId } = response
        this.setState({listUrl: `/editList/${coupleId}/${partnerId}`})
      })
  }

  render() {
    const { yourEmail, theirEmail, listUrl } = this.state

    if (listUrl) {
      return <Redirect to={listUrl} push />
    }

    return (
      <div>
        <h1>Match your kinks</h1>
        <EmailInput onChange={this.updateYourEmail} value={yourEmail} label="Yours" />
        <EmailInput onChange={this.updateThierEmail} value={theirEmail} label="Theirs" />
        <button onClick={() => this.handleSubmitEmails(yourEmail, theirEmail)} >Submit</button>
      </div>
    );
  }
}
