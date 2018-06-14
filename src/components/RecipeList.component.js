// External Dependencies

import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Button, FormControl } from 'react-bootstrap';

// Style
import './RecipeList.css';

const endpoint = `http://www.recipepuppy.com/api/`

export default class RecipeList extends Component {
  state = {
    recipes: []
  }

  filterList = (event) => {
    const userSearchInput = event.target.value.toLowerCase()
    axios.get(`${endpoint}?q=${userSearchInput}&p=20`).then(res => {
      const recipes = res.data;
      this.setState({ recipes });
    })
  }


  render() {

    const filteredList = _.map(this.state.recipes, (recipe, index) => <div className="List-group-item" style={{ backgroundColor: (index % 2 === 0 ? "lightgrey" : "white"), color: "blue"}}>{recipe.title}</div>)

    return (
      <div>
        <form className="Search-input-container">
          <FormControl
            className="Search-input"
            type="text"
            placeholder="Search for..."
            onChange={this.filterList}
            />
          <Button className="Button">Search</Button>
        </form>
        <div className="List-group">
          {filteredList}
        </div>
      </div>
    )
  }
}
