import React,{Component} from 'react';
import './Cart.css';


class Cart extends Component {

    constructor(props) {
      super(props)
      this.state = {
      }
    }

    render() {
        return <li className="nav-item">
        <h7 className="nav-link waves-effect">
          <span className="badge red z-depth-1 mr-1"> 1 </span>
          <i className="fas fa-shopping-cart"></i>
          <span className="clearfix d-none d-sm-inline-block"> Cart </span>
        </h7>
      </li>
    }


}

export default Cart;
    