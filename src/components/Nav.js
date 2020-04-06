import React from 'react';
import Button from '@material-ui/core/Button';
import '../styles/nav.css';
import history from '../history';
import logo from '../assets/Cooperators-logo.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bussinessDD: false,
            teamDD: false,
            element: null,
        }
    }

    linkTo = (str) => {
        history.push(str);
        window.location.reload();
    }

    handleClose = (stateName) => {
        let obj = {};
        obj[stateName] = false;
        this.setState(obj);
    }

    open = (stateName) => {
        let obj = {};
        obj[stateName] = true;
        this.setState(obj);
    }

    handleClick = (event) => {
        this.setState({ element: event.currentTarget });
    }


    render() {
        return <div>
            <div className='nav-bar'>
                <Button className='nav-bar-button' onClick={() => { this.linkTo("/about") }}>about</Button>
                <Button className='nav-bar-button' onClick={() => { this.linkTo("/projects") }}>projects</Button>
                <Button className='nav-bar-button' onClick={(e) => { this.open("teamDD"); this.handleClick(e); }}>team</Button>
                <Menu className='nav-bar-team-DD' anchorEl={this.state.element} keepMounted open={this.state.teamDD} onClose={() => { this.handleClose("teamDD") }}>
                    <MenuItem onClick={() => { this.handleClose("teamDD"); this.linkTo("/teams"); }}>Our Team</MenuItem>
                    <MenuItem onClick={() => { this.handleClose("teamDD"); this.linkTo("/alumni"); }}>Alumni Home</MenuItem>
                    <MenuItem onClick={() => { this.handleClose("teamDD"); this.linkTo("/leave-your-mark"); }}>Leave Your Mark</MenuItem>
                </Menu>
                <img src={logo} alt="logo" className='nav-bar-logo' onClick={() => { this.linkTo("/") }}></img>
                <Button className='nav-bar-button' onClick={() => { this.linkTo("/events") }}>events</Button>
                <Button className='nav-bar-button' onClick={(e) => { this.open("bussinessDD"); this.handleClick(e); }}>business</Button>
                <Menu className='nav-bar-bussiness-DD' anchorEl={this.state.element} keepMounted open={this.state.bussinessDD} onClose={() => { this.handleClose("bussinessDD") }}>
                    <MenuItem onClick={() => { this.handleClose("bussinessDD"); this.linkTo("/value-prop"); }}>Value Proposition</MenuItem>
                    <MenuItem onClick={() => { this.handleClose("bussinessDD"); this.linkTo("/problem-statement"); }}>Problem Statement</MenuItem>
                </Menu>
                <Button className='nav-bar-button' onClick={() => { this.linkTo("/contact") }}>contact</Button>
            </div>
        </div>
    }
}

export default Nav;