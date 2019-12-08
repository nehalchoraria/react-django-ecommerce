import React,{Component} from 'react';
import './NavigationBar.css';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NavigationSettings from '../NavigationSettings/NavigationSettings';
import {connect} from 'react-redux'
import {colorTheme} from '../commonFunc'
import { slide as Menu } from 'react-burger-menu'

class NavigationBar extends Component {

    constructor(props) {
      super(props)
      this.state = {
        allTabs : ['Home','About Us'],
        activeTab : this.props.currentPage,
        colorStyle : colorTheme(this.props.colorList.defaultColor),
        loggedIn : false,
      }
    }
        
    renderTabs() {
      let tabs = [] 
      this.state.allTabs.forEach( tabName => { 
        tabs.push(
        <li key= {tabName} className={this.state.activeTab === tabName ? "nav-item active" : "nav-item" }>
            <a style = {{ color : colorTheme(this.props.colorList.defaultColor).navigationFonts }} className="nav-link waves-effect" onClick = { e=> { this.setState({activeTab:tabName}) }}> {tabName}
            </a>
        </li>)
      });
      return tabs
    }

    render() {

      let navColor = {
        background : colorTheme(this.props.colorList.defaultColor).navigationBar,
      }  

      return (
      <nav style = {navColor} className="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar " >
      <div className="container">
        <a className="navbar-brand waves-effect">
          <strong className="white-text">E-Commerce</strong>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          {this.renderTabs()}
          </ul>
          {this.state.loggedIn ? 
          <ul className="navbar-nav nav-flex-icons">
          <Cart/> <Profile/>
          </ul>
          :
          <ul className="navbar-nav nav-flex-icons">
          <Login style = {this.state.colorStyle} /> 
          <NavigationSettings style = {{marginTop:'8px',color:this.state.colorStyle.navigationFonts}} />
          </ul>
          }  
        </div>
      </div>
    </nav>)
    }
  }

  function mapStateToProps(state) {
    return {
      colorList : state.colorList
    }
  }


  export default connect(mapStateToProps)(NavigationBar);