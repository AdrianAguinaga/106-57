
function sayHello() {
    console.log("hello world");
}

function init() {
    console.log("hello im the init function");
    sayHello();
}

window.onload = init;// This will run when the page
//  is loaded - when the html and the
// css are loaded the logic will run
// just a comment to explain the code

