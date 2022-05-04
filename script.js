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

wrapper.classList.add("wrapper");
wrapperButtonKeys.classList.add("row");

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
      buttonKey.innerHTML = key.toLowerCase();
      break;
  }
  buttonKey.setAttribute("type", "button");
  wrapperButtonKeys.appendChild(buttonKey);
});

bodyContent.appendChild(wrapper);
wrapper.appendChild(wrapperButtonKeys);
