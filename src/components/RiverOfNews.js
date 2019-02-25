import React from 'react';
import { render } from 'react-dom';

const RiverOfNews = (props) => {
    console.log(typeof(props.itemList))
    const items = props.itemList.itemList;
    
    return (
        <div>
            {items && <h3 className="widget__message">Find the river of news</h3>}
            {
                items.map(item =>
                (
                <div key={item.id}> 
                    <h2><a href={item.url} target="_blank">{item.header}</a></h2>
                   
                    <h3>Press Room: {item.pressroom_name}</h3>
                    <p>{item.summary}</p>
                </div>
                ))
                
            }
        </div>
    )
}
   

export default RiverOfNews;