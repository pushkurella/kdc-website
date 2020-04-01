import React from 'react';
import '../styles/footer.css';
import { Form, Card, Input } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import '../styles/Contact.css';
class Contact extends React.Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <div>
                <h1> How To Find Us</h1>
                <p>The Incubator runs on a flex hour schedule with the core hours being from 10-3, however there are usually people in the office every day from 7am until 6pm. We are located less than a 5-minute walk from 7, 8, 11, 22, 200, 205 bus lines.</p>
                <Card>
                    <Card.Content>
                        <form class="ui form">
                        <h3>Contact Us</h3>
                        <input type="text" id="name"  placeholder="Full name" /><br></br>
                        <input type="text" id="email" placeholder="Email" />
                        <textarea placeholder="Your message here..." type="text" className="input" rows="3"></textarea>
                        <button className="ui primary button">Submit</button>
                        </form>

                    </Card.Content>
                </Card>
            </div>

        )
    }
}

export default Contact;