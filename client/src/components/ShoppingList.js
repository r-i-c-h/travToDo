import React , {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  
  componentDidMount(){
    this.props.getItems();
  }

  
  render() {
    const { items } = this.props.item;
    // destructured from this.props.item.items
    // where item is the entire state{}
    // item.items is the arr[] inside of the state{}
    
    return (
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

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// take items state and map to props | Turn a state element into a Prop element
// call it item because that is the name of the root reducer
// See reducers/index.js
const mapStateToProps = (state) => ({ item: state.item })

export default connect( mapStateToProps, { getItems } )(ShoppingList);
