import React,{Component} from 'react';
import './HomePage.css';
import NavigationBar from '../NavigationBar/NavigationBar';

class HomePage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentPage : 'Home'
      }
    }

    render() {
      return (
      <NavigationBar currentPage={this.state.currentPage}/>
      )}
  }
  
  export default HomePage;