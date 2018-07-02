import uuid from 'uuid';
import React , {Component} from 'react';
import { 
  Button,
  Modal, ModalHeader, ModalBody,
  Form, FormGroup, Label, Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions'

class ItemModal extends Component {
  state = {
    modal: false,
    name: '' 
  }

  toggle = () => this.setState( prev => ({modal: !prev.modal}) );

  onChange = (e) => { 
    const name = e.target.value; 
    this.setState( prev => ({ name }) );
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem( this.state.name );
    this.toggle();
  }
  
  render(){
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={ this.toggle }
        >Add Item</Button>
      
        <Modal 
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader
            toggle={this.toggle}>
            Add New Item
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item:</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="New Item To Add"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  block
                  style={{marginBottom: '2rem'}}
                >ADD Item</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = state => ({ item: state.item });

export default connect(mapStateToProps, { addItem })(ItemModal);