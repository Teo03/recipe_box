import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class ShowRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: -1
        }
    }
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('updated', JSON.stringify(nextProps.recipes))
    }

    render() {
        var recipeList = this.props.recipes.map(function (recipeInfo, index) {
            return (
        <div className="recipe-list" key={index}>
        <div className="recipe" id={'recipe-' + index} onClick={() => this.setState({ collapse: index })}>
        <h1>{recipeInfo.title}</h1>
            <Collapse isOpen={this.state.collapse === index}>
                <Card>
                    <CardBody>
                        {recipeInfo.instructions}
                    </CardBody>
                    <div className="col-lg-6">
                        <div className="col-sm-12">
                        <Button color="secondary" className='col-sm-4' onClick={() => index = -1}>Cancel</Button>
                        <Button color='info' className='col-sm-4' onClick={this.props.edit}>Edit</Button>
                        <Button color="danger" className='col-sm-4' onClick={() => this.props.recipes.splice(index, 1)}>Delete</Button>
                        </div>
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
