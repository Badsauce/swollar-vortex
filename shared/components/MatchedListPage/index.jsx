import React from 'react'

import { getMatchedList } from 'api'

export default class MatchedListPage extends React.Component {
  state = {
      list: [],
      error: '',
  }

  componentDidMount() {
    getMatchedList(this.props.match.params.coupleId)
      .then(({error, list}) => {
        if (error) {
          this.setState({error})
        } else {
          this.setState({list})
        }
      })
  }

  render() {
    const { list, error } = this.state

    if (error) {
      return <div>{error}</div>
    }

    if (!list.length) {
      return (
        <div>
          loading...
        </div>
      )
    }

    return (
      <div>
        <h1>Your Matches</h1>
        <div>
          {list.map(listItem => <div key={listItem.name}>{`${listItem.name}: ${listItem.selected}`}</div>)}
        </div>
      </div>
    )
  }
}
