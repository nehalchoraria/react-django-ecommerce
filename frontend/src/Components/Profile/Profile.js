import React,{Component} from 'react';
import './Profile.css';

class Profile extends Component {

    constructor(props) {
      super(props)
      this.state = {
      }
    }

    render() {
      return <li className="nav-item">
      <a className="nav-link border border-light rounded waves-effect">
        Profile 
      </a>
    </li>
    }
  }

  export default Profile;