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
                    instructions: "(1/4 ounce) package yeast, 1 cup water, tablespoon oil, 2 1⁄2 cups all-purpose f" +
                            "lour"
                }, {
                    title: 'Grilled Mushroom Swiss Burgers',
                    instructions: "1 1/2 pounds lean ground beef, 1/2 teaspoon seasoned meat tenderizer, salt and p" +
                            "epper to taste, 2 teaspoons butter etc.."
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
        window.location.reload(true);
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