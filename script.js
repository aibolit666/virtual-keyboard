const bodyContent = document.getElementById("root");

const lowerCase = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "Del",
  "Caps",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "&#8593",
  "shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Ctrl",
  "&#8592;",
  "&#8595;",
  "&#8594;",
];
const upperCase = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "}",
  "|",
  "Del",
  "Caps",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ":",
  '"',
  "Enter",
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "?",
  "&#8593",
  "shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Ctrl",
  "&#8592;",
  "&#8595;",
  "&#8594;",
];

let keyValues = lowerCase;

let capsLock = false;

const wrapper = document.createElement("div");
const wrapperButtonKeys = document.createElement("div");
const labelForInput = document.createElement("label");
const textArea = document.createElement("textarea");
labelForInput.classList.add("cursor");
labelForInput.id = "labelCursor";
labelForInput.for = "input";
textArea.classList.add("keyboard-input");
textArea.placeholder = "Click here";
textArea.id = "input";
textArea.type = "text";
textArea.autofocus = true;
wrapper.classList.add("wrapper");
wrapperButtonKeys.classList.add("row");
bodyContent.appendChild(labelForInput);
bodyContent.appendChild(textArea);
bodyContent.appendChild(wrapper);
wrapper.appendChild(wrapperButtonKeys);

keyValues.forEach((key) => {
  const buttonKey = document.createElement("button");
  buttonKey.classList.add("btn-key");

  switch (key) {
    case "Backspace":
      buttonKey.classList.add("backspace");
      buttonKey.innerHTML = key;
      break;
    case "`":
      buttonKey.classList.add("quote");
      buttonKey.innerHTML = key;
      break;
    case "Tab":
      buttonKey.classList.add("tab");
      buttonKey.innerHTML = key;
      break;
    case "\\":
      buttonKey.classList.add("slash");
      buttonKey.innerHTML = key;
      break;
    case "Del":
      buttonKey.classList.add("del");
      buttonKey.innerHTML = key;
      break;
    case "Enter":
      buttonKey.classList.add("enter");
      buttonKey.innerHTML = key;
      break;
    case "Caps":
      buttonKey.classList.add("caps");
      buttonKey.innerHTML = key;
      break;
    case "Shift":
      buttonKey.classList.add("shift");
      buttonKey.innerHTML = key;
      break;
    case "shift":
      buttonKey.classList.add("right-shift");
      buttonKey.innerHTML = "Shift";
      break;
    case "Ctrl":
      buttonKey.classList.add("ctrl");
      buttonKey.innerHTML = key;
      break;
    case "Win":
      buttonKey.classList.add("win");
      buttonKey.innerHTML = key;
      break;
    case "Alt":
      buttonKey.classList.add("alt");
      buttonKey.innerHTML = key;
      break;
    case "Space":
      buttonKey.classList.add("space");
      buttonKey.innerHTML = key;
      break;
    default:
      buttonKey.innerHTML = key;
      break;
  }
  buttonKey.setAttribute("type", "button");
  wrapperButtonKeys.appendChild(buttonKey);
});
const inputArr = [];
let inputVal = "";
let count = 0;
const buttonKeys = document.querySelectorAll(".btn-key");
const input = document.getElementById("input");
// const label = document.getElementById("labelCursor");

const onInput = (e) => {
  inputVal = e.target.textContent;
  if (e.data !== undefined) {
    inputVal = e.data;
  }
  if (inputVal === "Space") {
    inputVal = " ";
    inputArr.push(inputVal);
    input.value = inputArr.join("");
  } else if (inputVal === "Caps") {
    inputVal = "";
  } else if (inputVal === "Backspace" || inputVal === null) {
    inputArr.pop();
    input.value = inputArr.join("");
  } else if (inputVal === "Tab") {
    inputVal = "    ";
    inputArr.push(inputVal);
    input.value = inputArr.join("");
  } else if (inputVal === "Enter") {
    inputVal = "\n";
    inputArr.push(inputVal);
    input.value = inputArr.join("");
  } else if (inputVal === "←") {
    if (count < inputArr.length) {
      count += 1;
    }
    inputVal = "";
    // todo
    input.value = inputArr.join("");
    input.focus();
  } else {
    inputArr.push(inputVal);
    input.value = inputArr.join("");
    input.focus();
  }
  buttonKeys.forEach((i) => {
    // eslint-disable-next-line no-param-reassign
    if (e.data === i.innerHTML) {
      i.classList.toggle("active");

      setTimeout(() => {
        i.classList.toggle("active");
      }, 100);
    }
  });
};

const keyboardInput = document.querySelector(".keyboard-input");

keyboardInput.addEventListener("input", onInput);
buttonKeys.forEach((i) => i.addEventListener("click", onInput));

const capsLockFu = () => {
  capsLock = !capsLock;
  if (capsLock === true) {
    keyValues = upperCase;
  } else {
    keyValues = lowerCase;
  }

  buttonKeys.forEach((i, index) => {
    // eslint-disable-next-line no-param-reassign
    i.innerHTML = keyValues[index];
  });
};

const capsL = document.querySelector(".caps");

capsL.addEventListener("click", capsLockFu);
