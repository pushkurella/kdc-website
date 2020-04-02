import React from 'react';
import Card from '@material-ui/core/Card';
import '../styles/valueProp.css'
import Button from '@material-ui/core/Button';
import history from '../history';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GroupIcon from '@material-ui/icons/Group';
import PublicIcon from '@material-ui/icons/Public';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

class ProblemStarement extends React.Component {

    goProblemStatement = () => {
        history.push("/value-prop");
        window.location.reload();
    }

    render() {

        return <div>
            <Card className='valueProp-card'>
                <div className='valueProp-card-title'>Problem Statement</div>
                <Card className='valueProp-card-cards'>
                    <div className='valueProp-card-cards-text'>
                        <TrendingUpIcon className='valueProp-card-cards-icon' />
                        It can be hard to get a new idea off the ground.  We specialize in getting things started using our established technical templates
                        </div>
                </Card>
                <Card className='valueProp-card-cards'>
                    <div className='valueProp-card-cards-text'>
                        <GroupIcon className='valueProp-card-cards-icon' />
                        Teams are structured to support projects or systems
                    </div>
                </Card>
                <Card className='valueProp-card-cards'>
                    <div className='valueProp-card-cards-text'>
                        <PublicIcon className='valueProp-card-cards-icon' />
                        We are a Development Shared Service available for anyone
                    </div>
                </Card>
                <Card className='valueProp-card-cards'>
                    <div className='valueProp-card-cards-text'>
                        <AccessibilityNewIcon className='valueProp-card-cards-icon' />
                        Our small size and agile culture provide a trial ground for new practices that lead to ongoing improvements
                    </div>
                </Card>
                <Card className='valueProp-card-cards'>
                    <div className='valueProp-card-cards-text'>
                        <ScheduleIcon className='valueProp-card-cards-icon' />
                        The mix of full-time resources and students make us far more economical then contracting external
                    </div>
                </Card>
                <div className='valueProp-card-btn'>
                    <Button onClick={this.goProblemStatement}> <ChevronLeftIcon/> Value Proposition </Button>
                </div>
            </Card>
        </div>
    }

}

export default ProblemStarement