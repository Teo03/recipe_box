import React from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter, Input, Collapse, Button, CardBody, Card } from 'reactstrap';

export class ShowRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: -1,
            show: false
        }
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('recipes', JSON.stringify(nextProps.recipes));
    }

    toggle(){
        this.setState({
            show: !this.state.show
        });
    }
    edit(name, inst, del){
        this.props.recipes.push({title: name, instructions: inst});
        this.props.recipes.splice(del, 1);
        this.props.update();
    }

    render() {
        var recipeList = this.props.recipes.map(function (recipeInfo, index) {
            return (
        <div className="recipe-list" key={index}>
        <div className="recipe" id={'recipe-' + index} onClick={() => this.setState({ collapse: index })}>
        <h1 id="title">{recipeInfo.title}</h1>
            <Collapse isOpen={this.state.collapse === index}>
                <Card>
                    <CardBody>
                        <textarea cols="80" rows="4" id="instructions" defaultValue={recipeInfo.instructions}></textarea>
                    </CardBody>
                        <div className="col-sm-12 btns">
                        <Button color="secondary" className='col-sm-4' onClick={() => index = -1}>Cancel</Button>
                        <Button color='success' className='col-sm-4' id="save" onClick={() => this.edit($('#title').text(), $('#instructions').val(), index)}>Save</Button>
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