import EmailInput from 'components/EmailInput'
import React from 'react'
import ListEditor from 'components/ListEditorPage/ListEditor'

import { getKinkList } from 'api'

export default class ListEditorPage extends React.Component {
  state={
    items: [],
  }

  updateItemSelection = (id, selection) => {
    const { items } = this.state

    const itemIndex = items.findIndex(item => item.id === id)
    const newItems = [...items]
    newItems[itemIndex] = {...items[itemIndex], selected: selection}

    this.setState({items: newItems})
  }

  componentDidMount() {
    getKinkList()
      .then(items => this.setState({ items }))
  }

  render() {
    const {listId, partnerId} = this.props.match.params
    const { items } = this.state

    return (
      <div>
        <h1>List Editor</h1>
        <p>{`for ${listId} and partner: ${partnerId}`}</p>
        {!!items.length && <ListEditor items={items} updateItemSelection={this.updateItemSelection}/>}
        {!items.length && <p>Loading...</p>}
      </div>
    );
  }
}
