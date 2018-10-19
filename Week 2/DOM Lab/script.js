// console.log(document.getElementById("nav-bar"));
// console.log(document.querySelector("main"));
// console.log(document.querySelectorAll('a'));

// setTimeout(() => {
//   let element = document.querySelector(".logo");
//   console.log(element.innerHTML);
//   element.innerHTML = "BrainStation"
// }, 1000);

// setTimeout(() => {
//   let elements = document.querySelectorAll("a");
//   elements.forEach((element) => {
//     element.style.textDecoration = "underline";
//   });
// }, 1000);

console.log(document.getElementById('nav-bar'));
console.log(document.querySelector('main'));
console.log(document.querySelectorAll('a'));

setTimeout(function(){
  var logo = document.querySelector('.logo');
  console.log(logo.innerHTML);
  logo.innerHTML = "BRAND";
},2000);

setTimeout(function(){
  var aList = document.querySelectorAll('a');
  aList.forEach(function(element) {
    element.style.textDecoration = 'underline';
  });
}, 4000)







































