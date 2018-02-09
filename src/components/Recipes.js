import React from 'react';
import {AddRecipe} from './AddRecipe';

export class Recipes extends React.Component {
    constructor(){
        super();
        this.state= {
            recipes: [
                {
                    title: 'Pizza',
                    instructions: "(1/4 ounce) package yeast, 1 cup water, tablespoon oil, 2 1⁄2 cups all-purpose flour"
                },
                {
                    title: 'Grilled Mushroom Swiss Burgers',
                    instructions: "1 1/2 pounds lean ground beef, 1/2 teaspoon seasoned meat tenderizer, salt and pepper to taste, 2 teaspoons butter etc.."
                }
           ]
      }
}

    render(){
        return (
            <div>
                <AddRecipe recipes={this.state.recipes} />
            </div>
        );
    }
}