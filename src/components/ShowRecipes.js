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

    handleChange(){
        $('#save').show();
    }

    toggle(){
        this.setState({
            show: !this.state.show
        });
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
                        <textarea readOnly={true} cols="80" rows="4" onChange={this.handleChange} id="instructions" defaultValue={recipeInfo.instructions}></textarea>
                    </CardBody>
                        <div className="col-sm-12 btns">
                        <Button color="secondary" className='col-sm-4' onClick={() => index = -1}>Cancel</Button>
                        <Button color='info' className='col-sm-4' id="save" onClick={() => this.setState({show: true})}>Edit</Button>
                        <Button color="danger" className='col-sm-4' onClick={() => this.props.recipes.splice(index, 1)}>Delete</Button>
                        </div>
                </Card>
            </Collapse>
            </div>
            <Modal isOpen={this.state.show} toggle={this.toggle}>
                <ModalHeader>Add a new recipe</ModalHeader>
                <ModalBody>
                    <h3>Name</h3>
                    <Input className="recipe-name" defaultValue={recipeInfo.title}/>
                    <h3 className="instructions">Instructions</h3>
                    <textarea cols="30" rows="7" className="input-2" defaultValue={recipeInfo.instructions}></textarea>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Add</Button>
                    <Button color="secondary" onClick={() => this.setState({ show: false })}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
            );
        }, this);
        return recipeList;
    }
}