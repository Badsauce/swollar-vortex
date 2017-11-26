import React from 'react';
import { Email, Item, Span, A, renderEmail } from 'react-html-email'

export const generate = (partnerId, coupleId) => {
  const url = `http://localhost:3000/editList/${coupleId}/${partnerId}`
  
  return renderEmail(
    <Email title="Welcome to KinkAF">
      <Item align="center">
        <Span fontSize={20}>
          Fill out your list here 
          <A href={url}>{url}</A>.
        </Span>
      </Item>
    </Email>
  )
}