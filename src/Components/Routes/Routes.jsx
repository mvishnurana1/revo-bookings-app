import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import Home from '../Home/Home';
import Map from '../Map/Map'; 
import Navbar from '../Navbar/Navbar'; 

const Routes = () => {
    return <>
        <Navbar/>
        <Router>
            <Switch>
                <Route path="/map" component={Map} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </>
}

export default Routes; 
