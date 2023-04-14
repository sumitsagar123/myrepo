const typingText = document.querySelector(".typing-text p"),
  inpField = document.querySelector(".wrapper .input-field"),
  mistaketag = document.querySelector(".mistake span"),
  timetag = document.querySelector(".time span b"),
  wpmtag = document.querySelector(".wpm span"),
  cpmtag = document.querySelector(".cpm span"),
  tryagainbtn = document.querySelector("button");

let timer,
  lastindex = 0,
  maxtime = 15,
  timeleft = maxtime,
  mistakes = 0,
  istyping = 0;

function randomParagraph() {
  let randomIndex = Math.floor(Math.random() * paragraph.length);
  typingText.innerHTML = "";
  paragraph[randomIndex].split("").forEach((span) => {
    let spantag = `<span>${span}</span>`;
    typingText.innerHTML += spantag;
  });
  typingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
}

const initTyping = () => {
  const character = typingText.querySelectorAll("span");
  let typechar = inpField.value.split("")[lastindex];
  if (lastindex < character.length - 1 && timeleft > 0) {
    if (!istyping) {
      timer = setInterval(initTimer, 1000);
      istyping = true;
    }
    if (typechar == null) {
      lastindex--;
      if (character[lastindex].classList.contains("incorrect")) {
        mistakes--;
      }
      character[lastindex].classList.remove("correct", "incorrect");
    } else {
      if (character[lastindex].innerText === typechar) {
        character[lastindex].classList.add("correct");
      } else {
        mistakes++;
        character[lastindex].classList.add("incorrect");
      }
      lastindex++;
    }

    character.forEach((span) => span.classList.remove("active"));
    character[lastindex].classList.add("active");
    let wpm = Math.round(
      ((lastindex - mistakes) / 5 / (maxtime - timeleft)) * 60
    );
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    mistaketag.innerText = mistakes;
    wpmtag.innerText = wpm;
    cpmtag.innerText = lastindex - mistakes;
  } else {
    inpField.value = "";
    clearInterval(timer);
  }
};

function initTimer() {
  if (timeleft > 0) {
    timeleft--;
    timetag.innerText = timeleft;
  } else {
    clearInterval(timer);
  }
}
function resetgame() {
  randomParagraph();
  lastindex = 0;
  mistakes = 0;
  istyping = 0;
  timeleft = maxtime;
  wpmtag.innerText = 0;
  cpmtag.innerText = 0;
  inpField.value = "";
  timetag.innerHTML = maxtime;
  // console.log(timetag)
  clearInterval(timer);
}
randomParagraph();
inpField.addEventListener("input", initTyping);
tryagainbtn.addEventListener("click", resetgame);
