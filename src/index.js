import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import logo from './logo.svg';




var clickhandler = function clickhandler() {
    var search = document.getElementById(`in`).value;
    var url = "https://www.google.com/search?q="+search;
    console.log(url);
   // post(url,null,"GET");
   var request = require('request');
   url = "http://cors-anywhere.herokuapp.com/"+url;
request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  var fill = document.getElementById(`inResult`);
  fill.value = body.substring(1,100);
});
   
};

var googImg = React.createElement("img",
                                    {src:`https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png`, }, null);

var googInput = React.createElement("input",{type:"text", id:"in"},null);
var googResults = React.createElement("textarea",{rows:"10", id:"inResult"},null);
var googButton = React.createElement("button",{onClick:clickhandler},"click here to search");
var topDiv = React.createElement("div",null,googImg,googInput,googButton,googResults);
ReactDOM.render(topDiv,document.getElementById('root'));

registerServiceWorker();
