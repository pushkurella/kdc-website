import React from 'react';
import '../styles/Projects.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import MicIcon from '@material-ui/icons/Mic';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

let data = [
    {
        "name": "hobbs",
        "Desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.",
        "Contributors": ["Me", "you", "nome"],
        "Technologies": ["C++", "React", "Bot FrameWork", "SAP AI"]
    },
    {
        "name": "Business continuity",
        "Desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.",
        "Contributors": ["Me", "you", "nome"],
        "Technologies": ["C++", "React", "Bot FrameWork", "SAP AI"]
    },
    {
        "name": "Voice Analytics",
        "Desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.",
        "Contributors": ["Me", "you", "nome"],
        "Technologies": ["C++", "React", "Bot FrameWork", "SAP AI"]
    },
    {
        "name": "Cat",
        "Desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.",
        "Contributors": ["Me", "you", "nome"],
        "Technologies": ["C++", "React", "Bot FrameWork", "SAP AI"]
    },
    {
        "name": "Test",
        "Desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.",
        "Contributors": ["Me", "you", "nome"],
        "Technologies": ["C++", "React", "Bot FrameWork", "SAP AI"]
    },
    {
        "name": "TEst12",
        "Desc": "hello>",
        "Contributors": ["Me", "you", "nome"],
        "Technologies": ["C++", "React", "Bot FrameWork", "SAP AI"]
    },
];

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {projects: data, currentProject: 0};
    }
    componentDidMount() {
    }
    render() {
        var settings = {
          dots: true,
          slidesToShow: 1,
          variableWidth: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 0,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            }
        ],
        };
        return (
        <div className="Project">
            <h1 className="Title"> Projects & Partners</h1>
            <div className="container">
                <Slider {...settings}>
                {this.state.projects.map((value, index) => {
                    return (
                    <button className="item" key={index} onClick={() => this.setState({currentProject: index})}>
                        <div className="text">
                            {value.name}
                        </div>
                        <MicIcon className="icon" fontSize="large" />
                    </button>
                    );
                })}
                </Slider>
            </div>
                <div className="Detail">
                    <h1 className="ProjectName"> {this.state.projects[this.state.currentProject].name} </h1>
                    <div className="Contributors"> {this.state.projects[this.state.currentProject].Contributors.map((value, index) => {
                        return (
                            <div className="Child"> 
                                <div className="icon2">
                                    <AccountCircleIcon className="icon2" fontSize="inherit" />
                                </div> 
                                <div className="Contributor"> {value} </div>
                            </div>
                        );
                })}
                </div>
                    <p className="Details"> {this.state.projects[this.state.currentProject].Desc}</p>
                    <div className="Wrapper">
                <div className="Technologies"> {this.state.projects[this.state.currentProject].Technologies.map((value, index) => {
                        return (
                            <div className="Technology"> {value} </div>
                        );
                })}
                </div>
                </div>
                </div>
        </div> 
        );
      }
    }
    

    // render () {
    //     return (
    //         <div className="Project">
    //             <h1 className="Title"> Projects & Partners</h1>
    //             <div className="Menu">
    //                 <ul className="hs">
    //                     {this.state.projects.map((value, index) => {
    //                         return <button className="item" key={index} onClick={() => this.setState({currentProject: index})}>{value.name}</button>
    //                     })}
    //                 </ul>
    //             </div>
    //             <div></div>
    //             <div className="Detail">
    //                 <h1 className="ProjectName"> {this.state.projects[this.state.currentProject].name} </h1>
    //                 <p className="Details"> {this.state.projects[this.state.currentProject].Desc}</p>
    //             </div>    
    //         </div>
    //     );
    // }

export default Projects;
