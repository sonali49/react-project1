import React from 'react';
import ListPublishedDate from './ListPublishedDate';
import FontSizeChangerLabel from './FontSizeChangerLabel';
const RiverOfNews = (props) => {
	const items = props.itemList;
	return (
		<div>
			<FontSizeChangerLabel />
			{items && <h3 className="widget__message">News Here</h3> }
			{
				
				items.map(item =>
				(
				<div key={item.id} className="news-items">
					<h2><a href={item.url} target="_blank">{item.header}</a></h2>
					<h3>Press Room: {item.pressroom_name}</h3>
					<ListPublishedDate item={item} />
					<div className="news-content">
						<img align="left" src={item.image_thumbnail_small} />
						<p>{item.summary}</p>
					</div>
				</div>
				))

			}
		</div>
	)
}


export default RiverOfNews;