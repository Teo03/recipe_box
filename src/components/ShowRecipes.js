import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class ShowRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        }
        this.toggle2 = this.toggle2.bind(this);
      }

      toggle2() {
        this.setState({ collapse: !this.state.collapse });
      }

    render(){  
        var recipeList = this.props.recipes.map(function(recipeInfo, index, e){
            return (
        <div className="recipe-list">
        <h1 id={recipeInfo.title} onClick={(e) => {this.toggle2(e); e.nativeEvent.stopImmediatePropagation()}}>{recipeInfo.title}</h1>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            {recipeInfo.instructions}
            </CardBody>
          </Card>
        </Collapse>
        </div>
            );
        }, this);
        return recipeList;
    }
}