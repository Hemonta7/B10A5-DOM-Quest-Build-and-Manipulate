function inputFieldValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  const inputFieldValueNumber = parseFloat(inputFieldValue);
  return inputFieldValueNumber;
}

function textValue(id) {
  const textValue = document.getElementById(id).innerText;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

function showPage(id) {
  document.getElementById("show-donation-page").classList.add("hidden");
  document.getElementById("show-history-page").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}