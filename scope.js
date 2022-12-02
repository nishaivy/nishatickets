//Global Scope
//A variable declared at the top of a program or outside of a function is considered a global scope variable.
// program showing block-scoped concept

let a4 = 'Hello'; // global variable

function greet() {

    // local variable
    let b4 = 'World';

    console.log(a4 + ' ' + b4);

    if (b4 == 'World') {

        // block-scoped variable
        let c4 = 'nisha';

        console.log(a4 + ' ' + b4 + ' ' + c4);
    }

    // variable c cannot be accessed here
    //console.log(a4 + ' ' + b4 + ' ' + c4);
}

greet();

//output
// Hello World
// Hello World nisha
// Uncaught ReferenceError: c is not defined
