import React from 'react';
import './Login.css';
import Modal from '../Modal/Modal';
import {connect} from 'react-redux'
import {colorTheme} from '../commonFunc'


const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0,0.5)"
  }
};

function Login(props) {
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
                <span style = {{color:colorTheme(props.colorList.defaultColor).navigationFonts}} className="clearfix d-none d-sm-inline-block"> Login </span>
              </a>
            </li>

        <Modal
					isModalOpen={open}
					closeModal={handleClose}
					style={modalStyle}
				>
					<img
						width="100%"
						style={{ borderRadius: 3 }}
						src="https://source.unsplash.com/random"
						alt="unsplash"
					/>

					<button
						style={{
							margin: 0,
							width: "auto",
							marginTop: 10
						}}
						onClick={handleClose}
					>
						Close
					</button>
				</Modal>        
       </div>
      )
  }

  function mapStateToProps(state) {
    return {
      colorList : state.colorList
    }
  }

export default connect(mapStateToProps)(Login);