import React from 'react';
import "semantic-ui-css/semantic.min.css";
import "./../styles/Quotes.css";
import { Fab, Hidden } from '@material-ui/core';
import { InputLabel, Input, MenuItem, Button, Select, TextField, } from '@material-ui/core';


import testquotes from './../assets/testdata/sample-quotes';

class Quotes extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            quotes: [],  //The array of quote objects 
            colors: [],  //The array of randomized colors 
            angles: [],  //the array of randomized angles
            loaded: false,  //whether or not the page has loaded
            newName: '',
            newQuote: '',
            newTerm: '',
            nameErr: false,
            quoteErr: false,
            termErr: false
        };


    }

    async componentDidMount() {
        //axios call to CMS
        await this.setState({ quotes: testquotes, loaded: true });
        const { quotes } = this.state;
        var angles = [];
        var colors = [];
        for (let i in quotes) {  //initialize array of colors and angles for the quotes
            angles.push({
                transform: `rotate(${Math.ceil((Math.random() * 40) - 20)}deg)`,
                marginTop: `${Math.ceil((Math.random() * 13) + 17)}%`,
                marginLeft: `${Math.ceil((Math.random() * 12))}%`
            });
            colors.push(`sticky note icon post col${Math.ceil(Math.random() * 4)}`);
        }

        this.setState({ colors, angles })
    }

    handleName = (e) => {
        this.setState({ newName: e.target.value });
    }
    handleQuote = (e) => {
        this.setState({ newQuote: e.target.value });
    }
    handleTerm = (e) => {
        this.setState({ newTerm: e.target.value });
    }

    addQuote = () => {  //Check whether the fields are filled in, and then push onto quote array, and add a color and angle for it 
        this.setState({ nameErr: false, termErr: false, quoteErr: false });
        const { newName, newQuote, newTerm } = this.state;
        if (newName === '') { this.setState({ nameErr: true }); }
        if (newQuote === '') { this.setState({ quoteErr: true }); }
        if (newTerm === '') { this.setState({ termErr: true }); }
        const { nameErr, quoteErr, termErr } = this.state;
        if (!nameErr && !quoteErr && !termErr) {
            //some sort of submit logic to CMS

            this.setState({
                quotes: [...this.state.quotes, { name: newName, quote: newQuote, term: newTerm }],
                angles: [...this.state.angles, {
                    transform: `rotate(${Math.ceil((Math.random() * 40) - 20)}deg)`,
                    marginTop: `${Math.ceil((Math.random() * 13) + 17)}%`,
                    marginLeft: `${Math.ceil((Math.random() * 12))}%`
                }]
                ,
                colors: [...this.state.colors, `sticky note icon post col${Math.ceil(Math.random() * 4)}`]
            })
            this.setState({ newName: '', newQuote: '', newTerm: '' })
        }

    }

    render() {
        var { quotes, colors, angles, newQuote, newName, newTerm, termErr, nameErr, quoteErr } = this.state;
        var CHARACTER_LIMIT = 100;
        return (
            <div className='leave-your-mark'>
                <h2 className="wall-header">Leave Your Mark</h2>
                <div className="ui divider" />
                <div className="quote-wall" style={{ height: `${37 * (quotes.length / 4 + 1)}vh` }}>


                    {quotes.map((quote, index) =>
                        <div className="post-div">
                            <i className={colors[index]} style={angles[index]}>
                                <p className="quote text" >"{quote.quote}"</p>
                                <p className="quote user"> -{quote.name}</p>
                                <p className="quote term">{quote.term}</p>
                            </i>
                        </div>)
                    }



                </div >

                <div className="add-quote">
                    <h3><i className="ui plus square icon outline" /> Add a Quote!</h3>
                    <TextField
                        id="standard-flexible"
                        label={nameErr ? (<div>Name   <span className="name warn">
                            &emsp; <i className="exclamation circle icon" /> Enter your name!
                        </span></div>) : 'Name'}
                        placeholder="Anonymous"
                        className="quote-input"
                        onChange={this.handleName}
                        inputProps={{
                            maxLength: 40
                        }}
                        value={newName}

                    />
                    <div className='post-div before' >
                        <i className="sticky note icon post col4">
                            <p className="quote text" >"{newQuote}"</p>
                            <p className="quote user">-{newName}</p>
                            <p className="quote term">{newTerm} </p>
                        </i>
                    </div>
                    <TextField
                        id="standard-multiline-static"
                        label={quoteErr ? (<div>Quote   <span className="quote warn">
                            &emsp; <i className="exclamation circle icon" /> Enter your quote!
                    </span></div>) : 'Quote'}
                        multiline
                        placeholder="Share your KDC experience"
                        rows="3"
                        className="quote-input"
                        onChange={this.handleQuote}
                        inputProps={{
                            maxLength: CHARACTER_LIMIT
                        }}
                        helperText={`${newQuote.length}/${CHARACTER_LIMIT} characters`}
                        value={newQuote}
                    />

                    <InputLabel htmlFor="grouped-select" className="input-label">
                        Term {termErr ? (<span className="term warn">
                            &emsp; <i className="exclamation circle icon" /> Select a term
                        </span>) : ""}
                    </InputLabel>
                    <Select defaultValue="" className="quote-input" value={newTerm} input={<Input id="grouped-select" onChange={this.handleTerm} />}>
                        <MenuItem value="Spring 2020">Spring 2020</MenuItem>
                        <MenuItem value="Winter 2020">Winter 2020</MenuItem>
                        <MenuItem value="Fall 2019">Fall 2019</MenuItem>
                        <MenuItem value="Spring 2019">Spring 2019</MenuItem>
                        <MenuItem value="Winter 2019">Winter 2019</MenuItem>
                        <MenuItem value="Fall 2018">Fall 2018</MenuItem>
                        <MenuItem value="Spring 2020"> Spring 2018</MenuItem>
                    </Select>
                    <Button onClick={this.addQuote} className='add-quote-btn'>Add</Button>

                </div>

            </div >


        )
    }


};

export default Quotes; 