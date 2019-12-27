import React,{Component} from 'react';
import './NavigationBar.css';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NavigationSettings from '../NavigationSettings/NavigationSettings';
import {connect} from 'react-redux'
import {colorTheme} from '../commonFunc'
import { slide as Menu } from 'react-burger-menu'
import { bindActionCreators } from 'redux';
import {updateTab} from "../../Actions/Action"

class NavigationBar extends Component {

    constructor(props) {
      super(props)
      this.state = {
        allTabs : ['Home','Products','AboutUs'],
        colorStyle : colorTheme(this.props.colorList.defaultColor),
        loggedIn : false,
      }
    }
        
    renderTabs() {
      let tabs = [] 
      this.state.allTabs.forEach( tabName => { 
        tabs.push(
        <li key= {tabName} className={this.props.tab === tabName ? "nav-item active" : "nav-item" }>
            <a style = {{ color : colorTheme(this.props.colorList.defaultColor).navigationFonts }} className="nav-link waves-effect" onClick = { e=> { console.log(tabName);this.props.updateTab(tabName) }}> {tabName}
            </a>
        </li>)
      });
      return tabs
    }

    render() {
      console.log(this.props)
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
      colorList : state.colorList,
      tab : state.mainData.activeTab
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      updateTab : updateTab
    }, dispatch)
  }


  export default connect(mapStateToProps,mapDispatchToProps)(NavigationBar);