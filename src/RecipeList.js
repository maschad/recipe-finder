import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Button, FormControl } from 'react-bootstrap';

import './RecipeList.css';

const endpoint = `http://www.recipepuppy.com/api/`
export default class RecipeList extends React.Component {
  state = {
    recipes: [
      {
        title: 'banana'
      },
      {
        title: 'apple'
      }
    ]
  }

  componentDidMount() {
    // axios.get(endpoint)
    //   .then(res => {
    //     const recipes = res.data;
    //     this.setState({ recipes });
    //   })
  }

  filterList = (event) => {
    const input = event.target.value.toLowerCase()
    // axios.get(`${endpoint}q=${input}`).then(res => {
    //   const recipes = res.data;
    //   this.setState({ recipes });
    // })
  }


  render() {
    return (
      <div>
        <form className="Search-input">
          <FormControl
            type="text"
            placeholder="Search for..."
            onChange={this.filterList}
            />
          <Button>Search</Button>
        </form>
        <div className="List-group">
          {
            _.map(this.state.recipes, (recipe, index) => <div className="List-group-item" style={{ backgroundColor: (index % 2 === 0 ? "lightgrey" : "white")}}>{recipe.title}</div>)
          }
        </div>
      </div>
    )
  }
}