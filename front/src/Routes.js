import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage'
import EntryDetail from './components/EntryDetail'

export const Routes = ()  => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={EntryDetail}/>
      </Switch>
    </div>
  );
}