import React from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import MyNewsDesk from '../components/MyNewsDesk';
import IframeLoadingData from '../components/IframeLoadingData';

const AppRouter =() => (
	<BrowserRouter>
		<div>
			<div>
				<Route path="/riverOfNews" component={MyNewsDesk} isExact={true} />
				<Route path="/newsList" component={IframeLoadingData} isExact={true} />
			</div>
		</div>
	</BrowserRouter>
);

export default AppRouter;