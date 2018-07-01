import React , {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';


class ShoppingList extends Component {
  state = {
    items: [
      {id: uuid(), name: "Uno"},
      {id: uuid(), name: "Dos"},
      {id: uuid(), name: "Trays"},
      {id: uuid(), name: "Comqwattro"}
    ]
  }

  render() {
    const { items } = this.state;
    return(
      <div>
        <Container>
          <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={()=> {
              const name = prompt('What is the Item?');
              if (name) {
                this.setState( prev => ({
                  items: [...prev.items, { id:uuid(), name }]
                }));
              }
            }}
          >Add Item</Button>
          <ListGroup>
            <TransitionGroup className="shopping-list">
              { items.map(({id,name}) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={ ()=>{ this.setState( prev => ({ items: prev.items.filter( x => x.id !== id) }) ) }}
                    >&times;</Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      </div>
    )
  }
}


export default ShoppingList;
