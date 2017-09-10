import React from 'react'

const ListItem = ({ onSelectionChange, onWhoChange, item }) => (
  <div>
    <span>{item.name}</span>
    <div>
      <button
        style={{ background: ((item.selected === 'yes') ? 'blue' : null) }}
        onClick={() => onSelectionChange(item.id, 'yes')}
      >Yes</button>
      <button
        style={{ background: ((item.selected === 'maybe') ? 'blue' : null) }}
        onClick={() => onSelectionChange(item.id, 'maybe')}
      >Maybe</button>
      <button
        style={{ background: ((item.selected === 'no') ? 'blue' : null) }}
        onClick={() => onSelectionChange(item.id, 'no')}
      >
      No</button>
    </div>
    {/*<div>
      <button
        style={{ background: ((item.onWho === 'onMe') ? 'blue' : null) }}
        onClick={() => onWhoChange(item.id, 'onMe')}
      >On Me</button>
      <button
        style={{ background: ((item.onWho === 'onThem') ? 'blue' : null) }}
        onClick={() => onWhoChange(item.id, 'onThem')}
      >On Them</button>
      <button
        style={{ background: ((item.onWho === 'both') ? 'blue' : null) }}
        onClick={() => onWhoChange(item.id, 'both')}
      >
      Both</button>
    </div>*/}
  </div>
)

export default ListItem
