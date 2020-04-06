import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import temp from '../images/Temp.png'
import '../styles/Teams.css'

//Temporary data
const info = [{
  img:temp,
  name: 'Ron Moeibrook',
  role: 'Senior Manager'
},
{
  img:temp,
  name: 'Jason Murray',
  role: 'Senior Systems Development Consultant'
},
{
  img:temp,
  name: 'Brenton Fairless',
  role: 'Tooling and Practice Team'
},
{
  img:temp,
  name: 'Amy Barrett',
  role: 'Team Lead'
},
{
  img:temp,
  name: 'Danielle kacheff',
  role: 'Team Lead'
},
{
  img:temp,
  name: 'Vikas Vattikonda',
  role: 'Lead Developer'
},
{
  img:temp,
  name: 'Pushpak Kurella',
  role: 'Lead Developer'
},
{
  img:temp,
  name: 'Pallishree Pallavi',
  role: 'Team Lead'
}]


  class Teams extends React.Component{

    constructor(props){//first thing that gets called
      super(props);

      this.state = {managers: info.slice(0,2), leads: info.slice(2,9)};
    }
    render(){
      return (
        <div>
          <div className="center">
          <h1 >Teams</h1>
          <p aligntext="center">The Kitchener Development Centre has a variety 
            of team members who all work toward one central
             goal of providing the company with the highest 
             quality products and providing each other with 
             the greatest work experience possible.</p>
          <button className="button" >Meet our Alumni</button>
          </div>
             <Grid columns={2} centered className="managers">
               <Grid.Row>
               {this.state.managers.map((value, index) => {
                 return (<Grid.Column key = {index} className="Columns">  
                   <div className = 'center-image'> 
                   <Image ui centered image src = {value.img} alt="Not displayed"/>
                     </div> 
                   <div className="center employee-name">{value.name}</div>
                   <div className="center employee-role">{value.role}</div>
                   </Grid.Column>);
               })}
               </Grid.Row>
               </Grid> 


              <Grid columns={3}  className="leads">
              {this.state.leads.map((value, index) => {
                 return (<Grid.Column key = {index} className="Columns">
                   <div className = 'center-image' ><Image ui centered image src = {value.img}/></div> 
                   <div className="employee-name">{value.name}</div>
                   <div className="employee-role">{value.role}</div>
                   </Grid.Column>);
               })}
                
              </Grid>
        </div>
      );
    }
  }
  
  export default Teams;