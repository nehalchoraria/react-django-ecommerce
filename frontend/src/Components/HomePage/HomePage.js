import React,{Component} from 'react';
import './HomePage.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import {Carosel} from '../Carosel/Carosel.js'
import Product from '../Products/Product';
import ProductItem from '../ProductItem/ProductItem';
import {connect} from 'react-redux'

const productStyle = {
  marginTop:'5rem'
}
class HomePage extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }

    render() {
      return (
        <div>
           <NavigationBar/>
           {this.props.tab == 'Home' ? 
           <div><Carosel/><Product/></div> :
           <Product style={productStyle}/> }
        </div>
      )}
  }
  
  function mapStateToProps(state) {
    return {
      tab : state.mainData.activeTab
    }
  }

  export default connect(mapStateToProps)(HomePage);