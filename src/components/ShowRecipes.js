import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class ShowRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: 0
        }
        this.cancel = this.cancel.bind(this);
    }

    cancel() {
        this.setState({
            collapse: -1
        });
        // $(".recipes").show();
    }

    render() {
        var recipeList = this.props.recipes.map(function (recipeInfo, index) {
            return (
                <div className="recipe-list" key={index}>
                    <div className="recipes" id={'recipe-' + index} onClick={() => this.setState({ collapse: index })}>
                        <h1>{recipeInfo.title}</h1>
                        <Collapse isOpen={this.state.collapse === index}>
                            <Card>
                                <CardBody>
                                    {recipeInfo.instructions}
                                </CardBody>
                                <Button color="secondary" id='cancel' onClick={() => this.setState({ collapse: -1 })}>Cancel</Button>
                            </Card>
                        </Collapse>
                    </div>
                </div>
            );
        }, this);
        return recipeList;
    }
}
