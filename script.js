const input = document.querySelector("#user-input");
const results = document.querySelector("#results-div");
const check_button = document.querySelector("#check-btn");
const clear_button = document.querySelector("#clear-btn");




const reg1 = /^1 \d\d\d-\d\d\d-\d\d\d\d$/;
const reg2 = /^1 \(\d\d\d\) \d\d\d-\d\d\d\d$/;
const reg3 = /^1\(\d\d\d\)\d\d\d-\d\d\d\d$/;
const reg4 = /^1 \d\d\d \d\d\d \d\d\d\d$/;
const reg5 = /^\d\d\d\d\d\d\d\d\d\d$/;
const reg6 = /^\d\d\d-\d\d\d-\d\d\d\d$/;
const reg7 = /^\(\d\d\d\)\d\d\d-\d\d\d\d$/;

const denyList = [reg1,reg2,reg3,reg4,reg5,reg6,reg7];

const isValid = (msg) => denyList.some((regex) => regex.test(msg));

check_button.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please provide a phone number");
    return;
  }

  results.innerText += isValid(input.value)
    ? "Valid US number: " + input.value +"\n"
    : "Invalid US number: " + input.value + "\n";
    input.value = "";

});

clear_button.onclick=clear;

function clear(){
  results.innerText="";
}
