import React from 'react';

const ListPublishedDate = (props) => {
const item = props.item;
  return(
  <span>
    {
    item.published_at.map(pubDate =>(<p key={pubDate.$}>Published at -{new Date(pubDate.$.datetime).toLocaleString()} </p>))
    }
  </span>
  )
}
export default ListPublishedDate;