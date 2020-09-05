import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BioPage from './pages/Bio';
import NutritionPage from './pages/Nutrition';
import TrainingPage from './pages/Training';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" component={AuthPage} />
        <Route path="/bio" component={BioPage} />
        <Route path="/nutrition" component={NutritionPage} />
        <Route path="/training" component={TrainingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
