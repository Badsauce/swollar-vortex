import React from 'react'
import ListItem from 'components/ListEditorPage/ListEditor/ListItem'

const ListEditor = ({ items, updateItemSelection }) => (
  <div>
    {items.map( item => (
      <ListItem key={item.id} item={item} onChange={updateItemSelection} />
    ))}
  </div>
)

export default ListEditor
