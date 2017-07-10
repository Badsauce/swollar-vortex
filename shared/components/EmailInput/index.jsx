import React from 'react';

export default class EmailInput extends React.Component {

  onChange = event => {
    this.props.onChange(event.target.value)
  }

  render() {
    const { label, value } = this.props

    return (
      <div>
        <label>{label}</label>
        <input onChange={this.onChange} type="email" value={value} />
      </div>
    );
  }
}
