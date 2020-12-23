import React, { Component } from 'react';
import Cart from './Cart';


class Carts extends Component {
    render() {
      var {children} =this.props;
        return (
            <section className="section">
            <div className="table-responsive">
              <table className="table product-table">
                <thead>
                  <tr>
                    <th />
                    <th>Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng Cộng</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                 {children}
    
               
                </tbody>
              </table>
            </div>
          </section>
      
        );
    }
}

export default Carts;