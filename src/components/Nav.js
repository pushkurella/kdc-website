import React from 'react';
import Button from '@material-ui/core/Button';
import '../styles/nav.css';
import history from '../history';
import logo from '../assets/Cooperators-logo.png';
class Nav extends React.Component {

    linkTo = (str) => {
        history.push(str);
        window.location.reload();
    }

    render() {
        return <div>
            <div className='nav-bar'>
                <Button className='nav-bar-button' onClick={()=>{this.linkTo("/about")}}>about</Button>
                <Button className='nav-bar-button' onClick={()=>{this.linkTo("/projects")}}>projects</Button>
                <Button className='nav-bar-button' onClick={()=>{this.linkTo("/team")}}>team</Button>
                <img src={logo} alt="logo" height="80px" style={{marginLeft:'30px',marginRight:'20px', marginTop:'-5px'}} onClick={()=>{this.linkTo("/")}}></img>
                <Button className='nav-bar-button' onClick={()=>{this.linkTo("/events")}}>events</Button>
                <Button className='nav-bar-button' onClick={()=>{this.linkTo("/business")}}>business</Button>
                <Button className='nav-bar-button' onClick={()=>{this.linkTo("/contact")}}>contact</Button>
            </div>
        </div>
    }
}

export default Nav;