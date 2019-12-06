import React from 'react';
import './NavigationSettings.css';
import Modal from '../Modal/Modal';
import { modalStyle } from '../Modal/ModalStyles'
import SettingsIcon from '@material-ui/icons/Settings';
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { changeColor } from '../../Actions/colorAction'

function NavigationSettings(props) {
  console.log(props)
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <li className="nav-item" onClick={handleOpen}>
        <a className="nav-link waves-effect">
          <i className="fas fa-shopping-cart"></i>
          <SettingsIcon style={{ marginTop: '-3px', color: 'white' }} />
        </a>
      </li>
      <Modal
        isModalOpen={open}
        closeModal={handleClose}
        style={modalStyle}
      >
        <InputLabel>Choose Theme</InputLabel>
        <NativeSelect
          defaultValue={props.colorList.defaultValue}
          style={{ width: '100%' }}
          onChange={e => { props.changeColor(e.target.value) }}
        >
          {props.colorList.colorList.map(color => {
            return (<option key={color} value={color}>{color}</option>)
          })}
        </NativeSelect>
        <button
          style={{
            margin: 0,
            width: "auto",
            marginTop: 10
          }}
          onClick={handleClose}
        > Close </button>
      </Modal>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    colorList: state.colorList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeColor: changeColor }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationSettings)