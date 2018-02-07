import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class ShowRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        }
        this.toggle2 = this.toggle2.bind(this);
        this.cancel = this.cancel.bind(this);
      }

    toggle2(e) {
        var id = e.currentTarget.id;
        id = id.substr(id.length - 1);
        var recipe = $('#recipe-' + id);
        $('.recipe-list').not(recipe).hide();
        
        this.setState({
                collapse: !this.state.collapse
            });
      }

      cancel(){
        this.setState({
            collapse: false
        });
        $(".recipes").show();
      }

    render(){  
        var recipeList = this.props.recipes.map(function(recipeInfo, index){
            return (
        <div className="recipe-list">
        <div className="recipes" id={'recipe-' + index} onClick={this.toggle2}>
        <h1>{recipeInfo.title}</h1>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            {recipeInfo.instructions}
            </CardBody>
            <Button color="secondary" id='cancel' onClick={this.cancel}>Cancel</Button>
          </Card>
        </Collapse>
        </div>
        </div>
            );
        }, this);
        return recipeList;
    }
}
