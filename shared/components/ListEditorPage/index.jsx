import EmailInput from 'components/EmailInput'
import React from 'react'
import ListEditor from 'components/ListEditorPage/ListEditor'
import { Redirect } from 'react-router-dom'

import { getKinkList, submitKinkList } from 'api'

export default class ListEditorPage extends React.Component {
  state={
    items: [],
    error: '',
    isSubmitted: false,
  }

  updateItemSelection = (id, selection) => {
    const { items } = this.state

    const itemIndex = items.findIndex(item => item.id === id)
    const newItems = [...items]
    newItems[itemIndex] = {...items[itemIndex], selected: selection}

    this.setState({items: newItems})
  }

  updateOnWhoSelection = (id, selection) => {
    const { items } = this.state

    const itemIndex = items.findIndex(item => item.id === id)
    const newItems = [...items]
    newItems[itemIndex] = {...items[itemIndex], onWho: selection}

    this.setState({items: newItems})
  }

  componentDidMount() {
    getKinkList()
      .then(items => this.setState({ items }))
  }

  handleSubmit = (partnerId, items, coupleId) => {
    this.setState({ error: '' })

    const unansweredItems = items.filter(item => item.selected === '')

    if (unansweredItems.length) {
      return this.setState({ error: 'there are still unanswered questions' })
    }

    submitKinkList(partnerId, items, coupleId)
      .then(this.setState({isSubmitted: true}))
  }

  render() {
    const {coupleId, partnerId} = this.props.match.params
    const { items, error, isSubmitted } = this.state

    if (isSubmitted) {
      return <Redirect to={`/matchedList/${coupleId}`} push />
    }

    return (
      <div>
        <h1>List Editor</h1>
        <p>{`coupleId: ${coupleId}`}</p>
        <p>{`partner: ${partnerId}`}</p>
        <div style={{paddingBottom: '8px'}}>
          <button onClick={() => this.handleSubmit(partnerId, items, coupleId)}>Submit</button>
          {error && <p>{error}</p>}
        </div>
        {!!items.length && (
          <ListEditor
            items={items}
            updateItemSelection={this.updateItemSelection}
            updateOnWhoSelection={this.updateOnWhoSelection}
          />
        )}
        {!items.length && <p>Loading...</p>}
      </div>
    );
  }
}
