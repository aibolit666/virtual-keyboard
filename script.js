const bodyContent = document.getElementById("root");
let lang = "en";

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
const ruLowerCase = [
  "ё",
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
  "й",
  "ц",
  "у",
  "к",
  "е",
  "н",
  "г",
  "ш",
  "щ",
  "з",
  "х",
  "ъ",
  "\\",
  "Caps",
  "ф",
  "ы",
  "в",
  "а",
  "п",
  "р",
  "о",
  "л",
  "д",
  "ж",
  "э",
  "Enter",
  "Shift",
  "я",
  "ч",
  "с",
  "м",
  "и",
  "т",
  "ь",
  "б",
  "ю",
  ".",
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
const ruUpperCase = [
  "Ё",
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
  "Й",
  "Ц",
  "У",
  "К",
  "Е",
  "Н",
  "Г",
  "Ш",
  "Щ",
  "З",
  "Х",
  "Ъ",
  "\\",
  "Caps",
  "Ф",
  "Ы",
  "В",
  "А",
  "П",
  "Р",
  "О",
  "Л",
  "Д",
  "Ж",
  "Э",
  "Enter",
  "Shift",
  "Я",
  "Ч",
  "С",
  "М",
  "И",
  "Т",
  "Ь",
  "Б",
  "Ю",
  ".",
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
if (localStorage.getItem("lang")) {
  lang = localStorage.getItem("lang");
}
let keyValues;
if (lang === "en") {
  keyValues = lowerCase;
}
if (lang === "ru") {
  keyValues = ruLowerCase;
}

let capsLock = false;
let leftShift = false;
let rightShift = false;
let leftCtrl = false;
let rightCtrl = false;

const wrapper = document.createElement("div");
const wrapperButtonKeys = document.createElement("div");
const labelForInput = document.createElement("label");
const textArea = document.createElement("textarea");
const changeLangInfo = document.createElement("span");
labelForInput.classList.add("cursor");
labelForInput.id = "labelCursor";
labelForInput.for = "input";
textArea.classList.add("keyboard-input");
textArea.placeholder = "Click here";
textArea.id = "input";
textArea.type = "text";
textArea.autofocus = true;
changeLangInfo.innerHTML = "Change language keys: Left Alt + Left Shift";
wrapper.classList.add("wrapper");
wrapperButtonKeys.classList.add("row");
changeLangInfo.classList.add("info");
bodyContent.appendChild(labelForInput);
bodyContent.appendChild(textArea);
bodyContent.appendChild(wrapper);
wrapper.appendChild(wrapperButtonKeys);
bodyContent.appendChild(changeLangInfo);

keyValues.forEach((key) => {
  const buttonKey = document.createElement("button");
  buttonKey.classList.add("btn-key");

  switch (key) {
    case "Backspace":
      buttonKey.classList.add("backspace");
      buttonKey.innerHTML = key;
      break;
    case "ё":
      buttonKey.classList.add("quote");
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
  } else if (inputVal === "Shift") {
    leftShift = !leftShift;
  } else if (inputVal === "shift") {
    rightShift = !rightShift;
  } else if (inputVal === "leftCtrl") {
    leftCtrl = !leftCtrl;
  } else if (inputVal === "rightCtrl") {
    rightCtrl = !rightCtrl;
  } else {
    inputArr.push(inputVal);
    input.value = inputArr.join("");
    input.focus();
  }

  if (e.target.textContent === "Shift" && leftShift) {
    document.querySelector(".shift").classList.toggle("active");
    leftShift = !leftShift;
    // eslint-disable-next-line no-use-before-define
    capsLockFu();
  }

  if (e.target.textContent === "shift" && rightShift) {
    document.querySelector(".right-shift").classList.toggle("active");
    rightShift = !rightShift;
    // eslint-disable-next-line no-use-before-define
    capsLockFu();
  }

  buttonKeys.forEach((i) => {
    if (e.data === i.innerHTML) {
      // eslint-disable-next-line no-param-reassign
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

const changeLang = () => {
  if (keyValues === lowerCase) {
    keyValues = ruLowerCase;
    lang = "ru";
  } else if (keyValues === upperCase) {
    keyValues = ruUpperCase;
    lang = "ru";
  } else if (keyValues === ruLowerCase) {
    keyValues = lowerCase;
    lang = "en";
  } else if (keyValues === ruUpperCase) {
    keyValues = upperCase;
    lang = "en";
  }
  localStorage.setItem("lang", lang);
  buttonKeys.forEach((i, index) => {
    // eslint-disable-next-line no-param-reassign
    i.innerHTML = keyValues[index];
  });
};

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

function runOnKeys(func, ...codes) {
  const pressed = new Set();
  document.addEventListener("keydown", (event) => {
    pressed.add(event.code);
    // eslint-disable-next-line no-restricted-syntax
    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });
  document.addEventListener("keyup", (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(() => changeLang(), "AltLeft", "ShiftLeft");
const capsL = document.querySelector(".caps");
runOnKeys(() => capsLockFu(), "CapsLock");
capsL.addEventListener("click", capsLockFu);
