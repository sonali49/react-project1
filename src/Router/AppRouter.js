import React from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import MyNewsDesk from '../components/MyNewsDesk';
import IframeLoadingData from '../components/IframeLoadingData';

const AppRouter =() => (
	<BrowserRouter>
		<div>
			<div>
				<Route path="/riverOfNews" component={MyNewsDesk} exact={true} />
				<Route path="/newsList" component={IframeLoadingData}/>
			</div>
		</div>
	</BrowserRouter>
);

export default AppRouter;