const bodyContent = document.getElementById("root");

const wrapper = document.createElement("div");
const wrapperButtonKeys = document.createElement("div");

const keyValues = [
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
  "+",
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
  "?",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Fn",
  "Ctrl",
];
wrapper.classList.add("wrapper");
wrapperButtonKeys.classList.add("row");

keyValues.forEach((key) => {
  const buttonKey = document.createElement("button");
  buttonKey.classList.add("btn-key");
  switch (key) {
    case "Backspace":
      buttonKey.classList.add("backspace");
      buttonKey.textContent = key;
      break;
    case "`":
      buttonKey.classList.add("quote");
      buttonKey.textContent = key;
      break;
    case "'":
      buttonKey.classList.add("quote");
      buttonKey.textContent = key;
      break;
    case ";":
      buttonKey.classList.add("quote");
      buttonKey.textContent = key;
      break;
    case "Tab":
      buttonKey.classList.add("tab");
      buttonKey.textContent = key;
      break;
    case "\\":
      buttonKey.classList.add("slash");
      buttonKey.textContent = key;
      break;
    case "Enter":
      buttonKey.classList.add("enter");
      buttonKey.textContent = key;
      break;
    case "Caps":
      buttonKey.classList.add("caps");
      buttonKey.textContent = key;
      break;
    case "Shift":
      buttonKey.classList.add("shift");
      buttonKey.textContent = key;
      break;
    case "Ctrl":
      buttonKey.classList.add("ctrl");
      buttonKey.textContent = key;
      break;
    case "Win":
      buttonKey.classList.add("win");
      buttonKey.textContent = key;
      break;
    case "Alt":
      buttonKey.classList.add("alt");
      buttonKey.textContent = key;
      break;
    case "Space":
      buttonKey.classList.add("space");
      buttonKey.textContent = key;
      break;
    case "Fn":
      buttonKey.classList.add("fn");
      buttonKey.textContent = key;
      break;
    default:
      buttonKey.textContent = key.toLowerCase();
  }
  buttonKey.setAttribute("type", "button");
  wrapperButtonKeys.appendChild(buttonKey);
});

bodyContent.appendChild(wrapper);
wrapper.appendChild(wrapperButtonKeys);
