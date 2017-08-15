import EmailInput from 'components/EmailInput'
import React from 'react'
import ListEditor from 'components/ListEditorPage/ListEditor'

import { submitPartnerEmails } from 'api'

export default class ListEditorPage extends React.Component {
  state={
    items: [
      { id: 1, name: 'Dick Touching', selected: 'no' },
      { id: 2, name: 'Helicopter Dick', selected: 'yes' },
    ]
  }

  updateItemSelection = (id, selection) => {
    const { items } = this.state

    const itemIndex = items.findIndex(item => item.id === id)
    const newItems = [...items]
    newItems[itemIndex] = {...items[itemIndex], selected: selection}

    this.setState({items: newItems})
  }

  render() {
    const {listId, partnerId} = this.props.match.params
    const { items } = this.state

    return (
      <div>
        <h1>List Editor</h1>
        <p>{`for ${listId} and partner: ${partnerId}`}</p>
        <ListEditor items={items} updateItemSelection={this.updateItemSelection}/>
      </div>
    );
  }
}
