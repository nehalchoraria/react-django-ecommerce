import React,{Component} from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '../Modal/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; 

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0,0.5)"
  }
};

export default function Login(props) {
      const classes = useStyles();
      const [open, setOpen,isShowing] = React.useState(false);

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
                <span style = {{color:props.style.navigationFonts}} className="clearfix d-none d-sm-inline-block"> Login </span>
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
