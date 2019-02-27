import React from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import MyNewsDesk from '../components/MyNewsDesk';
import UserValidation from '../components/UserValidation';
import RiverOfNews from '../components/RiverOfNews';

const AppRouter =() => (
    <BrowserRouter>
    <div>
        <div>
            <Route path="/" component={MyNewsDesk} />
        </div>
    </div>
    </BrowserRouter>
);

export default AppRouter;