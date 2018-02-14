import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input
} from 'reactstrap';
import {ShowRecipes} from './ShowRecipes';

export class Recipes extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: [
                {
                    title: 'Pizza',
                    instructions: "Whisk 3 3/4 cups flour and 1 1/2 teaspoons salt. Make a well and add 1 1/3 cups warm water, 1 tablespoon sugar and 1 packet yeast. When foamy, mix in 3 tablespoons olive oil; knead until smooth, 5 minutes. Brush with olive oil, cover in a bowl and let rise until doubled, about 1 hour 30 minutes. Divide into two 1-pound balls. Use 1 pound per recipe unless noted"
                }, {
                    title: 'Hamburger',
                    instructions: "2 pounds ground beef, 1 egg, beaten, 3/4 cup dry bread crumbs, 3 tablespoons evaporated milk, 2 tablespoons Worcestershire sauce, 1/8 teaspoon cayenne pepper, 2 cloves garlic, minced"
                }
            ],
            show: false
        }
        this.toggle = this
            .toggle
            .bind(this);
        this.addInstructions = this
            .addInstructions
            .bind(this);
        this.update = this
            .update
            .bind(this);
    }

    componentWillMount() {
        localStorage.getItem('recipes') && this.setState({
            recipes: JSON.parse(localStorage.getItem('recipes'))
        });
    }

    componentDidMount() {    
        this.update;
    }

    update() {
        this.setState({recipes: this.state.recipes});
    }

    toggle() {
        this.setState({
            show: !this.state.show
        });
    }

    addInstructions() {
        var name = $(".recipe-name").val();
        var instructions = $(".input-2").val();

        if (name === '') {
            alert('Please enter a name.');
            this.setState({show: true});
        } else {
            this
                .state
                .recipes
                .push({title: name, instructions: instructions});
            this.setState({show: false});
        }
    }

    render() {
        return (
        <div>
               <div>
                    <Button
                        color="info"
                        id="add-recipe"
                        className="col-sm-12"
                        onClick={this.toggle}>Add Recipe</Button>
                    <hr/>
                    <h3 id="no-recipes">No recipes to show, add by clicking the above button.</h3>
                    <Modal isOpen={this.state.show} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Add a new recipe</ModalHeader>
                        <ModalBody>
                            <h3>Name</h3>
                            <Input placeholder="Enter a new name" className="recipe-name"/>
                            <h3 className="instructions">Instructions</h3>
                            <textarea cols="30" rows="7" className="input-2"></textarea>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.addInstructions}>Add</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                     <ShowRecipes recipes={this.state.recipes} update={this.update}/>
                </div>
            </div>
        );
    }
}