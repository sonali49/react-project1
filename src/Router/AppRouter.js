import React from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import MyNewsDesk from '../components/MyNewsDesk';

const AppRouter =() => (
    <BrowserRouter>
    <div>
        <div>
            <Route path="/" component={MyNewsDesk} isExact={true} />
            <Route path="/riverOfNews" component={MyNewsDesk} isExact={true} />
        </div>
    </div>
    </BrowserRouter>
);

export default AppRouter;