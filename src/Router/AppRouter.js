import React from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import MyNewsDesk from '../components/MyNewsDesk';

const AppRouter =() => (
    <BrowserRouter>
    <div>
        <div>
            <Route path="/uniqueKey/:uniqueKey/channelId/:channelId" component={MyNewsDesk} isExact={true} />
        </div>
    </div>
    </BrowserRouter>
);

export default AppRouter;