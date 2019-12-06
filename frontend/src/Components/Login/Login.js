import React from 'react';
import './Login.css';
import Modal from '../Modal/Modal';
import {connect} from 'react-redux'
import {colorTheme} from '../commonFunc'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  LoginUser from '../LoginUser/LoginUser';
import  RegisterUser from '../RegisterUser/RegisterUser';

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0,0.5)",
  },
  modal : {
    padding:  "40px",
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function Login(props) {
      const [open, setOpen] = React.useState(false);
      const [defaultTab,setdefaultTab] = React.useState(0);

      const changedefaultTab = (event,value) => {
        setdefaultTab(value);
      };
  
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      }

      return (
          <div>
            <li className="nav-item" onClick={handleOpen}>
              <a className="nav-link waves-effect" style={{}}>
                <i className="fas fa-shopping-cart"></i>
                <span style = {{color:colorTheme(props.colorList.defaultColor).navigationFonts}} className="clearfix d-none d-sm-inline-block"> Login </span>
              </a>
            </li>

        <Modal
					isModalOpen={open}
					closeModal={handleClose}
          style={modalStyle}
				>
        <AppBar position="static">
          <Tabs value={defaultTab} onChange={changedefaultTab} aria-label="simple tabs example" >
            <Tab label="Login" style={{width:'50%'}}/>
            <Tab label="Register" style={{width:'50%'}} />
          </Tabs>
        </AppBar>
          <TabPanel value={defaultTab} index={0}>
            <LoginUser/>
          </TabPanel>
          <TabPanel value={defaultTab} index={1}>
            <RegisterUser/>
          </TabPanel>
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