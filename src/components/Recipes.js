import React from 'react';
import {AddRecipe} from './AddRecipe';

export class Recipes extends React.Component {
    constructor(){
        super();
        this.state= {
            recipes: [
                {
                    title: 'Pizza',
                    instructions: 'Add ketchup, mayo etc.'
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