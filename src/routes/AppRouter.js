/**
  * @import Layout
  * @import HomePage
  * @import SearchPage
  * @import DetailsPage
*/
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/Home';
import SearchPage from '../pages/Search';
import DetailsPage from '../pages/Details';

/**
  * @desc Router of application
*/
const AppRouter  = () => (
    <BrowserRouter className="bg-black">
        <Layout>
            <Switch>
                <Route path="/items" component={SearchPage} exact></Route>
                <Route path="/items/:id" component={DetailsPage}></Route>
                <Route path="/" component={HomePage} exact></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default AppRouter