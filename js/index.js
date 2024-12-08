// modal id 
const modal = document.getElementById("my_modal_5");
// data-time 
const bangladeshTime = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Dhaka",
});
// card-1
document.getElementById("donate-btn1").addEventListener("click", function () {
  const display = textValue("display");
  const inputEl = inputFieldValue("input1");
  const cardDisplay = textValue("display1");
  if (typeof inputEl !== "number" || inputEl <= 0 || isNaN(inputEl)) {
    return alert("Invalid Input");
  }
  const dontationAmount = cardDisplay + inputEl;
  const decreaseAmount = display - inputEl;
  if (decreaseAmount <= 0) {
    return alert("Insufficient Balance");
  }
  document.getElementById("display1").innerText = dontationAmount;
  document.getElementById("display").innerText = decreaseAmount;
  // trasition history
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="space-y-2 p-4 lg:p-8 border rounded-xl lg:w-3/4 mx-auto mb-3 lg:mb-5 text-center">
  <h4 class="text-xs lg:text-xl font-medium">${dontationAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h4>
  <p class="text-xs lg:text-xl text-secondary">Date: ${bangladeshTime} (Bangladesh Standard Time)</p>
  </div>
  `;
  document.getElementById("Transition-container").appendChild(div);
  if (0 < dontationAmount) {
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
  const decreaseAmount = display - inputEl;
  if (decreaseAmount <= 0) {
    return alert("Insufficient Balance");
  }
  document.getElementById("display2").innerText = dontationAmount;
  document.getElementById("display").innerText = decreaseAmount;
  // trasition history
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="space-y-2 p-4 lg:p-8 border rounded-xl lg:w-3/4 mx-auto mb-3 lg:mb-5 text-center">
  <h4 class="text-xs lg:text-xl font-medium">${dontationAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
  <p class="text-xs lg:text-xl text-secondary">Date: ${bangladeshTime} (Bangladesh Standard Time)</p>
  </div>
  `;
  document.getElementById("Transition-container").appendChild(div);
  if (0 < dontationAmount) {
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
  const decreaseAmount = display - inputEl;
  if (decreaseAmount <= 0) {
    return alert("Insufficient Balance");
  }
  document.getElementById("display3").innerText = dontationAmount;
  document.getElementById("display").innerText = decreaseAmount;
  // trasition history
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="space-y-2 p-4 lg:p-8 border rounded-xl lg:w-3/4 mx-auto mb-3 lg:mb-5 text-center">
  <h4 class="text-xs lg:text-xl font-medium">${dontationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
  <p class="text-xs lg:text-xl text-secondary">Date: ${bangladeshTime} (Bangladesh Standard Time)</p>
  </div>
  `;
  document.getElementById("Transition-container").appendChild(div);
  if (0 < dontationAmount) {
    modal.showModal();
  }
});

// donation button
document.getElementById("donation-page").addEventListener("click", function () {
  showPage("show-donation-page");
  document.getElementById("donation-page").classList.remove("bg-transparent");
  document.getElementById("donation-page").classList.add("bg-common");
  document.getElementById("history-page").classList.remove("bg-common");
  document.getElementById("history-page").classList.add("bg-transparent");
});

// history button
document.getElementById("history-page").addEventListener("click", function () {
  showPage("show-history-page");
  document.getElementById("history-page").classList.remove("bg-transparent");
  document.getElementById("history-page").classList.add("bg-common");
  document.getElementById("donation-page").classList.add("bg-transparent");
  document.getElementById("donation-page").classList.remove("bg-common");
});

// navigate home page to blog page
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
