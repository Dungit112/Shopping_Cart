import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../Components/Cart';
import Carts from './../Components/Carts';
import CartResult from './../Components/CartResult';
import * as Messenger from './../Constants/Messenger';
import {actChangeMessenger, actDeleteProductInCart, actUpdateProductInCart} from './../Actions/Index';

class CartContainer extends Component {

  showTotalAmount = (cart) =>{
    var result  =null;
    if(cart.length >0){
      result = <CartResult cart={cart} />
    }
    return result;
  }

    render() {
      var {cart} =this.props;
      console.log(cart);
        return (
          <div>
               <Carts>
          {this.showCartItem(cart)}
          {this.showTotalAmount(cart)}
        </Carts>
          </div>
     
        );
    }
    showCartItem = (cart) =>{
      var {onDeleteProductInCart , onChangeMessenger,onUpdateProductInCart} = this.props;
      var result = <tr>
        <td>
          {Messenger.MSG_CART_EMPTY};
        </td>

      </tr>
      if(cart.length > 0){
        result = cart.map((item,index) =>{
          return (
            <Cart
               key = {index}
                item = {item}
                index = {index}
                onDeleteProductInCart = {onDeleteProductInCart}
                onChangeMessenger = {onChangeMessenger}
                onUpdateProductInCart={onUpdateProductInCart}
            />
          )
        })
      }
      return result;

    }
  }
  
       CartContainer.propTypes = {
          cart : PropTypes.arrayOf(PropTypes.shape({
            product :PropTypes.shape({
              id : PropTypes.number.isRequired,
              name : PropTypes.string.isRequired,
              image : PropTypes.string.isRequired,
              description : PropTypes.string.isRequired,
              price : PropTypes.number.isRequired,
              inventory : PropTypes.number.isRequired,
              rating : PropTypes.number.isRequired
          }).isRequired,
          quantity : PropTypes.number.isRequired
          })).isRequired
              
         
      }

    const mapStateToProps = (state, ownProps) => {
      return {
        cart: state.cart
      }
    }
    const mapDispatchToProps = (dispatch, ownProps) => {
      return {
        onDeleteProductInCart: (product) => {
          dispatch(actDeleteProductInCart(product));
        },
        onChangeMessenger : (messenger) =>{
          dispatch(actChangeMessenger(messenger));
        },
        onUpdateProductInCart : (product,quantity) =>{
          dispatch(actUpdateProductInCart(product,quantity));
        }
      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
