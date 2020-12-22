import React, { Component } from 'react';

class Product extends Component {
    render() {

      var {product} = this.props;

        return (
            <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
              <div className="view overlay hm-white-slight z-depth-1">
                <img src={this.props.image}
                 className="img-fluid" alt={this.props.name} />
                <a>
                  <div className="mask waves-light waves-effect waves-light" />
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">
                  <strong>
                    <a>{this.props.name }</a>
                  </strong>
                </h4>
                <ul className="rating">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <p className="card-text">
                 {this.props.description}
                </p>
                <div className="card-footer">
                  <span className="left">{this.props.price}$</span>
                  <span className="right">
                    <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        
        );
    }
}

export default Product;