import React, { Component } from 'react';
import './NavigationSettings.css';
import SettingsIcon from '@material-ui/icons/Settings';
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { changeColor } from '../../Actions/Action'
import SkyLight from 'react-skylight';
import { colorTheme } from '../commonFunc';

const modalStyle = {
  minHeight: '0px',
  top:'60%',
  left: '60%',
  width : '25%'
}
class NavigationSettings extends Component {

  constructor(props){
    super(props);
  }

  render() {
  return (
    <div style = {{width:'100%'}}>
      <li className="nav-item" onClick={ e=> {  this.untitled.show() }}>
        <a className="nav-link waves-effect" style = {{color:colorTheme(this.props.colorList.defaultColor).navigationFonts}}>
          Theme
          <SettingsIcon style={{ marginTop: '-3px', color: 'white' }} />
        </a>
      </li>
        <SkyLight
          hideOnOverlayClicked
          ref={ref => this.untitled = ref}
          dialogStyles={modalStyle}
        >
        <InputLabel>Choose Theme</InputLabel>
        <NativeSelect
          defaultValue={this.props.colorList.defaultValue}
          style={{ width: '100%' }}
          onChange={e => {this.props.changeColor(e.target.value) }}
        >
          {this.props.colorList.colorList.map(color => {
            return (<option key={color} value={color}>{color}</option>)
          })}
        </NativeSelect>
        </SkyLight>
    </div>
  )
} }

function mapStateToProps(state) {
  return {
    colorList: state.colorList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeColor: changeColor }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationSettings)