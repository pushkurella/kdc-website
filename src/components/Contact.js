import React from 'react';
import '../styles/footer.css';
import { Form, Card, Input } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import '../styles/Contact.css';
import SimpleMap from './SimpleMap';

const inlineStyle = {
    
}
class Contact extends React.Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <div>
                
                    <div class="ui centered card">
                        <div class="content">
                            <div class="header"><h1>How To Find Us</h1></div>
                            <div class="description">
                                <h3>The Incubator runs on a flex hour schedule with the <br></br>
                                core hours being from 10-3, however there are usually people <br></br>
                                in the office every day from 7am until 6pm. <br></br> 
                                We are located less than a 5-minute walk from 7, 8, 11, 22, 200, 205 bus lines.</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="ui two cards">
                        <div className="card">
                            <div class="content">
                                <form class="ui form">
                                    <h3>Contact Us</h3>
                                    <input type="text" id="name" placeholder="Full name" /><br></br>
                                    <input type="text" id="email" placeholder="Email" />
                                    <textarea placeholder="Your message here..." type="text" className="input" rows="3"></textarea>
                                    <button className="ui primary button">Submit</button>
                                </form>

                            </div>
                        </div>
                        <div className="card">
                            <div class="content">
                                <SimpleMap></SimpleMap>
                                
                                    <h4>Address Details</h4>
                                    <span className="spans"><img src="https://img.icons8.com/ultraviolet/40/000000/marker.png"/> </span><p className="spans">61 kent Ave, Kitchener, ON</p><br></br>
                                    <span className="spans" style= {inlineStyle}><img src="https://img.icons8.com/ultraviolet/40/000000/new-post.png"/></span><p className="spans">ron_mooibroek@cooperators.ca</p>
                                
                            </div>
                        </div>
                    </div>
            </div>

        )
    }
}

export default Contact;