import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import MyNewsDesk from '../components/MyNewsDesk';
import IframeLoadingData from '../components/IframeLoadingData';

const AppRouter =() => (
	<BrowserRouter>
			<Route path="/riverOfNews" component={MyNewsDesk} exact={true} />
			<Route path="/newsList" component={IframeLoadingData} isExact={true} />
	</BrowserRouter>
);

export default AppRouter;