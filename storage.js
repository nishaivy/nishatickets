//cookies create
// console.log(document.cookie);
let a1=document.cookie="cookiename=nisha123"
let b2=document.cookie="cookiename2=priya123346"
//update cookies
a1=document.cookie="cookiename=amit123";
//get cookies
console.log(a1);

//using alert cookies set key value
let key=prompt("enter your Key")
let value=prompt("enter the value")
b2=`${key}=${value}`
console.log(b2);

//cookies expires

document.cookie = "VisiterName=NishaHiremani; expires=Mon, 12 Jun 2011:00:00:00 GMT; ";
//deleting cookies
document.cookie = "VisiterName=; expires=Mon, 12 Jun 2011:00:00:00 GMT; ";



console.log("This is Local & Session storage in JavaScript");

//check storage window.localStorage command in console
//add key value in local storage
localStorage.setItem('Name','Nisha');
//window.localStorage.Name2
localStorage.setItem('Name2','Pavan');
localStorage.setItem('Name3','Rohit');
localStorage.setItem('Name4','Amisha');

//get and retrieve an item
let name=localStorage.getItem("Name3");
console.log(name);

//clear all storage
// localStorage.clear();

//clear 1 item
localStorage.removeItem("Name4");

//store array
let arr=['apple','mango','banana'];

localStorage.setItem('fruits',JSON.stringify(arr));
name=JSON.parse(localStorage.getItem('fruits'));
console.log(name);

//Session Storage objects can be accessed using the sessionStorage read-only property. The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends.
//session storage
sessionStorage.setItem('sessionName','Nisha');
sessionStorage.setItem('sessionName2','Pavan');
sessionStorage.setItem('sessionName3','Rohit');
sessionStorage.setItem('sessionName4','Amisha');

//clear all storage
// sessionStorage.clear();

//clear 1 item
sessionStorage.removeItem("sessionName4");

//sessionStorage.getItem(key)
sessionStorage.getItem("sessionName3")