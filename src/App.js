import React, { Component } from 'react';
import RecipeList  from './RecipeList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Finder</h1>
        </header>
        <RecipeList/>
      </div>
    );
  }
}

export default App;
