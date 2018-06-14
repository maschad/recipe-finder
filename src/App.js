// External Dependencies

import React, { Component } from 'react';

// Internal Dependencies
import RecipeList  from './components/RecipeList.component';

// Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe finder</h1>
        </header>
        <RecipeList/>
      </div>
    );
  }
}

export default App;
