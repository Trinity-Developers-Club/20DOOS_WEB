choices = ["stone", "paper", "scissor"];
let comp_score = 0;
let human_score = 0;
document.getElementById("start").addEventListener("click", startGame);
function startGame() {
  //Creating a Reset Button
  let b = document.createElement("button");
  b.classList.add("bt");
  b.style.background = "red";
  b.innerText = "Reset";
  b.id = "reset";
  b.addEventListener("click", reset);
  let score = document.getElementById("scorecard");
  if (score.hasChildNodes()) score.removeChild(score.children[0]);
  const a = ["human", "comp"];
  for (let e = 0; e < 2; e++) {
    let h = document.createElement("div");
    h.classList.add("display");
    score.appendChild(h);
    let p1 = document.createElement("h2");
    p1.innerText = `${a[e]} Score`;
    h.appendChild(p1);
    let p2 = document.createElement("h2");
    h.appendChild(p2);
    p2.innerText = 0;
    p2.id = `${a[e]}`;
  }
  score.appendChild(b);
  document
    .querySelectorAll(".btn")
    .forEach((e) => e.addEventListener("click", update_score));
}
function update_score(evt) {
  let id = evt.currentTarget.id;
  let comp = choices[Math.floor(Math.random() * choices.length)];
  let text = `${id}  VS  ${comp}`;
  document.getElementById("match").innerText = text;
  if (comp == "scissor" && id == "stone") human_score += 1;
  else if (comp == "paper" && id == "stone") comp_score += 1;
  else if (comp == "scissor" && id == "paper") comp_score += 1;
  else if (comp == "stone" && id == "paper") human_score += 1;
  else if (comp == "paper" && id == "scissor") human_score += 1;
  else if (comp == "stone" && id == "scissor") comp_score += 1;
  document.getElementById("human").innerText = human_score;
  document.getElementById("comp").innerText = comp_score;
  if (comp_score == 3 || human_score == 3) {
    document.getElementById("final").innerText =
      comp_score > human_score ? "You lose" : "You win";
    let b = document.getElementById("reset");
    b.style.background = "green";
    b.innerText = "Start New Game";
    document.getElementById("stone").removeEventListener("click", update_score);
    document.getElementById("paper").removeEventListener("click", update_score);
    document.getElementById("scissor").removeEventListener("click", update_score);
    return;
  }
}
function reset() {
  comp_score = 0;
  human_score = 0;
  let b = document.getElementById("reset");
  b.style.background = "red";
  b.innerText = "Reset";
  document.getElementById("final").innerText = "";
  document.getElementById("match").innerText = "";
  document.getElementById("human").innerText = human_score;
  document.getElementById("comp").innerText = comp_score;
  document.getElementById("stone").addEventListener("click", update_score);
  document.getElementById("paper").addEventListener("click", update_score);
  document.getElementById("scissor").addEventListener("click", update_score);
}
