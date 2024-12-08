
const modal = document.getElementById("my_modal_5");
// card-1
document.getElementById("donate-btn1").addEventListener("click", function () {
  const display = textValue("display");
  const inputEl = inputFieldValue("input1");
  const cardDisplay = textValue("display1");
  if (typeof inputEl !== "number" || inputEl <= 0 || isNaN(inputEl)) {
    return alert("Invalid Input");
  }
  const dontationAmount = cardDisplay + inputEl;
  const decreaseAmount = display - dontationAmount;
  if (decreaseAmount <= 0) {
    return alert("Insufficient Balance");
  }
 document.getElementById("display1").innerText= dontationAmount;
  document.getElementById("display").innerText = decreaseAmount;
  if(0<dontationAmount){
    modal.showModal();
  }
});
// card-2
document.getElementById("donate-btn2").addEventListener("click", function () {
  const display = textValue("display");
  const inputEl = inputFieldValue("input2");
  const cardDisplay = textValue("display2");
  if (typeof inputEl !== "number" || inputEl <= 0 || isNaN(inputEl)) {
    return alert("Invalid Input");
  }
  const dontationAmount = cardDisplay + inputEl;
  const decreaseAmount = display - dontationAmount;
  if (decreaseAmount <= 0) {
    return alert("Insufficient Balance");
  }
 document.getElementById("display2").innerText= dontationAmount;
  document.getElementById("display").innerText = decreaseAmount;
  if(0<dontationAmount){
    modal.showModal();
  }
});
// card-3
document.getElementById("donate-btn3").addEventListener("click", function () {
  const display = textValue("display");
  const inputEl = inputFieldValue("input3");
  const cardDisplay = textValue("display3");
  if (typeof inputEl !== "number" || inputEl <= 0 || isNaN(inputEl)) {
    return alert("Invalid Input");
  }
  const dontationAmount = cardDisplay + inputEl;
  const decreaseAmount = display - dontationAmount;
  if (decreaseAmount <= 0) {
    return alert("Insufficient Balance");
  }
 document.getElementById("display3").innerText= dontationAmount;
  document.getElementById("display").innerText = decreaseAmount;
  if(0<dontationAmount){
    modal.showModal();
  }
});


// navigate to blog btn js
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});





// card-1 without using function
// document.getElementById("donate-btn").addEventListener("click", function () {
//     const displayInnerText=display.innerText
//     const inputElValue=inputEl.value;
//     const display1InnerText=display1.innerText;
//   const displayNumber = parseFloat(displayInnerText);
//   const inputEl1Number = parseFloat(inputElValue);
//   const display1Number = parseFloat(display1InnerText);
//   if(typeof inputEl1Number!=="number" || inputEl1Number<=0 || isNaN(inputEl1Number)){
//     return alert("Invalid input");
//   }
//   const sum = display1Number + inputEl1Number;
//   const total = displayNumber - inputEl1Number;
//   if(total<=0){
//     return alert("Insufficient Balance");
//   }
//   document.getElementById("display1").innerText = sum;
//   document.getElementById("display").innerText = total;
//   if(display1InnerText<sum){
//     modal.showModal();
//   }
// });