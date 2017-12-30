'use strict';

/*
I want to create this project just using vanilla javascript. FreeCodeCamp does use jQuery a lot for the projects but I feel that jquery
is not necessary for this project and misses on some of the points of how javascript truly works. 

1. Create a JSON object
2. Parse that JSON and tested to see it workss correctly
3. Create an object or a function that randomnizes the JSON file.
4. Create an object that grabs the DOM elements and sends the random quote to the view. 
5. I could always do this project with Angular but what's the fun in that?!
*/

var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var author = document.getElementById("author");
var tweet = document.getElementById("tweet");

window.onload = ajax();
btn.addEventListener("click", ajax);


function ajax(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://apolloinfinity.github.io/src/data/quotes.json');
    xhr.onload = function() {
        if(xhr.status >= 200 && xhr.status <= 400){

            //This variable holds the JSON items
            var trekQuotes = JSON.parse(xhr.responseText);
            var rand = Math.floor(Math.random() * trekQuotes.length);
            quote.innerText = trekQuotes[rand].quoteText;
            author.innerText = "- " + trekQuotes[rand].quoteAuthor;

            // console.log(trekQoutes[0].quoteText); //Test only

        } else {
            console.log("connected to server but with an error");
        }


    }
    xhr.send();
}



tweet.addEventListener("click", function(e){
    e.preventDefault();
    
    window.open('https://twitter.com/intent/tweet?hashtags=quotes,fcc&related=freecodecamp&text='+ encodeURIComponent('"' + quote.innerText + '" ' + author.innerText), 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');

});
