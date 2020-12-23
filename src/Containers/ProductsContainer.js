import React, { Component } from 'react';
import Product from './../Components/Product';
import {connect} from 'react-redux';
import Products from '../Components/Products';
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessenger} from './../Actions/Index';
class ProductsContainer extends Component {

  

    render() {
      var {products} =this.props;
        return (
         <Products >
             {this.showProducts(products)}
         </Products>
        );
    }
    showProducts (products){
        var result = null;
        var {onAddToCart, onChangeMessenger} = this.props;
        if(products.length >0){
          result = products.map((product,index) =>{
            return <Product key ={index} product={product} onChangeMessenger = {onChangeMessenger}  onAddToCart={onAddToCart} />
        });
        }
        return result;
      }
    }
      ProductsContainer.propTypes = {
          products : PropTypes.arrayOf(
              PropTypes.shape({
                  id : PropTypes.number.isRequired,
                  name : PropTypes.string.isRequired,
                  image : PropTypes.string.isRequired,
                  description : PropTypes.string.isRequired,
                  price : PropTypes.number.isRequired,
                  inventory : PropTypes.number.isRequired,
                  rating : PropTypes.number.isRequired
              })
          ).isRequired,
          onChangeMessenger : PropTypes.func.isRequired
      }



const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1))
    },
    onChangeMessenger : (messenger) =>{
      dispatch(actChangeMessenger(messenger));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
