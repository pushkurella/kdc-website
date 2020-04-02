import React from 'react';
import Card from '@material-ui/core/Card';
import '../styles/valueProp.css'
import Button from '@material-ui/core/Button';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import SchoolIcon from '@material-ui/icons/School';
import MapIcon from '@material-ui/icons/Map';
import history from '../history';

class ValueProp extends React.Component {

    constructor(props) {
        super(props);
    }

    goProblemStatement = () =>{
        history.push("/problem-statement");
        window.location.reload();
    }

    render() {

        return <div>
            <Card className='valueProp-card'>
                <div className='valueProp-card-title'>Value Proposition</div>
                <Card className='valueProp-card-cards'>
                    <div className='valueProp-card-cards-text'>
                        <LockOpenIcon className='valueProp-card-cards-icon' />
                        Unlock organizational potential by solving business challenges at a reasonable cost
                    </div>
                </Card>
                <Card className='valueProp-card-cards'>
                    <div className='valueProp-card-cards-text'>
                        <EmojiObjectsIcon className='valueProp-card-cards-icon' />
                        Give hope to big ideas that need a place to grow
                    </div>
                </Card>
                <Card className='valueProp-card-cards'>
                    <div className='valueProp-card-cards-text'>
                        <AccountBalanceIcon className='valueProp-card-cards-icon' />
                        Establish a centre fully committed to development excellence
                    </div>
                </Card>
                <Card className='valueProp-card-cards'>
                    <div className='valueProp-card-cards-text'>
                        <ImportantDevicesIcon className='valueProp-card-cards-icon' />
                        Proving ground for new techniques
                    </div>
                </Card>
                <Card className='valueProp-card-cards'>
                    <div className='valueProp-card-cards-text'>
                        <SchoolIcon className='valueProp-card-cards-icon' />
                        Tap into outstanding talent from local schools and build a talent pipeline
                    </div>
                </Card>
                <Card className='valueProp-card-cards'>
                    <div className='valueProp-card-cards-text'>
                        <MapIcon className='valueProp-card-cards-icon' />
                        Provide an alternative to areas blocked by the standard process
                    </div>
                </Card>
                <div className='valueProp-card-btn'>
                    <Button onClick={this.goProblemStatement} > Problem statement > </Button>
                </div>
            </Card>
        </div>
    }
}

export default ValueProp;