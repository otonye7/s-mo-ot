import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
					<Route  path={'/'} exact={true}  component={Homepage} />
			</Switch>
    </div>
  );
}

export default App;
