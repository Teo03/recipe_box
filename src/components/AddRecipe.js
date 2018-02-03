import React from 'react';
import Modal from 'react-bootstrap-modal';

export class AddRecipe extends React.Component {
    constructor(){
        super();
        this.state = {
            show: false
        }
        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
    }
    showModal(){
        this.setState({
            show: true
        });
    }
    closeModal(){
        this.setState({
            show: false
        });
    } 
       render(){
        return (
        <div>
           <button onClick={this.showModal}>Add Recipe</button>
           
           <Modal show={this.state.show} onHide={this.closeModal}>
           <Modal.Header>
               <Modal.Title>Add Recipe:</Modal.Title>
           </Modal.Header>
           <Modal.Body>
               <h2>Name:</h2>
             <input />
                <hr />
           <h3>Instructions</h3>
             <textarea></textarea>
           </Modal.Body>
           <Modal.Footer></Modal.Footer>
       </Modal>
        </div>
        );
    }
}