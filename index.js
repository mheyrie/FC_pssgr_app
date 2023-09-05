let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl)

let count = 0
function increment() {
  count += 1
  countEl.innerText = count
}

 function save() {
  let prevNumber = count + " - "
  saveEl.innerText += " " + prevNumber + " "
  //  console.log(count)
 }




















 //  const nameField = document.getElementById("userName");
// const sendButton = document.getElementById("sendButton");

// sendButton.disabled = true;
// [note: this is disabled since it causes this article to always load with this example focused and scrolled into view]
//nameField.focus();

// nameField.addEventListener("input", (event) => {
//   const elem = event.target;
//   const valid = elem.value.length !== 0;

//   if (valid && sendButton.disabled) {
//     sendButton.disabled = false;
//   } else if (!valid && !sendButton.disabled) {
//     sendButton.disabled = true;
//   }
// });