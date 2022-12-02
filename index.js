// const element= document.getElementById("para");
// document.getElementById("demo").innerHTML = element.innerHTML;

// const element = document.getElementsByTagName("span");
// document.getElementById("demo").innerHTML = 'The text in paragraph getElementsByTagName is: ' + element[0].innerHTML;

const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
 document.getElementById("demo").innerHTML = 'The paragraph inside "main" is: ' + y[0].innerHTML;
// document.getElementById("demo").innerHTML = 'The paragraph inside "main" is: ' + y[1].innerHTML;
const z = document.getElementsByClassName("getElementsByClassName");
// document.getElementById("demo").innerHTML = 'The paragraph inside "main" is: ' + z[0].innerHTML;
const a = document.getElementsByName("getElementsByName");
//document.getElementById("demo").innerHTML = 'The paragraph inside "main" is: ' + a[0].innerHTML;
const b =document.querySelector("div p.para");
//document.getElementById("demo").innerHTML = 'The paragraph inside "main" is: ' + b[0].innerHTML;
const c = document.querySelectorAll("p.para");
//document.getElementById("demo").innerHTML = 'The paragraph inside "main" is: ' + c[0].innerHTML;


