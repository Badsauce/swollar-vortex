import React from 'react'
import ListItem from 'components/ListEditorPage/ListEditor/ListItem'

const ListEditor = ({ items, updateItemSelection, updateOnWhoSelection }) => (
  <div>
    {items.map( item => (
      <ListItem
        key={item.id}
        item={item}
        onSelectionChange={updateItemSelection}
        onWhoChange={updateOnWhoSelection}
      />
    ))}
  </div>
)

export default ListEditor
