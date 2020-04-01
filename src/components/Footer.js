import React from 'react';
import '../styles/footer.css';
import logo from '../assets/Cooperators-logo.png';
import Button from '@material-ui/core/Button';

class Footer extends React.Component {

    render() {
        return <div>
            <div className='footer'>
                <div className='footer-part1'>
                    <img className='footer-part1-logo' src={logo} alt="logo" width="80%"></img>
                    <div className='footer-part1-text'>© Untitled Inc. 2016</div>
                </div>
                <div className='footer-part2'>
                    <div className='footer-part2-left'>
                        <div className="footer-part2-title" >Navigate</div>
                        <div className="footer-part2-link" ><a href="/about">About</a></div>
                        <div className="footer-part2-link"><a href="/team">Meet The Team</a></div>
                        <div className="footer-part2-link"><a href="/projects">Projects</a></div>
                        <div className="footer-part2-link"><a href="/alumni">Alumni</a></div>
                    </div>
                    <div className='footer-part2-right'>
                        <div className="footer-part2-title">More Links</div>
                        <div className="footer-part2-link"><a href="/">Main Site</a></div>
                        <div className="footer-part2-link"><a href="/contact">Contact</a></div>
                    </div>
                </div>
                <div className='footer-part3'>
                    <Button variant="outlined" style={{color:"#3f84c0", borderColor:"#3f84c0", fontSize:"large", marginLeft:"20%", marginTop:"10%"}}>Back To Top</Button>
                </div>
            </div>
        </div>
    }
}

export default Footer;