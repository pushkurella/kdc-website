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
            quotes: [],
            colors: [],
            angles: [],
            loaded: false,
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
        for (let i in quotes) {
            angles.push({
                transform: `rotate(${Math.ceil((Math.random() * 40) - 20)}deg)`,
                marginTop: `${Math.ceil((Math.random() * 13) + 17)}%`,
                marginLeft: `${Math.ceil((Math.random() * 12))}%`
            });
            colors.push(`sticky note icon post col${Math.ceil(Math.random() * 4)}`);
        }

        this.setState({ colors, angles })
    }

    toggleExpanded = () => {
        this.setState({ addExpanded: !this.state.addExpanded });
    };

    handleName = (e) => {
        this.setState({ newName: e.target.value });
    }
    handleQuote = (e) => {
        this.setState({ newQuote: e.target.value });
    }
    handleTerm = (e) => {
        this.setState({ newTerm: e.target.value });
    }

    addQuote = () => {
        this.setState({ nameErr: false, termErr: false, quoteErr: false });
        const { newName, newQuote, newTerm } = this.state;
        if (newName === '') { this.setState({ nameErr: true }); }
        if (newQuote === '') { this.setState({ quoteErr: true }); }
        if (newTerm === '') { this.setState({ termErr: true }); }
        const { nameErr, quoteErr, termErr } = this.state;
        if (!nameErr && !quoteErr && !termErr) {
            //some sort of submit logic to CMS
        }

    }

    render() {
        var { quotes, colors, angles, newQuote, newName, newTerm, termErr, nameErr, quoteErr } = this.state;
        var CHARACTER_LIMIT = 100;
        return (
            <div className='leave-your-mark'>
                <h2 className="wall-header">Leave Your Mark</h2>
                <div className="ui divider" />
                <div className="quote-wall" style={{ height: `${35 * (quotes.length / 4 + 1)}vh` }}>


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
                    <TextField
                        id="standard-multiline-static"
                        label={nameErr ? (<div>Quote   <span className="name warn">
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
                        <MenuItem value="Spring 2020">Winter 2020</MenuItem>
                        <MenuItem value="Spring 2020">Fall 2019</MenuItem>
                        <MenuItem value="Spring 2020">Spring 2019</MenuItem>
                        <MenuItem value="Spring 2020">Winter 2019</MenuItem>
                        <MenuItem value="Spring 2020">Fall 2018</MenuItem>
                        <MenuItem value="Spring 2020"> Spring 2018</MenuItem>
                    </Select>

                    <Button onClick={this.addQuote} className='add-quote-btn'>Add</Button>


                </div>
            </div >


        )
    }


};

export default Quotes; 