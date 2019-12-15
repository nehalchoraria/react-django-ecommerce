import React,{Component} from 'react';
import './HomePage.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import {Carosel} from '../Carosel/Carosel.js'
import Product from '../Products/Product';
import ProductItem from '../ProductItem/ProductItem';

class HomePage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentPage : 'Home'
      }
    }

    render() {
      return (
        <div>
           <NavigationBar currentPage={this.state.currentPage}/>
           <Carosel/>
           <Product/>
        </div>
      )}
  }
  
  export default HomePage;