// let is a varaible declaration that is scoped to the curnt code block.
let ClickCount = 0;
// const is a 'variable'(not really,it can't be varied)declaration that is scoped to the current code block.It can't be editable.
const linkToClick = document.querySelector("a");
//var is a global variable declaration that you should avoid whenever possible.
// var myName = "Shivani";

// In the above const declaration we used a querySelector(which accepts a string for a CSS selector and returns the first element it finds that selector's requirements) to point to our link.
// Now we are using the addEventListener method to wait for an event to occur and then run some code.
// "click" specifies the event we are waiting for, and the anonymous (no name) function is the code that will run.

linkToClick.addEventListener("click",function(event){
    console.log("Script works!");
    ClickCount++;
    // If the user hasn't clicked 4 times, let them know (via console) that they'll have to click more.
    if(ClickCount < 0)
    {
        console.log(event.target);
        console.log("You will have to click the link"+(4-ClickCount)+"more time before being redirected.");
        // Stop the link from redirecting.
        event.preventDefault();
    }
    else
    {
        // If they've clicked the 4 times, do not stop the behaviour and let the redirect occur.
        console.log("you should be redirected now");
    }

});