import React, { Component } from 'react';
import * as Messenger from './../Constants/Messenger';
class Cart extends Component {


  
onUpdateQuantity = (product,quantity)=>{
  var { onChangeMessenger} =this.props;
  if(quantity > 0 ){
   
    this.props.onUpdateProductInCart(product,quantity);
    onChangeMessenger(Messenger.MSG_UPDATE_CART_SUCCESS);
  }
}

  showSubTotal = (price,quantity) =>{
    return price*quantity;
  }

  onDelete = (product) =>{
    var {onDeleteProductInCart, onChangeMessenger} =this.props;
    onDeleteProductInCart(product);
    onChangeMessenger(Messenger.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }

  
    render() {
      var {item} = this.props;
      var {quantity} = item;
      console.log(quantity);
    
        return (
        
            <tr>
            <th scope="row">
              <img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
              <h5>
                <strong>{item.product.name}</strong>
              </h5>
            </td>
            <td>{item.product.price}</td>
            <td className="center-on-small-only">
              <span className="qty">{quantity} </span>
              <div className="btn-group radio-group" data-toggle="buttons">
                <label  onClick ={() =>this.onUpdateQuantity(item.product, item.quantity-1)} className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light">
                  <a>—</a>
                </label>
                <label onClick ={() =>this.onUpdateQuantity(item.product, item.quantity+1)} className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light">
                  <a>+</a>
                </label>
              </div>
            </td>
            <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
            <td>
              <button 
              onClick = {() =>this.onDelete(item.product)}
              type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" >
                X
              </button>
            </td>
          </tr>
      
        );
     
    }
    
}


export default Cart;