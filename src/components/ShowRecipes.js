import React from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter, Input, Collapse, Button, CardBody, Card } from 'reactstrap';

var timeout = null;

export class ShowRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: -1,
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('recipes', JSON.stringify(nextProps.recipes));
    }

    handleChange(name, e) {
        $('.saved').show();
        clearTimeout(timeout);
        this.setState({
            value: e.target.value
        });
        timeout = setTimeout(function() {
            this.props.recipes.push({
                title: name,
                instructions: this.state.value
            });
            $('.saved').text('Saved!, please refresh!').fadeOut('slow');
            this.setState({ collapse: -1 });
        }.bind(this), 1000);
        $('.saved').text('Saving...');
    }

    render() {
        var recipeList = this.props.recipes.map(function (recipeInfo, index) {
            return (
        <div className="recipe-list" key={index}>
        <div className="recipe" id={'recipe-' + index} onClick={() => this.setState({ collapse: index })}>
        <h1 id={"title-" + index}>{recipeInfo.title}</h1>
            <Collapse isOpen={this.state.collapse === index}>
                <Card>
                    <CardBody>
                        <textarea cols="80" rows="4" id="instructions" onChange={(e) => this.handleChange(recipeInfo.title, e)} defaultValue={recipeInfo.instructions}></textarea>
                    </CardBody>
                        <div className="col-sm-12 btns">
                        <Button color="secondary" className='col-sm-4' onClick={() => index = -1}>Cancel</Button>
                        <Button color="success" className='col-sm-4 saved'>Saving...</Button>
                        <Button color="danger" className='col-sm-4' onClick={() => this.props.recipes.splice(index, 1)}>Delete</Button>
                        </div>
                </Card>
            </Collapse>
            </div>
        </div>
            );
        }, this);
        return recipeList;
    }
}