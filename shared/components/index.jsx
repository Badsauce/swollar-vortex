import React from 'react'

export default class AppView extends React.Component {
  render() {
    return (
      <div id="app-view">
        {this.props.children}
      </div>
    );
  }
}
