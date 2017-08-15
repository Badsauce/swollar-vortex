import React from 'react'

const ListItem = ({ onChange, item }) => (
  <div>
    <span>{item.name}</span>
    <div>
      <button
        style={{ background: ((item.selected === 'yes') ? 'blue' : null) }}
        onClick={() => onChange(item.id, 'yes')}
      >Yes</button>
      <button
        style={{ background: ((item.selected === 'maybe') ? 'blue' : null) }}
        onClick={() => onChange(item.id, 'maybe')}
      >Maybe</button>
      <button
        style={{ background: ((item.selected === 'no') ? 'blue' : null) }}
        onClick={() => onChange(item.id, 'no')}
      >
      No</button>
    </div>
  </div>
)

export default ListItem
