import React from 'react';
import { render } from 'react-dom';

const RiverOfNews = (props) => {
		const items = props.itemList;
		debugger
		return (
				<div>
						{items && <h3 className="widget__message">Find the river of news</h3>}
						{
								items.map(item =>
								(
								<div key={item.id}>
										<h2><a href={item.url} target="_blank">{item.header}</a></h2>
										<h3>Press Room: {item.pressroom_name}</h3>
										<img src={item.image_thumbnail_small} />
										<p>{item.summary}</p>
								</div>
								))

						}
				</div>
		)
}


export default RiverOfNews;