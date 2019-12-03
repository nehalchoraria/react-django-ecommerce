import React,{Component} from 'react';
import './HomePage.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import {color as black} from "../../Colors/black";
import {color as red} from "../../Colors/red";
import {color as defaul} from "../../Colors/defaul";

class HomePage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        defaultColor : 'red',
        currentPage : 'Home'
      }
    }

    colorTheme() {
      if(this.state.defaultColor == 'red') 
        return red
      else if(this.state.defaultColor == 'black')
        return black
      else
        return defaul
    }
 
    render() {
      return (
      <NavigationBar currentPage={this.state.currentPage} color={this.colorTheme()}/>
      )}
  }

  export default HomePage;