import React, { Component } from 'react';
import $ from 'jquery';


let colors = require('../data/colors.json');
let quotes = require('../data/quotes.json');

class QuoteBox extends Component{
  constructor(props){
    super(props);

    this.state = {
        color : "#8a2be2",
        quote : "The world is the great gymnasium where we come to make ourselves strong.",
        author: "Swami Vivekananda"
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

changeQuote(){
    let colorsIndex = Math.floor( Math.random () * (92 - 1 + 1)) + 1;
    let quotesIndex = Math.floor( Math.random () * (85 - 1 + 1)) + 1;
    console.log(`Updating from changeQuote quote : ${this.state.quote} and author: ${this.state.author}`);
    $('.App').css("background-color",colors[colorsIndex]);
    $('.quote').css("color",colors[colorsIndex]);
    // $('.quote').html('<i class="fa fa-quote-left" aria-hidden="true"></i>'+quotes[quotesIndex][0]);
    $('.author').css("color",colors[colorsIndex]);
    // $('.author').html('<i class="fa fa-hashtag" aria-hidden="true"></i>'+quotes[quotesIndex][1]);
    $('.fa-twitter').css("background-color",colors[colorsIndex]);
    $('.nextButton').css("background-color",colors[colorsIndex]);
    $(".quote").animate({ opacity: 0 }, 500,function() { $(this).animate({ opacity: 1 }, 500);
    $('.quote').html('<i class="fa fa-quote-left" aria-hidden="true"></i>'+quotes[quotesIndex][0]); });
    $(".author").animate({ opacity: 0 }, 500,function() { $(this).animate({ opacity: 1 }, 500);
    $('.author').html('<i class="fa fa-hashtag" aria-hidden="true"></i>'+quotes[quotesIndex][1]); });
    $('.tweet').attr({
      href: 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + quotes[quotesIndex][0] + '" ' + quotes[quotesIndex][1]
    });
}


render(){
    const submit = "New Quote";
    const linkStyle ={
      textDecoration : "none",
      color: "#fff",
      cursor: "pointer"
    };

    let tweetLink = 'https://twitter.com/intent/tweet?hashtags=quotes&text="The world is the great gymnasium where we come to make ourselves strong." Swami Vivekananda' ;
    console.log(`Updating from changeQuote quote : ${this.state.quote} and author: ${this.state.author}`);
    return(
        <div className="QuoteContainer">
           <div className="QuoteBox">
              <blockquote className="quote color-transition"><i className="fa fa-quote-left" aria-hidden="true"></i>{this.state.quote}</blockquote>
            <p className="author color-transition"><i className="fa fa-hashtag" aria-hidden="true"></i>{this.state.author}</p>
              <div className="footer"><a href={tweetLink} className="tweet" title="Let's tweet this!">
                <i className="fa fa-twitter color-transition" aria-hidden="true"></i>
              </a>
              <button className="nextButton color-transition" onClick={this.changeQuote}>{submit}</button>
            <div className="copy">
 				   	   <i className="fa fa-code"></i>&nbsp; with &nbsp;<i className="fa fa-heart"></i>&nbsp; &amp; &nbsp;<i className="devicon-react-original colored"></i> by &nbsp;
                 <a href="https://shashank7200.github.io" target="_blank" style={linkStyle}>Shashank Shekhar</a>
 				   </div>
              </div>

           </div>

        </div>
    );
  }
}

export default QuoteBox;
